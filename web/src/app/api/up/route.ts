import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.BACKEND_URL || "http://localhost:3001";
  const res = await fetch(`${base}/up`, { cache: "no-store" });
  const text = await res.text();
  return new NextResponse(text, {
    status: res.status,
    headers: { "content-type": res.headers.get("content-type") || "text/html" },
  });
}
