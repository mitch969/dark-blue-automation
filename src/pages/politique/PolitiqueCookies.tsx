
import React from "react";
import { motion } from "framer-motion";
import ServiceNavbar from "@/components/ServiceNavbar";
import ServiceFooter from "@/components/ServiceFooter";

const PolitiqueCookies = () => {
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
            <h1 className="text-4xl font-bold mb-10">Politique des Cookies</h1>
            
            <div className="prose prose-lg prose-invert max-w-4xl">
              <div className="paragraph-text space-y-6">
                <p>
                  Date de dernière mise à jour : 1er janvier 2025
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Qu'est-ce qu'un cookie ?</h2>
                <p>
                  Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web.
                  Les cookies sont largement utilisés pour faire fonctionner les sites web ou les rendre plus efficaces, ainsi que pour
                  fournir des informations aux propriétaires du site.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Comment utilisons-nous les cookies ?</h2>
                <p>
                  Notre site web utilise les types de cookies suivants :
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-2">Cookies essentiels</h3>
                <p>
                  Ces cookies sont nécessaires au fonctionnement de notre site web. Ils vous permettent de naviguer sur le site
                  et d'utiliser ses fonctionnalités, comme l'accès aux zones sécurisées. Sans ces cookies, certains services que vous
                  avez demandés ne peuvent pas être fournis.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-2">Cookies de performance</h3>
                <p>
                  Ces cookies recueillent des informations sur la façon dont les visiteurs utilisent notre site web, par exemple
                  quelles pages ils visitent le plus souvent et s'ils reçoivent des messages d'erreur. Ces cookies ne collectent pas
                  d'informations permettant d'identifier un visiteur. Toutes les informations recueillies par ces cookies sont agrégées
                  et donc anonymes. Ils sont uniquement utilisés pour améliorer le fonctionnement de notre site web.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-2">Cookies de fonctionnalité</h3>
                <p>
                  Ces cookies permettent à notre site web de mémoriser les choix que vous faites (comme votre nom d'utilisateur,
                  votre langue ou la région dans laquelle vous vous trouvez) et de fournir des fonctionnalités améliorées
                  et plus personnalisées.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-2">Cookies de ciblage ou publicitaires</h3>
                <p>
                  Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos intérêts. Ils sont
                  également utilisés pour limiter le nombre de fois que vous voyez une publicité et pour aider à mesurer l'efficacité
                  des campagnes publicitaires.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Comment gérer les cookies ?</h2>
                <p>
                  Vous pouvez contrôler et/ou supprimer les cookies à votre guise. Vous pouvez supprimer tous les cookies
                  déjà présents sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour qu'ils ne les acceptent pas.
                  Toutefois, si vous faites cela, vous devrez peut-être ajuster manuellement certaines préférences chaque fois que vous
                  visitez un site, et certains services et fonctionnalités risquent de ne pas fonctionner.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
                <p>
                  Pour toute question concernant notre politique de cookies, veuillez nous contacter à l'adresse suivante : hello@mivelaz-consulting.ch
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

export default PolitiqueCookies;
