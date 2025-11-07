import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "chefs-choice-15-trizor-xv",
  "work-sharp-culinary-e5",
  "presto-eversharp",
  "sharp-professional-precision-adjust",
  "chefs-choice-diamond-hone",
  "dalstrong-chef-cleaver",
  "wusthof-petec",
  "brod-taylor-sourdough-home",
  "cold-steel-jimi-slash",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://aromalight.site")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/reviews/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("best", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/light"],
};
