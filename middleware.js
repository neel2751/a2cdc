import { NextResponse } from "next/server";
import { decrypt } from "@/app/lib/session";
import { cookies } from "next/headers";

const protectedRoutes = ["/DashBoard"];
const loggedErrors = new Set(); // Store error identifiers to avoid duplicate logging

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  if (isProtectedRoute) {
    const cookie = cookies().get("session")?.value;
    let session = null;

    try {
      session = await decrypt(cookie);
    } catch (error) {
      // Generate a unique identifier for the error (e.g., based on the error message)
      const errorId = error.message; // Simplified, you might want to use a more robust identifier

      if (!loggedErrors.has(errorId)) {
        console.error("Failed to verify session:", error.message);
        loggedErrors.add(errorId); // Add the error to the set to avoid duplicate logging
      }
    }

    if (session?.userId && path === "/Admin") {
      return NextResponse.redirect(new URL("/DashBoard", req.nextUrl));
    }

    if (session?.userId && isProtectedRoute) {
      return NextResponse.next();
    }

    if (!session?.userId && isProtectedRoute) {
      return NextResponse.redirect(new URL("/Admin", req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
