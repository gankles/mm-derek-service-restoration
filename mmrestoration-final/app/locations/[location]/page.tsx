import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LOCATIONS, SERVICES } from '@/app/lib/constants';
import { Icon } from '@/app/components/Icons';
import { getServiceColorClasses } from '@/app/lib/utils';

interface Props {
  params: { location: string };
}

export async function generateStaticParams() {
  return LOCATIONS.map((location) => ({
    location: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = LOCATIONS.find(l => l.slug === params.location);
  
  if (!location) {
    return {
      title: 'Location Not Found',
      description: 'The requested location could not be found.',
    };
  }

  return {
    title: `Restoration Services in ${location.name} | M&M Restoration`,
    description: `Professional restoration services in ${location.name} including water damage, fire damage, mold remediation, and more. 24/7 emergency response.`,
    openGraph: {
      title: `Restoration Services in ${location.name} | M&M Restoration`,
      description: `Professional restoration services in ${location.name} including water damage, fire damage, mold remediation, and more. 24/7 emergency response.`,
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = LOCATIONS.find(l => l.slug === params.location);
  
  if (!location) {
    notFound();
  }

  const otherLocations = LOCATIONS.filter(l => l.slug !== location.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Icon name="map-pin" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Restoration Services in {location.name}</h1>
              <p className="text-xl text-green-100 mt-2">Professional restoration services in {location.shortName}, {location.state}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                M&M Restoration Services in {location.name}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                When disaster strikes in {location.name}, M&M Restoration is your trusted local partner for comprehensive restoration services. 
                Our certified technicians understand the unique challenges of {location.shortName} properties and provide fast, professional response to get your life back to normal.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="map-pin" size={20} className="text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Local {location.shortName} Expertise</h3>
                  </div>
                  <p className="text-green-700">
                    Deep understanding of {location.shortName} building codes, weather patterns, and property types for effective restoration.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="clock" size={20} className="text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-800">Fast Response Times</h3>
                  </div>
                  <p className="text-blue-700">
                    Strategic location allows us to respond quickly to emergency calls throughout {location.shortName} and surrounding areas.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="shield" size={20} className="text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-800">Licensed & Insured</h3>
                  </div>
                  <p className="text-purple-700">
                    Fully licensed and insured restoration company serving {location.shortName} with complete professional coverage.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="users" size={20} className="text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-800">Certified Technicians</h3>
                  </div>
                  <p className="text-orange-700">
                    Our {location.shortName} restoration team consists of certified, trained professionals with years of experience.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose M&M Restoration in {location.name}?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="star" size={20} className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Focused</h4>
                      <p className="text-gray-600">We're part of the {location.shortName} community and committed to helping our neighbors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="star" size={20} className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Insurance Partnerships</h4>
                      <p className="text-gray-600">We work directly with insurance companies to streamline your claim process</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="star" size={20} className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Equipment</h4>
                      <p className="text-gray-600">State-of-the-art restoration equipment and techniques for optimal results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="star" size={20} className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Satisfaction Guarantee</h4>
                      <p className="text-gray-600">We stand behind our work with a complete satisfaction guarantee</p>
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
                <p className="text-red-700 mb-4">24/7 response in {location.shortName}</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Service Areas</h3>
              <div className="space-y-2">
                {otherLocations.map((otherLocation) => (
                  <Link
                    key={otherLocation.id}
                    href={`/locations/${otherLocation.slug}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{otherLocation.name}</span>
                      <Icon name="arrow-right" size={16} className="text-gray-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Restoration Services in {location.name}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg ${getServiceColorClasses(service.color)}`}>
                      <Icon name={service.icon} size={20} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{service.shortName}</h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    Professional {service.name.toLowerCase()} services in {location.shortName} with fast response and expert restoration.
                  </p>
                  <Link 
                    href={`/services/${service.id}/${location.slug}`}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <span>Learn More</span>
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}