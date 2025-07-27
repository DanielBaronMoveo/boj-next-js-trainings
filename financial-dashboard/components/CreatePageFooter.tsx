export default function CreatePageFooter() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center text-sm text-gray-600">
          <p>© 2024 מערכת הפיקדונות. כל הזכויות שמורות.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-gray-900">
              מדיניות פרטיות
            </a>
            <a href="#" className="hover:text-gray-900">
              תנאים משפטיים
            </a>
            <a href="#" className="hover:text-gray-900">
              צור קשר
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
