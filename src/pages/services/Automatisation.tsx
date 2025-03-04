
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Settings, BarChart } from "lucide-react";
import ServiceNavbar from "@/components/ServiceNavbar";
import ServiceFooter from "@/components/ServiceFooter";

const Automatisation = () => {
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
              <BarChart className="w-12 h-12 text-white" />
            </div>
          </div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Automatisation des processus
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 paragraph-text max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Éliminez jusqu'à 80% des tâches manuelles et répétitives pour vous concentrer sur votre cœur de métier.
          </motion.p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Avantages de l'automatisation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass glass-hover p-8">
              <h3 className="text-xl font-semibold mb-4">Gain de temps considérable</h3>
              <p className="paragraph-text">Réduisez jusqu'à 80% du temps passé sur des tâches répétitives et sans valeur ajoutée.</p>
            </Card>
            
            <Card className="glass glass-hover p-8">
              <h3 className="text-xl font-semibold mb-4">Réduction des erreurs</h3>
              <p className="paragraph-text">Éliminez les erreurs humaines liées à la saisie manuelle et aux processus répétitifs.</p>
            </Card>
            
            <Card className="glass glass-hover p-8">
              <h3 className="text-xl font-semibold mb-4">Focus sur votre cœur de métier</h3>
              <p className="paragraph-text">Consacrez votre temps et votre énergie aux activités qui génèrent réellement de la valeur.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Notre approche</h2>
          
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analyse des processus existants</h3>
                <p className="paragraph-text">Nous étudions en détail vos processus actuels afin d'identifier les tâches qui peuvent être automatisées.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conception de la solution</h3>
                <p className="paragraph-text">Nous développons une solution sur mesure adaptée à vos besoins spécifiques et à vos systèmes existants.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mise en place et formation</h3>
                <p className="paragraph-text">Nous implémentons la solution et formons votre équipe pour assurer une transition en douceur.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suivi et optimisation</h3>
                <p className="paragraph-text">Nous assurons un suivi régulier pour optimiser continuellement vos processus automatisés.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Prêt à transformer votre entreprise?</h2>
          <p className="paragraph-text text-xl mb-10 max-w-2xl mx-auto">
            Contactez-nous pour découvrir comment l'automatisation peut réduire vos coûts et améliorer votre efficacité.
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

export default Automatisation;
