
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    
    if (!hasAcceptedCookies) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };
  
  const declineCookies = () => {
    localStorage.setItem("cookiesDeclined", "true");
    setIsVisible(false);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto">
            <div className="glass p-6 rounded-xl max-w-4xl mx-auto relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-2 text-muted-foreground hover:text-white"
                onClick={declineCookies}
              >
                <X className="h-4 w-4" />
              </Button>
              
              <h3 className="text-xl font-semibold mb-2">Utilisation des cookies</h3>
              <p className="paragraph-text mb-4">
                Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, 
                vous acceptez notre utilisation des cookies.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center justify-end">
                <Link to="/politique-cookies" className="text-sm paragraph-text underline hover:text-white transition-colors">
                  Politique des cookies
                </Link>
                <Link to="/politique-confidentialite" className="text-sm paragraph-text underline hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={declineCookies}
                    className="paragraph-text"
                  >
                    Refuser
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={acceptCookies}
                    className="button-text"
                  >
                    Accepter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
