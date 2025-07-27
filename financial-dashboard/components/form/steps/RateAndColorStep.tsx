/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidationErrors } from "@/lib/formTypes";

interface FormData {
  percentage: string;
  variant: "pink" | "orange" | "blue";
}

interface RateAndColorStepProps {
  formData: any;
  errors: ValidationErrors;
  onUpdate: (
    field: keyof FormData,
    value: string | "pink" | "orange" | "blue"
  ) => void;
}

export default function RateAndColorStep({
  formData,
  errors,
  onUpdate,
}: RateAndColorStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          אחוז הריבית *
        </label>
        <input
          type="text"
          value={formData.percentage}
          onChange={(e) => onUpdate("percentage", e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.percentage ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="לדוגמה: 4.5%"
        />
        {errors.percentage && (
          <p className="mt-1 text-sm text-red-600">{errors.percentage}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          צבע הקטגוריה
        </label>
        <div className="grid grid-cols-3 gap-4">
          {["pink", "orange", "blue"].map((variant) => (
            <button
              key={variant}
              type="button"
              onClick={() =>
                onUpdate("variant", variant as "pink" | "orange" | "blue")
              }
              className={`p-4 rounded-lg border-2 transition-colors ${
                formData.variant === variant
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                  variant === "pink"
                    ? "bg-pink-500"
                    : variant === "orange"
                    ? "bg-orange-500"
                    : "bg-blue-500"
                }`}
              ></div>
              <span className="text-sm font-medium capitalize">{variant}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
