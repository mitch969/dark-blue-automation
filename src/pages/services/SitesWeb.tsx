
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe } from "lucide-react";
import ServiceNavbar from "@/components/ServiceNavbar";
import ServiceFooter from "@/components/ServiceFooter";

const SitesWeb = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <ServiceNavbar />

      {/* Hero Section */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid z-[1]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center">
              <Globe className="w-12 h-12 text-white" />
            </div>
          </div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Sites web professionnels
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 paragraph-text max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Développez une présence en ligne performante, génératrice de leads et conforme à la législation nLPD.
          </motion.p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Caractéristiques de nos sites web</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass glass-hover p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Design moderne et responsive</h3>
              <p className="paragraph-text">Adaptation parfaite à tous les appareils pour une expérience utilisateur optimale.</p>
            </Card>
            
            <Card className="glass glass-hover p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Optimisé pour le SEO</h3>
              <p className="paragraph-text">Une structure technique parfaitement optimisée pour les moteurs de recherche.</p>
            </Card>
            
            <Card className="glass glass-hover p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Génération de leads</h3>
              <p className="paragraph-text">Des éléments stratégiquement placés pour convertir vos visiteurs en clients.</p>
            </Card>
            
            <Card className="glass glass-hover p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Conforme à la législation</h3>
              <p className="paragraph-text">Respect des normes RGPD et nLPD pour la protection des données.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Notre processus de création</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-9 top-0 h-full w-0.5 bg-gradient-to-b from-primary/80 via-primary/40 to-transparent"></div>
              
              <div className="relative z-10 mb-16">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 bg-primary w-20 h-20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-2xl">1</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-2xl font-semibold mb-4">Découverte et stratégie</h3>
                    <p className="paragraph-text">Nous analysons vos besoins, votre audience cible et vos objectifs pour définir une stratégie web efficace.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mb-16">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 bg-primary w-20 h-20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-2xl">2</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-2xl font-semibold mb-4">Design et maquettes</h3>
                    <p className="paragraph-text">Nous créons des maquettes visuelles de votre site pour validation avant le développement.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mb-16">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 bg-primary w-20 h-20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-2xl">3</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-2xl font-semibold mb-4">Développement</h3>
                    <p className="paragraph-text">Nous développons votre site avec des technologies modernes pour des performances optimales.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 bg-primary w-20 h-20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-2xl">4</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-2xl font-semibold mb-4">Lancement et suivi</h3>
                    <p className="paragraph-text">Nous mettons en ligne votre site et assurons un suivi régulier pour optimiser ses performances.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Prêt à transformer votre présence en ligne?</h2>
          <p className="paragraph-text text-xl mb-10 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet de site web professionnel.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 button-text text-lg px-8 py-6 rounded-xl"
          >
            Prendre rendez-vous
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <ServiceFooter />
    </div>
  );
};

export default SitesWeb;
