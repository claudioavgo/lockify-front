import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookies = request.cookies;

  if (!cookies) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const res = await fetch(`${process.env.BACKEND_API_BASE_URL}/me`, {
    headers: { Cookie: cookies.toString() },
    credentials: "include",
  });

  if (!res.ok) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
