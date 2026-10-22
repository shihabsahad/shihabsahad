import { describe, expect, it } from "vitest";
import portraitAsset from "@/assets/shihab-portrait.jpeg.asset.json";
import { portraitUrl } from "@/lib/portrait";

describe("Published portrait address", () => {
  it("uses the public asset host rather than the custom or preview origin", () => {
    const resolved = new URL(portraitUrl, "https://shihabsahad.com");
    expect(resolved.origin).toBe("https://shihabsahad.lovable.app");
    expect(resolved.pathname).toBe(portraitAsset.url);
  });

  it("preserves the exact selected uploaded photo", () => {
    expect(portraitAsset.asset_id).toBe("b2459ea5-b128-4a95-93b1-2166a939da71");
    expect(portraitAsset.size).toBe(279730);
  });
});