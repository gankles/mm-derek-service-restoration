import { Metadata } from 'next';
import Link from 'next/link';
import { LOCATIONS, SERVICES } from '@/app/lib/constants';
import { Icon } from '@/app/components/Icons';

export const metadata: Metadata = {
  title: 'Service Locations | M&M Restoration Michigan',
  description: 'Professional restoration services across Michigan including Grand Ledge, Haslett, Holt, Lansing, Mason, Okemos, Williamston, and Charlotte. 24/7 emergency response.',
  openGraph: {
    title: 'Service Locations | M&M Restoration Michigan',
    description: 'Professional restoration services across Michigan including Grand Ledge, Haslett, Holt, Lansing, Mason, Okemos, Williamston, and Charlotte. 24/7 emergency response.',
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Service Locations
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Professional restoration services across Michigan with local expertise 
              and 24/7 emergency response in every community we serve.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Communities Across Michigan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Local expertise meets professional service. We understand the unique needs 
            of each community and provide tailored restoration solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {LOCATIONS.map((location) => (
            <div key={location.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Icon name="map-pin" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                    <p className="text-gray-600">{location.state}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Professional restoration services in {location.shortName} with fast response times 
                  and local expertise. Available 24/7 for emergencies.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="check" size={16} className="text-green-600" />
                    <span className="text-sm text-gray-700">24/7 Emergency Response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="check" size={16} className="text-green-600" />
                    <span className="text-sm text-gray-700">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="check" size={16} className="text-green-600" />
                    <span className="text-sm text-gray-700">Local Expertise</span>
                  </div>
                </div>
                
                <Link 
                  href={`/locations/${location.slug}`}
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full justify-center"
                >
                  <span>View Services in {location.shortName}</span>
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Service Coverage</h3>
            <p className="text-gray-600">
              Every location receives the same high-quality restoration services with local expertise and understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded">
                  <Icon name={service.icon} size={20} className="text-blue-600" />
                </div>
                <span className="font-medium text-gray-900">{service.shortName}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/services"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>View All Services</span>
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-red-50 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="phone" size={24} className="text-red-600" />
            <h3 className="text-2xl font-bold text-red-800">Emergency Response Available</h3>
          </div>
          <p className="text-red-700 mb-6">
            When disaster strikes in any of our service areas, we're ready to respond immediately. 
            Our emergency teams are strategically located for the fastest possible response.
          </p>
          <a 
            href="tel:(616) 648-7775"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
          >
            <Icon name="phone" size={20} />
            <span>Emergency: (616) 648-7775</span>
          </a>
        </div>
      </div>
    </div>
  );
}