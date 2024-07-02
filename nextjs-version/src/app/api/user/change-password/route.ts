import { NextRequest } from "next/server";
import changePassword from "@/@server/services/user/change-password";

export async function PUT(request: NextRequest) {
  const res = await request.json();
  if (res.newPassword !== res.confirmationPassword) {
    return new Response(
      JSON.stringify({
        code: 200,
        data: false,
        message: "Two passwords do not match",
      }),
      {
        status: 200,
      }
    );
  }

  res.id = request.headers.get("userId");
  const result = await changePassword(res);
  return new Response(JSON.stringify({ code: 200, data: true }), {
    status: 200,
  });
}
