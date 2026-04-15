import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Option 1 using matcher config
  // return NextResponse.redirect(new URL("/", request.url));

  // option 2 using conditional logic
  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  //   }

  // Using cookies
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;
}

// export const config = {
//   matcher: "/profile",
// };
