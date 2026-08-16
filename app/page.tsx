import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Globe,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import ContactForm from "./ContactForm";
import FaqSection from "@/components/faq-section";

const projects = [
  {
    id: 1,
    title: "Instagram & Facebook Growth Campaign",
    description:
      "Grew brands' Instagram & Facebook followers by 300% in 60 days through strategic content scheduling and audience targeting.",
    image: "/goch-1.jpeg",
    category: "Social Media",
  },
  {
    id: 2,
    title: "Personal Branding Blog Series",
    description:
      "Crafted series of ghostwritten blog posts that boosted clients' thought leadership and SEO ranking.",
    image: "/goch-2.jpeg",
    category: "Writing",
  },
  {
    id: 3,
    title: "High-Converting Sales Copy",
    description:
      "Written persuasive copies for landing pages that increased product conversions by 40%.",
    image: "/goch-3.jpeg",
    category: "Copywriting",
  },
  {
    id: 4,
    title: "Technical Article Proofreading",
    description:
      "Proofread and refined over 50 technical blog articles, ensuring clarity and grammatical accuracy.",
    image: "/goch-4.jpeg",
    category: "Proofreading",
  },
  {
    id: 5,
    title: "Product Launch Social Media Strategy",
    description:
      "Designed and executed a social media launch strategy that generated 2,000+ leads in under a week.",
    image: "/goch-5.jpeg",
    category: "Social Media",
  },
  {
    id: 6,
    title: "Brand Identity Redesign",
    description:
      "Delivered full graphic rebrands including logos, color palettes, and marketing collateral for a startup.",
    image: "/goch-6.jpeg",
    category: "Graphic Design",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-yellow-400/40 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Onwubiko Goch</div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-white/80 hover:text-yellow-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-white/80 hover:text-yellow-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-white/80 hover:text-yellow-400 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#faq"
              className="text-white/80 hover:text-yellow-400 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-white/80 hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-black via-black to-yellow-950">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-yellow-400 text-black hover:bg-yellow-400">
              Digital Services Expert
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="text-yellow-400">
                {" "}
                Digital Presence
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Writing, Virtual Assistance, and Social Media Management. Bringing professionalism, creativity, strategy, and uniqueness into the digital domain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-8 py-4"
              >
                <a href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
              >
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm text-white/70">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-yellow-400" />
                Abuja, Nigeria
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-400" />
                Available for Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-yellow-400 text-black hover:bg-yellow-400">
                  About Me
                </Badge>
                <h2 className="text-4xl font-bold text-black mb-6">
                  Professional Credentials
                </h2>
                <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                  Grounded in History and International Studies, I combine academic rigor, professional certifications, and creative expertise to create meaningful impact in the digital world
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-black">
                      Qualified Historian
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-black">
                      Professional Writer
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-black">
                      Trained Virtual Assistant
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-black">
                      Skilled Social Media Manager
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-black rounded-2xl p-8 text-white border border-yellow-400">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Why Choose Me?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-3" />
                      <span>Historical Insight</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-3" />
                      <span>Writing Excellence</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-3" />
                      <span>Administrative Support</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-3" />
                      <span>Digital Engagement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-400 text-black hover:bg-yellow-400">
              Services
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From social media strategy to stunning writing, I provide
              end-to-end digital services for your academic excellence and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Social Media Management */}
            <Card className="group hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/30 bg-white">
              <CardContent className="p-8">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-300 transition-colors">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Social Media Management
                </h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Strategic social media planning, content creation, and
                  community management to boost your online presence and
                  engagement.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Content Strategy & Planning
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Post Creation & Scheduling
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Community Engagement
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Analytics & Reporting
                  </li>
                </ul>
                <Button className="w-full bg-black text-yellow-400 hover:bg-neutral-800">
                  <a href="/#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Virtual Assistance */}
            <Card className="group hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/30 bg-white">
              <CardContent className="p-8">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-300 transition-colors">
                  <Briefcase className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Virtual Assistance
                </h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Providing reliable and efficient virtual support for businesses, professionals, entrepreneurs, and organizations worldwide
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Administrative Support
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Email & Calendar Management
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Data Entry & Management
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Research & Online Assistance
                  </li>
                </ul>
                <Button className="w-full bg-black text-yellow-400 hover:bg-neutral-800">
                  <a href="/#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Writing */}
            <Card className="group hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/30 bg-white">
              <CardContent className="p-8">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-300 transition-colors">
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Writing
                </h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Articulating professionally compelling writings for blogs, brands, scholars, and researchers across the globe
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Copywriting
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Ghostwriting
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Content writing
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Research writing
                  </li>
                </ul>
                <Button className="w-full bg-black text-yellow-400 hover:bg-neutral-800">
                  <a href="/#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-400 text-black hover:bg-yellow-400">
              Portfolio
            </Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Meet the Mind Behind the Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-black/10 bg-white"
              >
                <div className="aspect-video bg-gradient-to-br from-black to-yellow-400 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-700 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge className="text-xs bg-yellow-400 text-black hover:bg-yellow-400">
                      {project.category}
                    </Badge>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-black hover:text-yellow-600"
                    >
                      <a href="/#contact">Get in touch</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Get in touch
              today and let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-black text-yellow-400 hover:bg-neutral-800 text-lg px-8 py-4"
              >
                <a href="/#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-neutral-100 text-lg px-8 py-4 border border-black"
              >
                <a
                  href="https://wa.me/2348161786550"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-400 text-black hover:bg-yellow-400">
                Contact
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's Start Your Project
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Ready to take your business to the next level? Get in touch and
                let's discuss how I can help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}

              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="shadow-lg border border-yellow-400/30 bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-black mb-6">
                      Get in Touch
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Mail className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Email</p>
                          <p className="text-neutral-700">
                            professorgoch@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Phone className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Phone</p>
                          <p className="text-neutral-700">+234 816 178 6550</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <MapPin className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Location</p>
                          <p className="text-neutral-700">Abuja, Nigeria</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border border-yellow-400/30 bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-black mb-6">
                      Follow Me
                    </h3>
                    <div className="flex space-x-4">
                      <Link
                        href="https://www.facebook.com/goch.onwubiko"
                        className="bg-black text-yellow-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/onwubiko.goch?igsh=YXM3ZWgyN2YybWJz"
                        className="bg-black text-yellow-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                      >
                        <Instagram className="h-6 w-6" />
                      </Link>
                      <Link
                        href="https://x.com/OnwubikoGoch?t=cHIFKjPRX1ONFhI351JPAQ&s=09"
                        className="bg-black text-yellow-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-yellow-400/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Onwubiko Goch</h3>
              <p className="text-white/70 mb-4 max-w-md">
                Professional digital services, including writing, virtual assistance, and social media management. Transforming academia, entrepreneurship, and business through creative solutions.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/goch.onwubiko"
                  className="text-white/70 hover:text-yellow-400 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/onwubiko.goch?igsh=YXM3ZWgyN2YybWJz"
                  className="text-white/70 hover:text-yellow-400 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://x.com/OnwubikoGoch?t=cHIFKjPRX1ONFhI351JPAQ&s=09"
                  className="text-white/70 hover:text-yellow-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="#services" className="hover:text-yellow-400 transition-colors">
                    Writing
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-yellow-400 transition-colors">
                    Virtual Assistance
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-yellow-400 transition-colors">
                    Social Media Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-400/30 mt-8 pt-8 text-center text-white/70">
            <p>
              &copy; {new Date().getFullYear()} Onwubiko Goch. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
