import list from "@/@server/services/menu/list";

export async function GET() {
  const result = await list();
  return new Response(JSON.stringify({ code: 200, data: result }), {
    status: 200,
  });
}
