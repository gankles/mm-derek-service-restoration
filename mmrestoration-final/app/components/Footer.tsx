import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, SERVICES, LOCATIONS } from '@/app/lib/constants';
import { Icon } from '@/app/components/Icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Icon name="shield" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">{COMPANY_INFO.name}</h3>
                <p className="text-sm text-gray-400">Professional Restoration</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
              >
                Emergency: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/services"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {LOCATIONS.slice(0, 6).map((location) => (
                <li key={location.id}>
                  <Link 
                    href={`/locations/${location.slug}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/locations"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Icon name="phone" size={16} className="text-gray-400" />
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="mail" size={16} className="text-gray-400" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="map-pin" size={16} className="text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {COMPANY_INFO.serviceArea}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="clock" size={16} className="text-gray-400" />
                <span className="text-gray-400 text-sm">
                  {COMPANY_INFO.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Licensed, Insured, and Certified Restoration Professionals
          </p>
        </div>
      </div>
    </footer>
  );
}