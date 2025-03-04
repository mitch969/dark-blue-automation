
import React from "react";
import { Link } from "react-router-dom";
import { Settings, Linkedin } from "lucide-react";

const ServiceFooter = () => {
  return (
    <footer className="bg-secondary/20 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Settings className="w-8 h-8 text-primary" />
              <span className="text-xl font-display font-semibold text-white">Mivelaz Consulting</span>
            </div>
            <p className="paragraph-text">
              Transformation digitale et intégration d'IA pour PME et indépendants romands.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/automatisation" className="paragraph-text hover:text-foreground transition-colors">Automatisation des processus</Link></li>
              <li><Link to="/services/integration-ai" className="paragraph-text hover:text-foreground transition-colors">Intégration de l'IA</Link></li>
              <li><Link to="/services/sites-web" className="paragraph-text hover:text-foreground transition-colors">Sites web professionnels</Link></li>
              <li><Link to="/#services" className="paragraph-text hover:text-foreground transition-colors">Formation aux outils numériques</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="paragraph-text">hello@mivelaz-consulting.ch</li>
              <li className="paragraph-text">+41 76 822 47 90</li>
              <li className="paragraph-text">Suisse Romande</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/m-mivelaz/" target="_blank" rel="noopener noreferrer" className="paragraph-text hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm paragraph-text">
              © 2025 Mivelaz Consulting. Tous droits réservés
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm paragraph-text hover:text-foreground transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-sm paragraph-text hover:text-foreground transition-colors">Politique des cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ServiceFooter;
