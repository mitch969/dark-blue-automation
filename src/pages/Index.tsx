
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Brain,
  Globe,
  MapPin,
  MessageSquare,
  Monitor,
  MousePointerClick,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Automatisation des processus",
    description:
      "Éliminez jusqu'à 80% des tâches manuelles et répétitives pour vous concentrer sur votre cœur de métier.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Intégration de l'IA",
    description:
      "Intégrez des solutions d'intelligence artificielle adaptées à vos besoins spécifiques et votre workflow quotidien.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Sites web professionnels",
    description:
      "Développez une présence en ligne performante, génératrice de leads et conforme à la législation nLPD.",
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Optimisation Google My Business",
    description:
      "Maximisez votre visibilité locale grâce à l'optimisation de vos fiches d'entreprise.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Référencement local",
    description:
      "Améliorez votre positionnement dans les recherches locales et attirez plus de clients dans votre zone géographique.",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Formation aux outils numériques",
    description:
      "Maîtrisez les outils digitaux qui vous permettront d'accroître votre productivité au quotidien.",
  },
];

const testimonials = [
  {
    quote:
      "Michel a complètement transformé notre façon de travailler. Grâce à l'automatisation de nos processus administratifs, nous avons gagné un temps précieux que nous pouvons maintenant consacrer à notre cœur de métier.",
    author: "Jean Dupont",
    role: "Directeur, Cabinet d'architectes",
  },
  {
    quote:
      "L'intégration de l'IA dans notre workflow quotidien nous a permis d'améliorer considérablement notre service client. Les solutions proposées par Mivelaz Consulting ont été parfaitement adaptées à nos besoins.",
    author: "Marie Martin",
    role: "Responsable marketing, PME locale",
  },
  {
    quote:
      "Notre présence en ligne a complètement changé depuis que nous travaillons avec Michel. Notre site génère maintenant des prospects qualifiés et notre visibilité locale s'est considérablement améliorée.",
    author: "Pierre Blanc",
    role: "Fondateur, Entreprise de services",
  },
];

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Transformez votre entreprise grâce à l'IA
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Libérez jusqu'à 80% de votre temps en automatisant vos processus
            métiers et en intégrant des solutions d'intelligence artificielle
            adaptées à vos besoins spécifiques.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Démarrer votre transformation
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nos services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                À propos de Michel Mivelaz
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Depuis 2019, j'accompagne les PME et indépendants romands dans
                  leur transformation numérique avec un focus sur l'intelligence
                  artificielle et l'automatisation des processus.
                </p>
                <p>
                  Ma mission est de libérer le potentiel des entreprises en
                  éliminant les tâches manuelles et en intégrant des solutions
                  d'IA adaptées à leurs besoins spécifiques.
                </p>
                <p>
                  Avant de fonder Mivelaz Consulting, j'ai acquis plus de 20 ans
                  d'expérience dans le secteur bancaire en tant que gestionnaire
                  de fortune pour des clients d'Europe et du Moyen-Orient, et suis
                  titulaire d'un diplôme fédéral d'Analyste Financier.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Ce que disent nos clients
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass p-6 h-full flex flex-col justify-between">
                  <div>
                    <MessageSquare className="w-6 h-6 text-primary mb-4" />
                    <p className="mb-4 text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Contactez-nous
            </h2>
            <p className="text-muted-foreground mb-8">
              Prêt à transformer votre entreprise? Discutons de vos besoins
              spécifiques.
            </p>
            <div className="max-w-md mx-auto">
              <Card className="glass p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-muted-foreground">
                      contact@mivelaz-consulting.ch
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Téléphone</p>
                    <p className="text-muted-foreground">+41 XX XXX XX XX</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Adresse</p>
                    <p className="text-muted-foreground">Suisse Romande</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Mivelaz Consulting. Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
