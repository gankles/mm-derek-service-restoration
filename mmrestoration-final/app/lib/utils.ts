export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

export function getServiceColorClasses(color: string) {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    red: 'bg-red-100 text-red-700 border-red-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    orange: 'bg-orange-100 text-orange-700 border-orange-200',
    teal: 'bg-teal-100 text-teal-700 border-teal-200',
    brown: 'bg-amber-100 text-amber-700 border-amber-200',
    cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    pink: 'bg-pink-100 text-pink-700 border-pink-200',
    amber: 'bg-amber-100 text-amber-700 border-amber-200',
    gray: 'bg-gray-100 text-gray-700 border-gray-200',
    rose: 'bg-rose-100 text-rose-700 border-rose-200',
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200'
  };
  return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-700 border-gray-200';
}

export function getServiceAccentColor(color: string) {
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    teal: 'text-teal-600',
    brown: 'text-amber-600',
    cyan: 'text-cyan-600',
    yellow: 'text-yellow-600',
    indigo: 'text-indigo-600',
    pink: 'text-pink-600',
    amber: 'text-amber-600',
    gray: 'text-gray-600',
    rose: 'text-rose-600',
    emerald: 'text-emerald-600'
  };
  return colorMap[color as keyof typeof colorMap] || 'text-gray-600';
}

export function generateMetaTitle(service: string, location?: string): string {
  if (location) {
    return `${service} in ${location} | Professional Restoration Services | M&M Restoration`;
  }
  return `${service} | Professional Restoration Services | M&M Restoration`;
}

export function generateMetaDescription(service: string, location?: string): string {
  const baseDescription = `Professional ${service.toLowerCase()} services`;
  if (location) {
    return `${baseDescription} in ${location}. 24/7 emergency response. Licensed, insured, and experienced restoration specialists. Call M&M Restoration today.`;
  }
  return `${baseDescription} across Michigan. 24/7 emergency response. Licensed, insured, and experienced restoration specialists. Call M&M Restoration today.`;
}