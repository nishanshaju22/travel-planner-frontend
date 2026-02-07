'use client';

import { Bell } from 'lucide-react';

export default function NotificationButton({ count = 0 }) {
  return (
      <button className="relative w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center shadow-lg">
        <Bell size={20} className="text-gray-700" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {count > 99 ? '99+' : count}
          </span>
        )}
      </button>
  );
}
