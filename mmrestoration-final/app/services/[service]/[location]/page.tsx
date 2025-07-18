import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, LOCATIONS } from '@/app/lib/constants';
import { Icon } from '@/app/components/Icons';
import { getServiceColorClasses, generateMetaTitle, generateMetaDescription } from '@/app/lib/utils';

interface Props {
  params: { service: string; location: string };
}

export async function generateStaticParams() {
  const params = [];
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      params.push({
        service: service.id,
        location: location.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find(s => s.id === params.service);
  const location = LOCATIONS.find(l => l.slug === params.location);
  
  if (!service || !location) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: generateMetaTitle(service.name, location.name),
    description: generateMetaDescription(service.name, location.name),
    openGraph: {
      title: generateMetaTitle(service.name, location.name),
      description: generateMetaDescription(service.name, location.name),
    },
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service = SERVICES.find(s => s.id === params.service);
  const location = LOCATIONS.find(l => l.slug === params.location);
  
  if (!service || !location) {
    notFound();
  }

  const otherLocations = LOCATIONS.filter(l => l.slug !== location.slug).slice(0, 4);
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
              <h1 className="text-4xl md:text-5xl font-bold">{service.name} in {location.name}</h1>
              <p className="text-xl text-blue-100 mt-2">Professional restoration services in {location.shortName}, {location.state}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert {service.name} Services in {location.name}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                When you need professional {service.name.toLowerCase()} in {location.name}, M&M Restoration is here to help. 
                Our certified technicians provide immediate response and comprehensive restoration services to get your property back to normal quickly.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="map-pin" size={20} className="text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Local {location.shortName} Service</h3>
                  </div>
                  <p className="text-green-700">
                    We serve {location.name} and surrounding areas with fast response times and local expertise.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="check" size={20} className="text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-800">Licensed & Certified</h3>
                  </div>
                  <p className="text-blue-700">
                    All our {service.name.toLowerCase()} work in {location.shortName} is performed by licensed professionals.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="shield" size={20} className="text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-800">Insurance Support</h3>
                  </div>
                  <p className="text-purple-700">
                    We work directly with insurance companies to streamline your {service.name.toLowerCase()} claim process.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="clock" size={20} className="text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-800">24/7 Emergency</h3>
                  </div>
                  <p className="text-orange-700">
                    Emergency {service.name.toLowerCase()} services available 24/7 in {location.shortName}.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us for {service.name} in {location.name}?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="star" size={20} className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                      <p className="text-gray-600">Deep understanding of {location.shortName} properties and local building codes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="star" size={20} className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Equipment</h4>
                      <p className="text-gray-600">State-of-the-art restoration equipment for efficient {service.name.toLowerCase()}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="star" size={20} className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Service</h4>
                      <p className="text-gray-600">Complete {service.name.toLowerCase()} from initial assessment to final cleanup</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="star" size={20} className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Satisfaction Guarantee</h4>
                      <p className="text-gray-600">We stand behind our {service.name.toLowerCase()} work with full satisfaction guarantee</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Common {service.name} Scenarios in {location.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="check" size={16} className="text-blue-600" />
                    <span className="text-blue-800">Residential properties</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="check" size={16} className="text-blue-600" />
                    <span className="text-blue-800">Commercial buildings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="check" size={16} className="text-blue-600" />
                    <span className="text-blue-800">Emergency situations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="check" size={16} className="text-blue-600" />
                    <span className="text-blue-800">Insurance claims</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-center">
                <Icon name="phone" size={32} className="text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-800 mb-2">Emergency {service.name}</h3>
                <p className="text-red-700 mb-4">Serving {location.name} 24/7</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other {location.shortName} Services</h3>
              <div className="space-y-3">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.id}
                    href={`/services/${relatedService.id}/${location.slug}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded ${getServiceColorClasses(relatedService.color)}`}>
                        <Icon name={relatedService.icon} size={16} />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">{relatedService.shortName}</span>
                        <p className="text-sm text-gray-600">in {location.shortName}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nearby Service Areas</h3>
              <div className="space-y-2">
                {otherLocations.map((otherLocation) => (
                  <Link
                    key={otherLocation.id}
                    href={`/services/${service.id}/${otherLocation.slug}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{service.shortName} in {otherLocation.name}</span>
                      <Icon name="arrow-right" size={16} className="text-gray-400" />
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