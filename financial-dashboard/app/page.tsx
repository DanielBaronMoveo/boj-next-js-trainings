import Header from "@/components/Header/Header";
import InvestmentCarousel from "@/components/InvestmentCarousel";
import { fetchInvestments } from "@/lib/investments";
import Link from "next/link";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default async function Shalom() {
  const investments = await fetchInvestments();
  console.log({ investments });
  return (
    <div className="min-h-screen bg-hero-gradient">
      <Header />

      <main className="px-6 py-12">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto text-center mb-16">
          {/* Planet/Saturn illustration would go here */}
          <div className="flex justify-center items-center mb-8">
            <div className="relative">
              {/* Saturn-like planet illustration */}
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-8 border-4 border-blue-300 rounded-full opacity-70"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            ממריאים לפיקדון מכובד אחר
          </h1>

          <p className="text-lg text-text-gray mb-8 max-w-2xl mx-auto">
            ללא צורך בפתיחת חשבון עו&quot;ש
          </p>

          {/* Process Steps */}
          <div className="flex justify-center gap-12 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-text-dark mb-1">3</div>
              <div className="text-sm text-text-gray">מכלים פשוטים</div>
              <div className="text-sm text-text-gray">ומתחידים לכדורב</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-text-dark mb-1">2</div>
              <div className="text-sm text-text-gray">אותך מהתאים</div>
              <div className="text-sm text-text-gray">כך פיקדון</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-text-dark mb-1">1</div>
              <div className="text-sm text-text-gray">עיין על כמה</div>
              <div className="text-sm text-text-gray">שאלות קצרות</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <button className="bg-orange-btn hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors">
              התאימו לי פיקדון
            </button>
            <Link
              href="/create"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
            >
              צור פיקדון חדש
            </Link>
          </div>
        </section>

        {/* Investment Options Section */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-text-dark text-center mb-8">
            הפקדונות המומלצים שלנו
          </h2>

          <div className="overflow-hidden">
            <InvestmentCarousel
              investments={[...investments, ...investments, ...investments]}
            />
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <button className="text-text-gray hover:text-text-dark transition-colors flex items-center gap-2 mx-auto">
              <span>לרשימת הפקדונות המלאה</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </section>

        {/* Footer disclaimer */}
        <footer className="max-w-7xl mx-auto mt-16 text-center">
          <p className="text-xs text-text-gray leading-relaxed">
            המידע נכון למועד הצגתו ויכול השוק והן התנאים יכולים בכל עת. 0.6%
            הבנק רישי להכריעו את הביחס בכל עת. (ריבית בנק ישראל + 1.5% • התאמה
            לאתרו וספרי חשבון מס. ריבית מפורסמת (ריבית בנק ישראל + 1.5% • התאמה
            לאתרון מטוחים הממונים עליהן בכל עת.
          </p>

          <div className="flex justify-center gap-8 mt-8 text-sm text-text-gray">
            <a href="#" className="hover:text-text-dark">
              לוכנית שיווי רבות
            </a>
            <a href="#" className="hover:text-text-dark">
              למסמך על אפשרויות הפקדון בפיקדון
            </a>
            <a href="#" className="hover:text-text-dark">
              לכלי השוואתי באתר בנק ישראל
            </a>
          </div>

          <div className="flex justify-between items-center mt-8 text-xs text-text-gray">
            <div className="flex gap-4">
              <span>מדיניות פרטיות</span>
              <span>תנאים משפטיים</span>
            </div>
            <div className="flex items-center gap-2">
              <span>אתר מאובטח SSL</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
