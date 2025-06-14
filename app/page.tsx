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
  Palette,
  Globe,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import ContactForm from "./ContactForm";

const projects = [
  {
    id: 1,
    title: "Instagram & Facebook Growth Campaign",
    description:
      "Grew brands' Instagram & Facebook followers by 300% in 60 days through strategic content scheduling and audience targeting.",
    image: "/goch-1.jpg",
    category: "Social Media",
  },
  {
    id: 2,
    title: "Personal Branding Blog Series",
    description:
      "Crafted series of ghostwritten blog posts that boosted clients' thought leadership and SEO ranking.",
    image: "/goch-2.jpg",
    category: "Writing",
  },
  {
    id: 3,
    title: "High-Converting Sales Copy",
    description:
      "Written persuasive copies for landing pages that increased product conversions by 40%.",
    image: "/goch-3.jpg",
    category: "Copywriting",
  },
  {
    id: 4,
    title: "Technical Article Proofreading",
    description:
      "Proofread and refined over 50 technical blog articles, ensuring clarity and grammatical accuracy.",
    image: "/goch-4.jpg",
    category: "Proofreading",
  },
  {
    id: 5,
    title: "Product Launch Social Media Strategy",
    description:
      "Designed and executed a social media launch strategy that generated 2,000+ leads in under a week.",
    image: "/goch-5.jpg",
    category: "Social Media",
  },
  {
    id: 6,
    title: "Brand Identity Redesign",
    description:
      "Delivered full graphic rebrands including logos, color palettes, and marketing collateral for a startup.",
    image: "/goch-6.jpg",
    category: "Graphic Design",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Onwubiko Goch</div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Digital Services Expert
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Digital Presence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Social Media Management, Professional Writing, Ghostwriting, Ads Management, and Graphic Design.
              Simultaneously bringing professionalism, creativity, strategy, uniqueness and
              tiptopness into the digital domain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
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
                className="text-lg px-8 py-4"
              >
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Abuja, Nigeria
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
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
                <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
                  About Me
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Qualified Professional with Proven Expertise
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  As a graduate of History and International Studies, with variety of non-degree certificates, I combine
                  academic rigor with creative excellence in the digital world.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Certified Historian & Writer
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Trained Social Media Manager
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Professional Ghostwriter
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      A graduate of History and International Studies
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Me?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-3" />
                      <span>Academic background in history and writing</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-3" />
                      <span>Professional design qualifications</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-3" />
                      <span>Creative storytelling approach</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-3" />
                      <span>Strategic thinking and execution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Services
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From social media strategy to stunning writing, I provide
              end-to-end digital services for your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Social Media Management */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Social Media Management
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic social media planning, content creation, and
                  community management to boost your online presence and
                  engagement.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Content Strategy & Planning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Post Creation & Scheduling
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Community Engagement
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Analytics & Reporting
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="/#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Graphic Design */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Graphic Design
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional graphic design services including branding,
                  marketing materials, and visual content that captures your
                  brand essence.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Logo & Brand Identity
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Marketing Materials
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Social Media Graphics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Print & Digital Design
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <a href="/#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Writing */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Writing
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Articulating professionally compelling writings-ups for blogs, businesses, organizations, institutions, and companies. To educate, trigger, and inform the readers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ghostwriting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Copywriting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Content Writing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Research Writing
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
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
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
              Portfolio
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recent Work & Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how I've helped businesses transform their digital presence
              and achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700"
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Get in touch
              today and let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                <a href="/#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-600 text-lg px-8 py-4 border border-blue-600"
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Contact
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Let's Start Your Project
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to take your business to the next level? Get in touch and
                let's discuss how I can help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}

              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Get in Touch
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-gray-600">
                            professorgoch@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Phone className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <p className="text-gray-600">+234 816 178 6550</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <MapPin className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Location</p>
                          <p className="text-gray-600">Abuja, Nigeria</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Follow Me
                    </h3>
                    <div className="flex space-x-4">
                      <Link
                        href="https://www.facebook.com/goch.onwubiko"
                        className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/onwubiko.goch?igsh=YXM3ZWgyN2YybWJz"
                        className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                      >
                        <Instagram className="h-6 w-6" />
                      </Link>
                      <Link
                        href="https://x.com/OnwubikoGoch?t=cHIFKjPRX1ONFhI351JPAQ&s=09"
                        className="bg-blue-400 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Onwubiko Goch</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Professional digital services including social media management, professional writing, ghostwriting, and
                graphic design. Transforming businesses
                through creative solutions.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/goch.onwubiko"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/onwubiko.goch?igsh=YXM3ZWgyN2YybWJz"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://x.com/OnwubikoGoch?t=cHIFKjPRX1ONFhI351JPAQ&s=09"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Professional Writing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Ghostwriting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Graphic Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
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
