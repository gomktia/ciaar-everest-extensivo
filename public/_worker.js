// Cloudflare Pages Worker (Advanced Mode / Direct Upload Fallback)
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/lead") {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      }

      if (request.method === "POST") {
        try {
          const data = await request.json();
          const token =
            env.EVEREST_LEAD_TOKEN ||
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

          const body = await response.text();
          return new Response(body, {
            status: response.status,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });
        } catch (err) {
          return new Response(
            JSON.stringify({ error: err?.message || "Erro interno" }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
        }
      }
    }

    return env.ASSETS.fetch(request);
  },
};

