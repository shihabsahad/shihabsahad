import portraitAsset from "@/assets/shihab-portrait.jpeg.asset.json";

// The custom domain is hosted outside Lovable and does not serve /__l5e/.
// Keep the original asset pointer, but resolve it on the public production host.
export const portraitUrl = new URL(
  portraitAsset.url,
  "https://shihabsahad.lovable.app",
).href;