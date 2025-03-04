
import React from "react";
import { motion } from "framer-motion";
import ServiceNavbar from "@/components/ServiceNavbar";
import ServiceFooter from "@/components/ServiceFooter";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <ServiceNavbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-10">Politique de Confidentialité</h1>
            
            <div className="prose prose-lg prose-invert max-w-4xl">
              <div className="paragraph-text space-y-6">
                <p>
                  Date de dernière mise à jour : 1er janvier 2025
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
                <p>
                  Chez Mivelaz Consulting, nous accordons une grande importance à la protection de vos données personnelles. 
                  Cette politique de confidentialité vous informe sur la façon dont nous recueillons, utilisons et protégeons
                  vos informations lorsque vous utilisez notre site web ou nos services.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Données collectées</h2>
                <p>
                  Nous pouvons collecter les types d'informations suivants :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Informations de contact (nom, prénom, adresse e-mail, numéro de téléphone)</li>
                  <li>Informations sur votre entreprise (nom, secteur d'activité)</li>
                  <li>Données de navigation (cookies, adresse IP, type de navigateur)</li>
                  <li>Informations sur l'utilisation de nos services</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Utilisation des données</h2>
                <p>
                  Nous utilisons vos données personnelles pour :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Fournir, améliorer et personnaliser nos services</li>
                  <li>Communiquer avec vous au sujet de nos services</li>
                  <li>Respecter nos obligations légales</li>
                  <li>Analyser l'utilisation de notre site web</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Protection des données</h2>
                <p>
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout 
                  accès non autorisé, modification, divulgation ou destruction.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Partage de données</h2>
                <p>
                  Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations avec :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Des fournisseurs de services qui nous aident à exploiter notre site web et à fournir nos services</li>
                  <li>Des autorités légales lorsque cela est requis par la loi</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Vos droits</h2>
                <p>
                  Conformément à la législation suisse sur la protection des données et au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit de limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
                <p>
                  Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, 
                  veuillez nous contacter à l'adresse suivante : hello@mivelaz-consulting.ch
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ServiceFooter />
    </div>
  );
};

export default PolitiqueConfidentialite;
