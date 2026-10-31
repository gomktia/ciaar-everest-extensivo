// Cloudflare Pages Function: /api/lead
export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data = await context.request.json();

    const token =
      context.env?.EVEREST_LEAD_TOKEN ||
      "evl_94rSjFMI7CP30e7epjrHaK1E55DsN-6C2v1lf-1upkU";

    const payload = {
      email: data.email || "",
      full_name: data.full_name || data.name || "",
      phone_number: data.phone_number || data.whatsapp || "",
      campaign_name: data.campaign_name || data.utm_campaign || "EAOF 2027",
      ad_name: data.ad_name || data.utm_content || "Landing Page",
      utm_source: data.utm_source || "landingpage",
      utm_medium: data.utm_medium || "",
      utm_term: data.utm_term || "",
    };

    const response = await fetch(
      "https://plataforma.everestpreparatorios.com.br/webhooks/leads/everest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Everest-Token": token,
        },
        body: JSON.stringify(payload),
      }
    );

    const text = await response.text();
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = { raw: text };
    }

    return new Response(JSON.stringify(parsed), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err?.message || "Erro interno" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

