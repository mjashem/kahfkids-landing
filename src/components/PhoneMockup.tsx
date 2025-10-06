import React from 'react';

interface PhoneMockupProps {
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main phone device */}
      <div className="w-64 h-[500px] lg:w-72 lg:h-[560px] bg-gray-900 rounded-[2.5rem] border-8 border-gray-800 relative overflow-hidden shadow-2xl">
        {/* Phone screen */}
        <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden">
          {/* Status bar */}
          <div className="h-6 bg-gray-900 flex items-center justify-between px-4">
            <span className="text-white text-xs font-medium">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-3 bg-white rounded-sm"></div>
              <div className="w-4 h-3 bg-white rounded-sm"></div>
              <div className="w-1 h-3 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* App header */}
          <div className="bg-orange-500 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-orange-500 font-bold text-sm">K</span>
              </div>
              <span className="text-white font-semibold">Kahf Kids</span>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* App content */}
          <div className="p-4 space-y-4 bg-gray-50">
            {/* Search bar */}
            <div className="bg-white rounded-lg px-3 py-2 flex items-center gap-2 border border-gray-200">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span className="text-gray-400 text-sm">Search videos...</span>
            </div>

            {/* Featured content */}
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-gray-900">Featured: Islamic Stories</h4>
                  <p class="text-xs text-gray-500">New videos added today</p>
                </div>
              </div>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="w-full h-20 bg-blue-100 rounded-lg mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <h5 className="text-xs font-medium text-gray-900">Stories</h5>
                <p className="text-xs text-gray-500">250+ items</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="w-full h-20 bg-green-100 rounded-lg mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h5 className="text-xs font-medium text-gray-900">Games</h5>
                <p className="text-xs text-gray-500">100+ games</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="w-full h-20 bg-purple-100 rounded-lg mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <h5 className="text-xs font-medium text-gray-900">Learning</h5>
                <p className="text-xs text-gray-500">500+ lessons</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="w-full h-20 bg-red-100 rounded-lg mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h5 className="text-xs font-medium text-gray-900">Activities</h5>
                <p className="text-xs text-gray-500">Daily fun</p>
              </div>
            </div>

            {/* Bottom navigation */}
            <div className="bg-white rounded-lg px-3 py-2 border border-gray-200 flex justify-around">
              <div className="w-6 h-6 bg-orange-500 rounded-lg"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Phone notch */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full"></div>

        {/* Phone buttons */}
        <div className="absolute right-0 top-32 w-1 h-8 bg-gray-700 rounded-l"></div>
        <div className="absolute left-0 top-44 w-1 h-12 bg-gray-700 rounded-r"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;