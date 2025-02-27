import { motion, useScroll, useTransform } from "framer-motion";
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
  ArrowRight,
  Settings,
  Facebook,
  Linkedin,
  Twitter,
  Menu,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current?.appendChild(renderer.domElement);

    // Create torus geometry
    const torusGeometry = new THREE.TorusKnotGeometry(2, 0.6, 100, 16);
    const torusMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3b82f6,
      wireframe: true,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    scene.add(torus);
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.002;
      torus.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Settings className="w-8 h-8 text-primary" />
              <span className="text-xl font-display font-semibold text-white">Mivelaz Consulting</span>
            </div>
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
              <a href="#services" className="text-white hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-primary transition-colors">À propos</a>
              <a href="#testimonials" className="text-white hover:text-primary transition-colors">Témoignages</a>
              <Button variant="default" size="sm">Contact</Button>
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
                <a href="#services" className="text-white hover:text-primary transition-colors">Services</a>
                <a href="#about" className="text-white hover:text-primary transition-colors">À propos</a>
                <a href="#testimonials" className="text-white hover:text-primary transition-colors">Témoignages</a>
                <Button variant="default" size="sm" className="w-full">Contact</Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div ref={containerRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-grid z-[1]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transformez votre entreprise grâce à l'IA
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Libérez jusqu'à 80% de votre temps en automatisant vos processus
            métiers et en intégrant des solutions d'intelligence artificielle
            adaptées à vos besoins.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl"
            >
              Démarrer votre transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
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
                <Card className="glass glass-hover p-8 h-full text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center">
                      {React.cloneElement(service.icon as React.ReactElement, { 
                        className: "w-12 h-12 text-white"
                      })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                À propos de Michel Mivelaz
              </h2>
              <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
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
      <section className="py-32 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
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
                <Card className="glass glass-hover p-8 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                  <div className="relative z-10">
                    <MessageSquare className="w-8 h-8 text-primary mb-6" />
                    <p className="mb-6 text-lg leading-relaxed text-white italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-white/10 pt-6 mt-auto">
                      <p className="font-semibold text-lg text-white">{testimonial.author}</p>
                      <p className="text-white/70">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full -mr-12 -mb-12" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Contactez-nous
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Prêt à transformer votre entreprise? Discutons de vos besoins
              spécifiques et construisons ensemble votre solution sur mesure.
            </p>
            <div className="max-w-md mx-auto">
              <Card className="glass glass-hover p-8">
                <div className="space-y-6">
                  <Button
                    variant="default"
                    className="w-full py-6 text-lg"
                    size="lg"
                  >
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extended Footer */}
      <footer className="bg-secondary/20 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Settings className="w-8 h-8 text-primary" />
                <span className="text-xl font-display font-semibold text-white">Mivelaz Consulting</span>
              </div>
              <p className="text-muted-foreground">
                Transformation digitale et intégration d'IA pour PME et indépendants romands.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Automatisation des processus</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Intégration de l'IA</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sites web professionnels</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Formation aux outils numériques</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-muted-foreground">contact@mivelaz-consulting.ch</li>
                <li className="text-muted-foreground">+41 XX XXX XX XX</li>
                <li className="text-muted-foreground">Suisse Romande</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024 Mivelaz Consulting. Tous droits réservés
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentions légales</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
