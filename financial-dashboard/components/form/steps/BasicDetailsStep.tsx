import { ValidationErrors } from "@/lib/formTypes";

interface FormData {
  title: string;
  subtitle: string;
}

interface BasicDetailsStepProps {
  formData: FormData;
  errors: ValidationErrors;
  onUpdate: (field: keyof FormData, value: string) => void;
}

export default function BasicDetailsStep({
  formData,
  errors,
  onUpdate,
}: BasicDetailsStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          שם הפיקדון *
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onUpdate("title", e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="לדוגמה: פיקדון פרמיום"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          תיאור קצר *
        </label>
        <input
          type="text"
          value={formData.subtitle}
          onChange={(e) => onUpdate("subtitle", e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.subtitle ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="לדוגמה: ריבית קבועה בהנפקדה שנתית"
        />
        {errors.subtitle && (
          <p className="mt-1 text-sm text-red-600">{errors.subtitle}</p>
        )}
      </div>
    </div>
  );
}
