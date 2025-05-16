'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Handshake, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Startup Portal for AYUSH</h1>
            <p className="text-xl mb-8">
              Boost your AYUSH startup with mentorship, funding, and networking support.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-green-600 hover:bg-green-700" variant="ghost">Register Now</Button>
              <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-black">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white px-6 md:px-20 text-center" id="about">
        <h2 className="text-3xl font-bold mb-6">About the Portal</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          This portal is a one-stop platform created to uplift AYUSH (Ayurveda, Yoga, Unani, Siddha, and Homeopathy)
          startups by offering access to mentors, funding opportunities, and an ecosystem of like-minded entrepreneurs.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 px-6 md:px-20 text-center" id="features">
        <h2 className="text-3xl font-bold mb-12">Portal Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
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

      {/* Testimonials */}
      <section className="py-20 bg-white px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="mb-1 text-sm">© 2025 AYUSH Startup Portal</p>
        <p className="text-xs">Backed by Ministry of AYUSH | Smart India Hackathon</p>
      </footer>
    </>
  );
}
