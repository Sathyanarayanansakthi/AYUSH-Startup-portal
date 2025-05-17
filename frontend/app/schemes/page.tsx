'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const schemes = [
  {
    title: 'AYUSH Entrepreneurship Development Scheme (AEDS)',
    description:
      'Provides financial support and funding for startups, MSMEs, and entrepreneurs in Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy sectors.',
  },
  {
    title: 'AYUSH Innovation Grant',
    description:
      'Offers grants for innovative products and technologies in Ayurveda, Yoga, Unani, Siddha, and Homeopathy.',
  },
  {
    title: 'Digital AYUSH Scheme',
    description:
      'Encourages tech-enabled healthcare innovations in the AYUSH ecosystem, especially in rural areas.',
  },
  {
    title: 'AYUSH Export Promotion Scheme',
    description:
      'Supports startups exporting AYUSH products by offering subsidies, training, and certification assistance.',
  },
  {
    title: 'Women in AYUSH Startups',
    description:
      'Provides special incentives and mentorship for women-led AYUSH startups promoting holistic wellness.',
  },
  {
    title: 'AYURGYAN Scheme',
    description:
      'Promotes education and research in the field of AYUSH and supports the development of human resources for AYUSH systems.',
  },
  {
    title: 'AYURSWASTHYA Yojana',
    description:
      'Aims to promote AYUSH interventions for community health care and to strengthen the existing infrastructure of AYUSH institutions.',
  },
  {
    title: 'National AYUSH Mission (NAM)',
    description:
      'Focuses on the development and promotion of AYUSH systems of medicine through cost-effective services, strengthening educational systems, and facilitating the availability of AYUSH drugs.',
  },
  {
    title: 'AYUSH Scholarship Scheme',
    description:
      'Offers scholarships to international students for undergraduate, postgraduate, and Ph.D. courses in AYUSH disciplines in Indian institutions.',
  },
  {
    title: 'Scheme for Development of AYUSH Clusters',
    description:
      'Provides financial assistance to AYUSH industry clusters for establishing common facilities such as testing labs, raw material banks, and standardization labs.',
  },
];

const AYUSHSchemesPage = () => {
  const router = useRouter();

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg')",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl p-8">
        <Button variant="destructive"
          onClick={() => router.push('/')}
        >
          ← Return to Landing Page
        </Button>

        <h1 className="text-4xl font-bold text-center text-green-900 mb-10">
          AYUSH Startup Schemes
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-green-200 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {scheme.title}
              </h2>
              <p className="text-gray-700 text-sm">{scheme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AYUSHSchemesPage;
