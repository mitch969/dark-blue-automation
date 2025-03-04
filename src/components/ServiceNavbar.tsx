
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Menu } from "lucide-react";
import { motion } from "framer-motion";

const ServiceNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Settings className="w-8 h-8 text-primary" />
            <span className="text-xl font-display font-semibold text-white">Mivelaz Consulting</span>
          </Link>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors">Accueil</Link>
            <Link to="/services/automatisation" className="text-white hover:text-primary transition-colors">Automatisation</Link>
            <Link to="/services/integration-ai" className="text-white hover:text-primary transition-colors">Intelligence Artificielle</Link>
            <Link to="/services/sites-web" className="text-white hover:text-primary transition-colors">Sites Web</Link>
            <Button variant="default" size="sm" className="button-text">Contact</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 bg-background/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-white hover:text-primary transition-colors">Accueil</Link>
              <Link to="/services/automatisation" className="text-white hover:text-primary transition-colors">Automatisation</Link>
              <Link to="/services/integration-ai" className="text-white hover:text-primary transition-colors">Intelligence Artificielle</Link>
              <Link to="/services/sites-web" className="text-white hover:text-primary transition-colors">Sites Web</Link>
              <Button variant="default" size="sm" className="w-full button-text">Contact</Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default ServiceNavbar;
