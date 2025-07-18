import React from 'react';

interface ImagePlaceholderProps {
  type: 'water-damage' | 'fire-damage' | 'mold-damage' | 'storm-damage' | 'biohazard' | 'cleaning' | 'restoration-team' | 'emergency-response';
  alt: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ type, alt, className = '' }) => {
  const getGradientAndElements = (imageType: string) => {
    switch (imageType) {
      case 'water-damage':
        return {
          gradient: 'from-blue-400 via-blue-500 to-blue-600',
          elements: (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-80">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">Water Damage</div>
              </div>
            </div>
          )
        };
      case 'fire-damage':
        return {
          gradient: 'from-red-400 via-red-500 to-red-600',
          elements: (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-80">
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">Fire Damage</div>
              </div>
            </div>
          )
        };
      case 'mold-damage':
        return {
          gradient: 'from-green-400 via-green-500 to-green-600',
          elements: (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-80">
                <div className="flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">Mold Damage</div>
              </div>
            </div>
          )
        };
      case 'storm-damage':
        return {
          gradient: 'from-purple-400 via-purple-500 to-purple-600',
          elements: (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-80">
                <div className="flex justify-center">
                  <div className="w-8 h-4 bg-white rounded-full transform -rotate-12"></div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">Storm Damage</div>
              </div>
            </div>
          )
        };
      case 'biohazard':
        return {
          gradient: 'from-orange-400 via-orange-500 to-orange-600',
          elements: (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-80">
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">Biohazard</div>
              </div>
            </div>
          )
        };
      case 'cleaning':
        return {
          gradient: 'from-teal-400 via-teal-500 to-teal-600',
          elements: (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-80">
                <div className="flex justify-center space-x-1">
                  <div className="w-1 h-4 bg-white rounded-full"></div>
                  <div className="w-1 h-6 bg-white rounded-full"></div>
                  <div className="w-1 h-4 bg-white rounded-full"></div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">Cleaning</div>
              </div>
            </div>
          )
        };
      case 'restoration-team':
        return {
          gradient: 'from-gray-400 via-gray-500 to-gray-600',
          elements: (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-80">
                <div className="flex justify-center space-x-2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">Our Team</div>
              </div>
            </div>
          )
        };
      case 'emergency-response':
        return {
          gradient: 'from-red-500 via-red-600 to-red-700',
          elements: (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-80">
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">24/7 Emergency</div>
              </div>
            </div>
          )
        };
      default:
        return {
          gradient: 'from-gray-300 via-gray-400 to-gray-500',
          elements: (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-80">
                <div className="text-center text-sm font-medium">Image</div>
              </div>
            </div>
          )
        };
    }
  };

  const { gradient, elements } = getGradientAndElements(type);

  return (
    <div className={`relative bg-gradient-to-br ${gradient} rounded-lg overflow-hidden ${className}`}>
      {elements}
    </div>
  );
};

interface BeforeAfterProps {
  beforeType: 'damaged' | 'flooded' | 'moldy' | 'burned';
  afterType: 'restored' | 'clean' | 'repaired';
  className?: string;
}

export const BeforeAfterPlaceholder: React.FC<BeforeAfterProps> = ({ beforeType, afterType, className = '' }) => {
  const getBeforeStyle = (type: string) => {
    switch (type) {
      case 'damaged':
        return 'from-red-600 to-red-800';
      case 'flooded':
        return 'from-blue-600 to-blue-800';
      case 'moldy':
        return 'from-green-600 to-green-800';
      case 'burned':
        return 'from-orange-600 to-orange-800';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  const getAfterStyle = (type: string) => {
    switch (type) {
      case 'restored':
        return 'from-green-400 to-green-600';
      case 'clean':
        return 'from-blue-400 to-blue-600';
      case 'repaired':
        return 'from-purple-400 to-purple-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      <div className="relative">
        <div className={`h-40 bg-gradient-to-br ${getBeforeStyle(beforeType)} rounded-lg flex items-center justify-center`}>
          <div className="text-white font-medium">Before</div>
        </div>
      </div>
      <div className="relative">
        <div className={`h-40 bg-gradient-to-br ${getAfterStyle(afterType)} rounded-lg flex items-center justify-center`}>
          <div className="text-white font-medium">After</div>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  className?: string;
}

export const TeamMemberPlaceholder: React.FC<TeamMemberProps> = ({ name, role, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 text-center ${className}`}>
      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <div className="text-white text-2xl font-bold">{name.charAt(0)}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};