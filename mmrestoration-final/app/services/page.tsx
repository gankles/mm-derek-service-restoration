import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/app/lib/constants';
import { Icon } from '@/app/components/Icons';
import { getServiceColorClasses } from '@/app/lib/utils';

export const metadata: Metadata = {
  title: 'Professional Restoration Services | M&M Restoration',
  description: 'Comprehensive restoration services including water damage, fire damage, mold remediation, storm damage, and biohazard cleanup. 24/7 emergency response across Michigan.',
  openGraph: {
    title: 'Professional Restoration Services | M&M Restoration',
    description: 'Comprehensive restoration services including water damage, fire damage, mold remediation, storm damage, and biohazard cleanup. 24/7 emergency response across Michigan.',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Restoration Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert restoration services for water damage, fire damage, mold remediation, and more. 
              Available 24/7 for emergency response across Michigan.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Complete Service Offerings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive restoration services with certified professionals, 
            advanced equipment, and 24/7 emergency response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg ${getServiceColorClasses(service.color)}`}>
                    <Icon name={service.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  href={`/services/${service.id}`}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Learn More</span>
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="phone" size={24} className="text-red-600" />
            <h3 className="text-2xl font-bold text-red-800">24/7 Emergency Response</h3>
          </div>
          <p className="text-red-700 mb-6">
            When disaster strikes, every minute counts. Our emergency response team is available 
            around the clock to begin restoration immediately.
          </p>
          <a 
            href="tel:(616) 648-7775"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
          >
            <Icon name="phone" size={20} />
            <span>Call Now: (616) 648-7775</span>
          </a>
        </div>
      </div>
    </div>
  );
}