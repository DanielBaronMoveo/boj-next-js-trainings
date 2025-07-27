import { FormData } from "@/lib/formTypes";

interface SummaryStepProps {
  formData: FormData;
}

export default function SummaryStep({ formData }: SummaryStepProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          סיכום הפיקדון
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">שם:</span>
            <span className="font-medium">{formData.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">תיאור:</span>
            <span className="font-medium">{formData.subtitle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ריבית:</span>
            <span className="font-medium">{formData.percentage}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">צבע:</span>
            <span className="font-medium capitalize">{formData.variant}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">מומלץ:</span>
            <span className="font-medium">
              {formData.isRecommended ? "כן" : "לא"}
            </span>
          </div>
          <div>
            <span className="text-gray-600">פרטים:</span>
            <ul className="mt-1 space-y-1">
              {formData.details
                .filter((d) => d.trim())
                .map((detail, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    • {detail}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
