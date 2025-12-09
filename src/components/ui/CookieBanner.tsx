import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie_consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay before showing banner
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-md animate-fade-in">
      <div className="bg-card rounded-lg shadow-lg border border-border p-4">
        <div className="flex items-start justify-between gap-4 mb-3">
          <p className="text-sm text-muted-foreground">
            We use cookies to improve your experience. By continuing to use our
            site, you accept our{" "}
            <Link to="/cookies" className="text-primary hover:underline">
              cookie policy
            </Link>
            .
          </p>
          <button
            onClick={declineCookies}
            className="text-muted-foreground hover:text-foreground shrink-0 p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex gap-3">
          <Button size="lg" onClick={acceptCookies} className="flex-1 min-h-[48px]">
            Accept
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={declineCookies}
            className="flex-1 min-h-[48px]"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
