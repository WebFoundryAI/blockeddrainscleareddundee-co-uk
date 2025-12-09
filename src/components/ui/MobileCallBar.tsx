import { Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { BRAND } from "@/config/brand";
import { trackPhoneClick } from "@/lib/trackPhoneClick";

export function MobileCallBar() {
  const location = useLocation();

  if (!BRAND.showMobileCallBar) return null;

  const handlePhoneClick = () => {
    trackPhoneClick(location.pathname);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary text-primary-foreground shadow-lg">
      <a
        href={`tel:${BRAND.phone}`}
        className="flex items-center justify-center gap-3 min-h-[56px] py-4 px-6 hover:bg-primary/90 transition-colors"
        aria-label={`Call ${BRAND.brandName} at ${BRAND.phone}`}
        onClick={handlePhoneClick}
      >
        <Phone className="h-6 w-6 animate-pulse" />
        <span className="font-bold text-base">Tap to Call – Fast Response</span>
      </a>
    </div>
  );
}
