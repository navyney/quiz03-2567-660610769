import jwt from "jsonwebtoken";

import { DB, readDB } from "@lib/DB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  readDB();

  const body = await request.json();
  const { username , passwprd } = body;
  
  const user = DB.users.find(
    (user) => user.username === username && user.password === password
  );
  
  if (!user) {
    return NextResponse.json(
      {
       ok: false,
      message: "Username or Password is incorrect",
       },
       { status: 400 }
      );
  }
  
  const secret = process.env.JWT_SECRET || "This is my special seceret";
  const token = jwt.sign(
    {}
  )
  return NextResponse.json({ ok: true, token });
};
