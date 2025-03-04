
import React, { useEffect, useRef, useState } from "react";
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
  Linkedin,
  Menu,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import * as THREE from "three";
import { Link } from "react-router-dom";
import CookieBanner from "@/components/CookieBanner";

const services = [
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Automatisation des processus",
    description:
      "Éliminez jusqu'à 80% des tâches manuelles et répétitives pour vous concentrer sur votre cœur de métier.",
    link: "/services/automatisation"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Intégration de l'IA",
    description:
      "Intégrez des solutions d'intelligence artificielle adaptées à vos besoins spécifiques et votre workflow quotidien.",
    link: "/services/integration-ai"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Sites web professionnels",
    description:
      "Développez une présence en ligne performante, génératrice de leads et conforme à la législation nLPD.",
    link: "/services/sites-web"
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Optimisation Google My Business",
    description:
      "Maximisez votre visibilité locale grâce à l'optimisation de vos fiches d'entreprise.",
    link: "/"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Référencement local",
    description:
      "Améliorez votre positionnement dans les recherches locales et attirez plus de clients dans votre zone géographique.",
    link: "/"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Formation aux outils numériques",
    description:
      "Maîtrisez les outils digitaux qui vous permettront d'accroître votre productivité au quotidien.",
    link: "/"
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

// Rotating headline texts for hero section
const rotatingTexts = ["grâce à l'IA", "grâce à l'automatisation", "grâce à un site web professionnel", "grâce au référencement local"];

const Index = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isRotatingTextVisible, setIsRotatingTextVisible] = useState(true);

  // Rotate headline text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotatingTextVisible(false);
      
      setTimeout(() => {
        setHeadlineIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setIsRotatingTextVisible(true);
      }, 500); // Wait for fade out before changing text
      
    }, 3000); // Change text every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Three.js animation
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
              <Link to="/services/automatisation" className="text-white hover:text-primary transition-colors">Automatisation</Link>
              <Link to="/services/integration-ai" className="text-white hover:text-primary transition-colors">IA</Link>
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
                <a href="#services" className="text-white hover:text-primary transition-colors">Services</a>
                <a href="#about" className="text-white hover:text-primary transition-colors">À propos</a>
                <a href="#testimonials" className="text-white hover:text-primary transition-colors">Témoignages</a>
                <Link to="/services/automatisation" className="text-white hover:text-primary transition-colors">Automatisation</Link>
                <Link to="/services/integration-ai" className="text-white hover:text-primary transition-colors">Intelligence Artificielle</Link>
                <Link to="/services/sites-web" className="text-white hover:text-primary transition-colors">Sites Web</Link>
                <Button variant="default" size="sm" className="w-full button-text">Contact</Button>
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
            className="text-5xl md:text-7xl font-bold mb-3 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transformez votre entreprise
          </motion.h1>
          <motion.div 
            className="text-5xl md:text-7xl font-bold mb-6 text-primary leading-tight h-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: isRotatingTextVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {rotatingTexts[headlineIndex]}
            </motion.span>
          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl mb-8 paragraph-text max-w-2xl mx-auto leading-relaxed"
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
              className="bg-primary hover:bg-primary/90 button-text text-lg px-8 py-6 rounded-xl"
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
                <Link to={service.link}>
                  <Card className="glass glass-hover p-8 h-full text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center">
                        {React.cloneElement(service.icon as React.ReactElement, { 
                          className: "w-12 h-12 text-white"
                        })}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                    <p className="paragraph-text text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
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
              <div className="space-y-8 paragraph-text text-lg leading-relaxed">
                <p>
                  Depuis 2019, nous accompagnons les PME et indépendants romands dans
                  leur transformation numérique avec un focus sur l'intelligence
                  artificielle et l'automatisation des processus.
                </p>
                <p>
                  Notre mission est de libérer le potentiel des entreprises en
                  éliminant les tâches manuelles et en intégrant des solutions
                  d'IA adaptées à leurs besoins spécifiques.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Ce que disent nos clients
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl transform -rotate-1 scale-[1.03] z-0"></div>
                <Card className="relative z-10 p-8 h-full glass border-none shadow-xl flex flex-col">
                  <MessageSquare className="w-10 h-10 text-primary mb-6 opacity-80" />
                  <p className="mb-8 text-lg leading-relaxed paragraph-text italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="font-semibold text-lg text-white">{testimonial.author}</p>
                    <p className="paragraph-text">
                      {testimonial.role}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/5 blur-md"></div>
                  <div className="absolute bottom-10 left-4 w-6 h-6 rounded-full bg-primary/10 blur-sm"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
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
            <p className="text-xl paragraph-text mb-12 max-w-2xl mx-auto">
              Prêt à transformer votre entreprise? Discutons de vos besoins
              spécifiques et construisons ensemble votre solution sur mesure.
            </p>
            <div className="max-w-md mx-auto">
              <Card className="glass glass-hover p-8">
                <div className="space-y-6">
                  <Button
                    variant="default"
                    className="w-full py-6 text-lg button-text"
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
                <li><a href="#services" className="paragraph-text hover:text-foreground transition-colors">Formation aux outils numériques</a></li>
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

      {/* Cookie consent banner */}
      <CookieBanner />
    </div>
  );
};

export default Index;
