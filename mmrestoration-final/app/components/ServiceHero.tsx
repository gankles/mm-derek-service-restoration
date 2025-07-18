import React from 'react';
import { Icon } from '@/app/components/Icons';

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: string;
  backgroundType: 'water' | 'fire' | 'mold' | 'storm' | 'biohazard' | 'cleaning';
}

export default function ServiceHero({ title, description, icon, backgroundType }: ServiceHeroProps) {
  const getBackgroundStyle = (type: string) => {
    switch (type) {
      case 'water':
        return 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900';
      case 'fire':
        return 'bg-gradient-to-br from-red-600 via-red-700 to-red-900';
      case 'mold':
        return 'bg-gradient-to-br from-green-600 via-green-700 to-green-900';
      case 'storm':
        return 'bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900';
      case 'biohazard':
        return 'bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900';
      case 'cleaning':
        return 'bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900';
      default:
        return 'bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900';
    }
  };

  const getPatternOverlay = (type: string) => {
    switch (type) {
      case 'water':
        return (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30s30 13.431 30 30-13.431 30-30 30-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} />
          </div>
        );
      case 'fire':
        return (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M20 20L0 0v40l20-20zm0 0L40 0v40L20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        );
      case 'mold':
        return (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='3' cy='3' r='2'/%3E%3Ccircle cx='17' cy='3' r='2'/%3E%3Ccircle cx='3' cy='17' r='2'/%3E%3Ccircle cx='17' cy='17' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative overflow-hidden ${getBackgroundStyle(backgroundType)} text-white py-20`}>
      {getPatternOverlay(backgroundType)}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <Icon name={icon} size={48} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}