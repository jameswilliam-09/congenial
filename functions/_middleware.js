
export async function onRequest(context) {
  const TARGET_URL = "https://raw.githubusercontent.com/wahhdkinngg-art/solid-palm/refs/heads/main/1%20(1).gif";

  return new Response(null, {
    status: 302,
    headers: {
      "Location": TARGET_URL,
      "Cache-Control": "no-store, no-cache, must-revalidate"
    }
  });
}
