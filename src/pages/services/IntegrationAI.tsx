
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain } from "lucide-react";
import ServiceNavbar from "@/components/ServiceNavbar";
import ServiceFooter from "@/components/ServiceFooter";

const IntegrationAI = () => {
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
              <Brain className="w-12 h-12 text-white" />
            </div>
          </div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Intégration de l'IA
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 paragraph-text max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Intégrez des solutions d'intelligence artificielle adaptées à vos besoins spécifiques et votre workflow quotidien.
          </motion.p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Avantages de l'IA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass glass-hover p-8">
              <h3 className="text-xl font-semibold mb-4">Prise de décision améliorée</h3>
              <p className="paragraph-text">Exploitez vos données pour obtenir des insights précieux et prendre des décisions plus éclairées.</p>
            </Card>
            
            <Card className="glass glass-hover p-8">
              <h3 className="text-xl font-semibold mb-4">Personnalisation avancée</h3>
              <p className="paragraph-text">Offrez des expériences sur mesure à vos clients grâce à des recommandations intelligentes.</p>
            </Card>
            
            <Card className="glass glass-hover p-8">
              <h3 className="text-xl font-semibold mb-4">Optimisation des ressources</h3>
              <p className="paragraph-text">Réduisez les coûts et augmentez l'efficacité grâce à une allocation optimale des ressources.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nos solutions d'IA</h2>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="glass p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-4">Assistants virtuels intelligents</h3>
              <p className="paragraph-text mb-4">Automatisez les interactions avec vos clients et répondez instantanément à leurs questions, 24/7.</p>
              <ul className="list-disc pl-5 paragraph-text space-y-2">
                <li>Intégration avec vos canaux de communication existants</li>
                <li>Personnalisation selon votre marque et vos processus</li>
                <li>Amélioration continue grâce à l'apprentissage automatique</li>
              </ul>
            </Card>
            
            <Card className="glass p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-4">Analyse prédictive</h3>
              <p className="paragraph-text mb-4">Anticipez les tendances futures et identifiez de nouvelles opportunités grâce à l'analyse prédictive.</p>
              <ul className="list-disc pl-5 paragraph-text space-y-2">
                <li>Prévisions de ventes et de demande</li>
                <li>Détection précoce des risques potentiels</li>
                <li>Optimisation de la stratégie commerciale</li>
              </ul>
            </Card>
            
            <Card className="glass p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-4">Traitement automatisé de documents</h3>
              <p className="paragraph-text mb-4">Extrayez automatiquement les informations importantes de vos documents et automatisez leur traitement.</p>
              <ul className="list-disc pl-5 paragraph-text space-y-2">
                <li>Reconnaissance optique de caractères (OCR) avancée</li>
                <li>Classification automatique des documents</li>
                <li>Extraction précise des données clés</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Prêt à exploiter la puissance de l'IA?</h2>
          <p className="paragraph-text text-xl mb-10 max-w-2xl mx-auto">
            Contactez-nous pour découvrir comment l'intelligence artificielle peut transformer votre entreprise.
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

export default IntegrationAI;
