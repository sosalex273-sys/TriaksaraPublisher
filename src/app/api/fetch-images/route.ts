import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  try {
    const text = fs.readFileSync(
      "C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\d2ea136f-e4c4-45d4-8d56-21029ac2b51e\\.system_generated\\steps\\443\\content.md",
      "utf8"
    );
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const urls = new Set<string>();
    while ((match = regex.exec(text)) !== null) {
      if (match[1].startsWith("http")) {
        urls.add(match[1]);
      }
    }
    const regexData = /data-src="([^">]+)"/g;
    while ((match = regexData.exec(text)) !== null) {
      if (match[1].startsWith("http")) {
        urls.add(match[1]);
      }
    }
    return NextResponse.json({ urls: Array.from(urls) });
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}
