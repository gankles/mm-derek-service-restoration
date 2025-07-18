import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, LOCATIONS, COMPANY_INFO } from '@/app/lib/constants';
import { Icon } from '@/app/components/Icons';
import { getServiceColorClasses } from '@/app/lib/utils';
import { ImagePlaceholder, BeforeAfterPlaceholder, TeamMemberPlaceholder } from '@/app/components/VisualElements';

export const metadata: Metadata = {
  title: 'M&M Restoration | Professional Damage Restoration Services Michigan',
  description: 'Professional restoration services in Michigan including water damage, fire damage, mold remediation, storm damage, and biohazard cleanup. 24/7 emergency response available.',
  openGraph: {
    title: 'M&M Restoration | Professional Damage Restoration Services Michigan',
    description: 'Professional restoration services in Michigan including water damage, fire damage, mold remediation, storm damage, and biohazard cleanup. 24/7 emergency response available.',
  },
};

export default function HomePage() {
  const primaryServices = SERVICES.slice(0, 5);
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Lansing, MI',
      text: 'M&M Restoration saved our home after a major water leak. Their team was professional, fast, and went above and beyond to restore everything perfectly.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      location: 'Grand Ledge, MI',
      text: 'Excellent fire damage restoration service. They handled everything from start to finish and worked directly with our insurance company.',
      rating: 5
    },
    {
      id: 3,
      name: 'Lisa Martinez',
      location: 'Okemos, MI',
      text: 'Professional mold remediation service. The team was thorough, knowledgeable, and left our home completely safe and clean.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Restoration Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              24/7 Emergency Response • Water Damage • Fire Damage • Mold Remediation • Storm Damage • Biohazard Cleanup
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold shadow-lg"
              >
                <Icon name="phone" size={24} />
                <span>Emergency: {COMPANY_INFO.phone}</span>
              </a>
              <Link 
                href="/services"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg font-semibold shadow-lg"
              >
                <span>View Our Services</span>
                <Icon name="arrow-right" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">When Disaster Strikes, We Restore</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional restoration services across Michigan with certified technicians, 
              advanced equipment, and 24/7 emergency response.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Icon name="clock" size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Emergency Response</h3>
              <p className="text-gray-600">
                Immediate response when you need it most. Our emergency teams are available 
                around the clock to begin restoration work immediately.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Icon name="shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed and insured restoration company with certified technicians 
                and complete professional coverage for your peace of mind.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Icon name="users" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Experienced restoration specialists with years of training and expertise 
                in all types of damage restoration and cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Restoration Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive restoration services for residential and commercial properties 
              with advanced equipment and proven techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg ${getServiceColorClasses(service.color)}`}>
                      <Icon name={service.icon} size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
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
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-center">
              <Icon name="star" size={32} className="mb-4" />
              <h3 className="text-xl font-semibold mb-4">And Much More!</h3>
              <p className="text-blue-100 mb-6">
                We offer a complete range of restoration services for every type of damage.
              </p>
              <Link 
                href="/services"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
              >
                <span>View All Services</span>
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas Across Michigan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local expertise and fast response times in communities throughout Michigan.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Icon name="map-pin" size={24} className="text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{location.shortName}</h3>
                <p className="text-sm text-gray-600">{location.state}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/locations"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              <span>View All Locations</span>
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from satisfied customers across Michigan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="star" size={20} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Icon name="users" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Work in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional restoration results that speak for themselves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Damage Restoration</h3>
              <BeforeAfterPlaceholder beforeType="flooded" afterType="restored" />
              <p className="text-gray-600 mt-4">Complete water extraction and drying process</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fire Damage Cleanup</h3>
              <BeforeAfterPlaceholder beforeType="burned" afterType="clean" />
              <p className="text-gray-600 mt-4">Smoke damage cleanup and restoration</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImagePlaceholder type="emergency-response" alt="24/7 Emergency Response" className="h-48" />
            <ImagePlaceholder type="restoration-team" alt="Professional Restoration Team" className="h-48" />
            <ImagePlaceholder type="cleaning" alt="Professional Cleaning Services" className="h-48" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose M&M Restoration?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <Icon name="check" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Certified Professionals</h3>
                    <p className="text-blue-200">All technicians are certified and trained in the latest restoration techniques.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <Icon name="check" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Advanced Equipment</h3>
                    <p className="text-blue-200">State-of-the-art restoration equipment for efficient and effective results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <Icon name="check" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Insurance Coordination</h3>
                    <p className="text-blue-200">We work directly with insurance companies to streamline your claim process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <Icon name="check" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Satisfaction Guarantee</h3>
                    <p className="text-blue-200">We stand behind our work with a complete satisfaction guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-800 rounded-lg p-8">
              <div className="text-center">
                <Icon name="phone" size={48} className="mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
                <p className="text-blue-200 mb-6">
                  Our emergency response team is available 24/7 to begin restoration work immediately.
                </p>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg"
                >
                  <Icon name="phone" size={20} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <p className="text-blue-300 text-sm mt-4">Call now for immediate assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Restoration Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process that ensures thorough restoration and complete customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contact</h3>
              <p className="text-gray-600">
                Call us 24/7 for immediate response and emergency assessment of your property damage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Damage Assessment</h3>
              <p className="text-gray-600">
                Thorough inspection and documentation of all damage for insurance and restoration planning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Restoration Work</h3>
              <p className="text-gray-600">
                Professional restoration using advanced equipment and proven techniques for optimal results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Inspection</h3>
              <p className="text-gray-600">
                Quality assurance inspection to ensure complete restoration and your total satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}