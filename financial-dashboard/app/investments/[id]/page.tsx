import { notFound } from "next/navigation";
import Link from "next/link";
import { investmentData, type Investment } from "@/lib/investments";

function getInvestment(id: string): Investment | null {
  return investmentData.find((investment) => investment.id === id) || null;
}

const variantStyles = {
  pink: "from-pink-100 to-pink-50 border-pink-200",
  orange: "from-orange-100 to-orange-50 border-orange-200",
  blue: "from-blue-100 to-blue-50 border-blue-200",
};

const variantAccents = {
  pink: "bg-pink-500",
  orange: "bg-orange-500",
  blue: "bg-blue-500",
};

export default async function InvestmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const investment = getInvestment(id);

  if (!investment) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          ← חזרה לדף הראשי
        </Link>

        <div
          className={`bg-gradient-to-br ${
            variantStyles[investment.variant]
          } border rounded-3xl p-8 shadow-lg`}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {investment.title}
              </h1>
              <p className="text-lg text-gray-600">{investment.subtitle}</p>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold text-gray-900">
                {investment.percentage}
              </div>
              {investment.isRecommended && (
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  מומלץ
                </span>
              )}
            </div>
          </div>

          <div
            className={`w-full h-1 ${
              variantAccents[investment.variant]
            } rounded-full mb-8`}
          ></div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              פרטי ההשקעה
            </h2>
            <ul className="space-y-3">
              {investment.details.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className={`w-2 h-2 ${
                      variantAccents[investment.variant]
                    } rounded-full ml-3 flex-shrink-0`}
                  ></div>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">יתרונות</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ביטחון מלא של ההשקעה</li>
                  <li>• שירות לקוחות מעולה</li>
                  <li>• גמישות בתנאים</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">מידע נוסף</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• בדיקות אשראי נדרשות</li>
                  <li>• ייעוץ אישי זמין</li>
                  <li>• אפשרות לעדכון תנאים</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors">
              פתח חשבון
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              קבל פרטים נוספים
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
