import { NextRequest } from "next/server";
import list from "@/@server/services/user/list";
import { getUrlSearchParams } from "@/utils/getUrlSearchParams";

export async function GET(request: NextRequest) {
  const params = getUrlSearchParams(request);
  const result = await list(params);
  return new Response(JSON.stringify({ code: 200, data: result }), {
    status: 200,
  });
}
