'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent
} from '@/components/ui/card';
import {
  Accordion,AccordionContent,AccordionItem,AccordionTrigger
} from '@/components/ui/accordion';
import {
  Users,
  Handshake,
  DollarSign,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-20 py-4 relative">
          <Link href="/" className="text-2xl font-bold text-green-700">
            AYUSH Portal
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
            <li><Link href="#about" className="hover:text-green-600">About</Link></li>
            <li><Link href="#features" className="hover:text-green-600">Features</Link></li>
            <li><Link href="#testimonials" className="hover:text-green-600">Testimonials</Link></li>
            <li><Link href="#faq" className="hover:text-green-600">Schemes</Link></li>
            <li><Link href="#faq" className="hover:text-green-600">FAQ</Link></li>
            <li>
              <Link href="/signup">
                <Button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base">
                  Get Started
                </Button>
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <ul className="absolute top-full left-0 w-full bg-white shadow-md text-center flex flex-col py-4 gap-4 z-40">
              <li><Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
              <li><Link href="#features" onClick={() => setMobileMenuOpen(false)}>Features</Link></li>
              <li><Link href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link></li>
              <li><Link href="/schemes" onClick={() => setMobileMenuOpen(false)}>Schemes</Link></li>
              <li><Link href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link></li>
              <li>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-40 mx-auto">
                    Get Started
                  </Button>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Startup Portal for AYUSH
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Boost your AYUSH startup with mentorship, funding, and networking support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Register Now
                </Button>
              </Link>
              <Link href="#">
                <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 text-center" id="about">
        <h2 className="text-3xl font-bold mb-6">About the Portal</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          This portal is a one-stop platform created to uplift AYUSH (Ayurveda, Yoga, Unani, Siddha, and Homeopathy)
          startups by offering access to mentors, funding opportunities, and an ecosystem of like-minded entrepreneurs.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 md:px-20 text-center" id="features">
        <h2 className="text-3xl font-bold mb-12">Portal Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Mentorship',
              icon: <Users className="h-10 w-10 text-green-600 mx-auto mb-4" />,
              desc: 'Get expert guidance from seasoned AYUSH professionals to scale your ideas.',
            },
            {
              title: 'Funding Access',
              icon: <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-4" />,
              desc: 'Tap into financial schemes, grants, and investor networks tailored for AYUSH innovation.',
            },
            {
              title: 'Collaboration',
              icon: <Handshake className="h-10 w-10 text-green-600 mx-auto mb-4" />,
              desc: 'Connect with fellow entrepreneurs and build strategic partnerships.',
            },
          ].map((item, idx) => (
            <Card key={idx} className="p-6 text-left shadow-md">
              <CardContent>
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 md:px-20" id="testimonials">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: 'AyurGenie',
              feedback: 'This platform helped us find perfect mentors and get visibility in the AYUSH ecosystem.',
            },
            {
              name: 'SiddhaLife',
              feedback: 'Through this portal, we secured seed funding and grew our reach in rural areas.',
            },
            {
              name: 'YogaVerse',
              feedback: 'The community and networking features are incredibly useful for collaboration.',
            },
          ].map(({ name, feedback }) => (
            <Card key={name} className="shadow-sm">
              <CardContent className="p-6 text-center">
                <p className="italic text-gray-700 mb-4">“{feedback}”</p>
                <h4 className="text-green-700 font-bold">{name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 md:px-20" id="faq">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who can register on the AYUSH Startup Portal?</AccordionTrigger>
              <AccordionContent>
                Any individual or startup working in Ayurveda, Yoga, Unani, Siddha, or Homeopathy can register and benefit from the services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is there a registration fee?</AccordionTrigger>
              <AccordionContent>
                No, registering on the portal is completely free for all users.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I connect with mentors?</AccordionTrigger>
              <AccordionContent>
                Once registered, you can browse mentor profiles and request mentorship through your dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="mb-1 text-sm">© 2025 AYUSH Startup Portal</p>
        <p className="text-xs">Backed by Ministry of AYUSH | Smart India Hackathon</p>
      </footer>
    </>
  );
}
