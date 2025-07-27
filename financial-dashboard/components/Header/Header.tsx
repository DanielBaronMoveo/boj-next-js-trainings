export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4 yaron">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Right side - Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-600">💰</span>
          <span className="font-medium text-text-dark">בנק ירושלים</span>
        </div>

        {/* Left side - Search */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="חיפוש צור קשר"
              className="bg-gray-100 rounded-full px-4 py-2 pr-10 text-sm w-40 text-right"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <span className="text-sm text-text-gray">פתיחת פיקדון</span>
        </div>
      </div>
    </header>
  );
}
