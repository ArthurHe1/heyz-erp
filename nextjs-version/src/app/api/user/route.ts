import { NextRequest } from "next/server";
import create from "@/@server/services/user/create";
import deleteUser from "@/@server/services/user/delete";
import update from "@/@server/services/user/update";

/**
 * Create a new user
 * @param request
 * @returns
 */
export async function POST(request: NextRequest) {
  const res = await request.json();
  const result = await create(res);
  return new Response(JSON.stringify({ code: 200, data: result }), {
    status: 200,
  });
}

/**
 * Update a user
 * @param request
 * @returns
 */
export async function PUT(request: NextRequest) {
  const res = await request.json();
  const result = await update(res);
  return new Response(JSON.stringify({ code: 200, data: result }), {
    status: 200,
  });
}

/**
 * Delete a user
 * @param request
 * @returns
 */
export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  if (id) {
    const result = await deleteUser(Number(id));
    return new Response(JSON.stringify({ code: 200, data: result }), {
      status: 200,
    });
  }
  return new Response(
    JSON.stringify({ code: 200, data: false, message: "Id is requried" }),
    { status: 200 }
  );
}
