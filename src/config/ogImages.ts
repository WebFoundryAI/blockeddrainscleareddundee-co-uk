// OG Image mappings for social sharing
export const SERVICE_OG_IMAGES: Record<string, string> = {
  "blocked-drains": "https://manchesterblockeddrain.co.uk/og/blocked-drains-og.jpg",
  "drain-unblocking": "https://manchesterblockeddrain.co.uk/og/drain-unblocking-og.jpg",
  "cctv-drain-surveys": "https://manchesterblockeddrain.co.uk/og/cctv-surveys-og.jpg",
  "drain-jetting": "https://manchesterblockeddrain.co.uk/og/drain-jetting-og.jpg",
  "emergency-drain-services": "https://manchesterblockeddrain.co.uk/og/emergency-drains-og.jpg",
};

export const LOCATIONS_OG_IMAGE = "https://manchesterblockeddrain.co.uk/og/locations-og.jpg";
export const DEFAULT_OG_IMAGE = "https://manchesterblockeddrain.co.uk/og/manchesterblockeddrain-og.jpg";

export function getServiceOgImage(serviceSlug: string): string {
  return SERVICE_OG_IMAGES[serviceSlug] || DEFAULT_OG_IMAGE;
}
