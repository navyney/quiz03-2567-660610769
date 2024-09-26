import { DB, readDB, writeDB } from "@lib/DB";
import { checkToken } from "@lib/checkToken";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export const GET = async () => {
  readDB();
  const rawAuthHeader = headers().get("authorization");
  if (!rawAuthHeader || !rawAuthHeader.startsWith("Bearer ")){
  return NextResponse.json({
    ok: false,
    rooms:"Autorization header is required",
  },{status : 401});}
  checkToken;

  try {
    const payload = jwt.verify(token, secret);
    userId = (<Payload>payload).studentId;

    //read role information from "payload" here (just one line code!)
    role = (<Payload>payload).role;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid token",
      },
      { status: 401 }
    );
  }

  //Check role here. If user is "ADMIN" show all of the enrollments instead
  if(role === "ADMIN"){
    return NextResponse.json({
      ok: true,
      roomId: DB.roomId, //replace null with enrollment data!
      roomName : DB.roomName
  })
  }

};

export const POST = async (request: NextRequest) => {
  const payload = checkToken();

  // return NextResponse.json(
  //   {
  //     ok: false,
  //     message: "Invalid token",
  //   },
  //   { status: 401 }
  // );

  readDB();

  // return NextResponse.json(
  //   {
  //     ok: false,
  //     message: `Room ${"replace this with room name"} already exists`,
  //   },
  //   { status: 400 }
  // );

  const roomId = nanoid();

  //call writeDB after modifying Database
  writeDB();

  return NextResponse.json({
    ok: true,
    //roomId,
    message: `Room ${"replace this with room name"} has been created`,
  });
};
