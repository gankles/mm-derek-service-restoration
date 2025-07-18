import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, LOCATIONS } from '@/app/lib/constants';
import { Icon } from '@/app/components/Icons';
import { getServiceColorClasses, getServiceAccentColor, generateMetaTitle, generateMetaDescription } from '@/app/lib/utils';

interface Props {
  params: { service: string };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find(s => s.id === params.service);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: generateMetaTitle(service.name),
    description: generateMetaDescription(service.name),
    openGraph: {
      title: generateMetaTitle(service.name),
      description: generateMetaDescription(service.name),
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find(s => s.id === params.service);
  
  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Icon name={service.icon} size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{service.name}</h1>
              <p className="text-xl text-blue-100 mt-2">Professional restoration services across Michigan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional {service.name} Services</h2>
              <p className="text-lg text-gray-600 mb-8">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="check" size={20} className="text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Quick Response</h3>
                  </div>
                  <p className="text-green-700">
                    Our emergency response team arrives quickly to assess and begin restoration work immediately.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="shield" size={20} className="text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-800">Licensed & Insured</h3>
                  </div>
                  <p className="text-blue-700">
                    All work is performed by certified professionals with full licensing and insurance coverage.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="users" size={20} className="text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-800">Expert Team</h3>
                  </div>
                  <p className="text-purple-700">
                    Our experienced restoration specialists use industry-leading techniques and equipment.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="clock" size={20} className="text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-800">24/7 Available</h3>
                  </div>
                  <p className="text-orange-700">
                    Emergency restoration services available 24 hours a day, 7 days a week.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our {service.name} Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Emergency Assessment</h4>
                      <p className="text-gray-600">Immediate evaluation of damage and safety hazards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Damage Mitigation</h4>
                      <p className="text-gray-600">Immediate steps to prevent further damage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Restoration Work</h4>
                      <p className="text-gray-600">Professional restoration using advanced equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Final Inspection</h4>
                      <p className="text-gray-600">Quality assurance and completion verification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-center">
                <Icon name="phone" size={32} className="text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Service</h3>
                <p className="text-red-700 mb-4">Available 24/7 for immediate response</p>
                <a 
                  href="tel:(616) 648-7775"
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  <Icon name="phone" size={16} />
                  <span>(616) 648-7775</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Locations</h3>
              <p className="text-gray-600 mb-4">We provide {service.name.toLowerCase()} services in these areas:</p>
              <div className="space-y-2">
                {LOCATIONS.map((location) => (
                  <Link
                    key={location.id}
                    href={`/services/${service.id}/${location.slug}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{location.name}</span>
                      <Icon name="arrow-right" size={16} className="text-gray-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Services</h3>
              <div className="space-y-3">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.id}
                    href={`/services/${relatedService.id}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded ${getServiceColorClasses(relatedService.color)}`}>
                        <Icon name={relatedService.icon} size={16} />
                      </div>
                      <span className="font-medium text-gray-900">{relatedService.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}