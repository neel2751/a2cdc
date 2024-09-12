import { NextResponse } from "next/server";
import { decrypt } from "@/app/lib/session";
import { cookies } from "next/headers";

// 1. Specify protected routes
const protectedRoutes = ["/DashBoard"];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  // If the user is authenticated and tries to access the login page, redirect to /DashBoard
  if (session?.userId && path === "/Admin") {
    return NextResponse.redirect(new URL("/DashBoard", req.nextUrl));
  }

  // If the user is authenticated and tries to access a protected route, allow access
  if (session?.userId && isProtectedRoute) {
    return NextResponse.next();
  }

  // If the user is not authenticated and tries to access a protected route, redirect to login
  if (!session?.userId && isProtectedRoute) {
    return NextResponse.redirect(new URL("/Admin", req.nextUrl));
  }

  // If the user is authenticated and tries to access a non-protected route, allow access
  if (session?.userId && !isProtectedRoute) {
    return NextResponse.next();
  }

  // If the user is not authenticated and accessing a non-protected route, allow access
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
