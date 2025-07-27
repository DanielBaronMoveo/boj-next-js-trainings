export default function CreatePageSidebar() {
  return (
    <div className="w-80 bg-white shadow-lg min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          יצירת פיקדון חדש
        </h2>
        <p className="text-gray-600 text-sm">
          מלאו את הפרטים להלן כדי ליצור פיקדון חדש במערכת
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">
            טיפים ליצירת פיקדון
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• ודאו שהריבית מדויקת</li>
            <li>• הוסיפו פרטים ברורים</li>
            <li>• בחרו צבע מתאים לקטגוריה</li>
            <li>• סמנו מומלץ רק לפיקדונים מיוחדים</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">סטטוס המערכת</h3>
          <div className="text-sm text-green-800">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>מערכת פעילה</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>API זמין</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">סטטיסטיקות</h3>
          <div className="text-sm text-gray-700 space-y-1">
            <div>סה&quot;כ פיקדונים: 5</div>
            <div>פיקדונים מומלצים: 1</div>
            <div>ריבית ממוצעת: 4.35%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
