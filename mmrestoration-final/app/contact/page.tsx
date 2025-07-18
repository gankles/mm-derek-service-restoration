import { Metadata } from 'next';
import { COMPANY_INFO } from '@/app/lib/constants';
import { Icon } from '@/app/components/Icons';

export const metadata: Metadata = {
  title: 'Contact M&M Restoration | 24/7 Emergency Response Michigan',
  description: 'Contact M&M Restoration for emergency restoration services across Michigan. 24/7 response available for water damage, fire damage, mold remediation, and more.',
  openGraph: {
    title: 'Contact M&M Restoration | 24/7 Emergency Response Michigan',
    description: 'Contact M&M Restoration for emergency restoration services across Michigan. 24/7 response available for water damage, fire damage, mold remediation, and more.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact M&M Restoration
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Available 24/7 for emergency restoration services across Michigan. 
              Contact us immediately for fast response to your restoration needs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-red-50 rounded-lg p-8 mb-8">
              <div className="text-center">
                <Icon name="phone" size={48} className="text-red-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-red-800 mb-4">Emergency Response</h2>
                <p className="text-red-700 mb-6">
                  When disaster strikes, every minute counts. Our emergency response team is available 
                  24 hours a day, 7 days a week to begin restoration work immediately.
                </p>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-xl font-semibold"
                >
                  <Icon name="phone" size={24} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <p className="text-red-600 text-sm mt-4 font-medium">Call now for immediate assistance</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon name="phone" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-blue-600 hover:text-blue-800 text-lg font-medium"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Available 24/7 for emergency calls</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Icon name="mail" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-green-600 hover:text-green-800 text-lg font-medium"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">For non-emergency inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Icon name="map-pin" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Area</h4>
                    <p className="text-gray-700 text-lg">{COMPANY_INFO.serviceArea}</p>
                    <p className="text-gray-600 text-sm mt-1">We serve communities throughout Michigan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Icon name="clock" size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                    <p className="text-gray-700 text-lg">{COMPANY_INFO.hours}</p>
                    <p className="text-gray-600 text-sm mt-1">Emergency services available anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Service</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="water-damage">Water Damage Restoration</option>
                  <option value="fire-damage">Fire Damage Cleanup</option>
                  <option value="mold-remediation">Mold Remediation</option>
                  <option value="storm-damage">Storm Damage Restoration</option>
                  <option value="biohazard-cleanup">Biohazard Cleanup</option>
                  <option value="other">Other Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level *
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="">Select urgency level</option>
                  <option value="emergency">Emergency - Need immediate response</option>
                  <option value="urgent">Urgent - Within 24 hours</option>
                  <option value="normal">Normal - Within a few days</option>
                  <option value="estimate">Just need an estimate</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe Your Situation *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Please describe the damage and your situation in detail..."
                ></textarea>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Icon name="alert-triangle" size={20} className="text-yellow-600" />
                  <p className="text-sm text-yellow-800 font-medium">
                    For immediate emergency assistance, please call {COMPANY_INFO.phone} instead of using this form.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose M&M Restoration?</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Professional restoration services with the experience and equipment to handle any disaster.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Icon name="shield" size={32} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
              <p className="text-sm text-gray-600">Fully licensed and insured for your protection</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Icon name="users" size={32} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Certified Professionals</h4>
              <p className="text-sm text-gray-600">Trained and certified restoration experts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Icon name="clock" size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-sm text-gray-600">Emergency services available anytime</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Icon name="check" size={32} className="text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h4>
              <p className="text-sm text-gray-600">We guarantee your complete satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}