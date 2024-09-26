import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Boontharika Korkitrotjana",
    studentId: "660610769",
  });
};
