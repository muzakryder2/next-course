import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // Option 1
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  const theme = request.cookies.get("theme");
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");
  cookieStore.get("resultsPerPage");

  // Option 2
  // const headerList = await headers();
  // console.log(headerList.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      // "Set-Cookie": "theme=dark", - Cookie option 1
    },
  });
}
