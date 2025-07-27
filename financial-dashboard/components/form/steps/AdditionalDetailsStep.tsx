interface FormData {
  details: string[];
  isRecommended: boolean;
}

interface AdditionalDetailsStepProps {
  formData: FormData;
  onUpdateDetails: (details: string[]) => void;
  onUpdateRecommended: (isRecommended: boolean) => void;
}

export default function AdditionalDetailsStep({
  formData,
  onUpdateDetails,
  onUpdateRecommended,
}: AdditionalDetailsStepProps) {
  const addDetail = () => {
    onUpdateDetails([...formData.details, ""]);
  };

  const removeDetail = (index: number) => {
    onUpdateDetails(formData.details.filter((_, i) => i !== index));
  };

  const updateDetail = (index: number, value: string) => {
    onUpdateDetails(
      formData.details.map((detail, i) => (i === index ? value : detail))
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          פרטים נוספים
        </label>
        <div className="space-y-3">
          {formData.details.map((detail, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={detail}
                onChange={(e) => updateDetail(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="פרט נוסף..."
              />
              {formData.details.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeDetail(index)}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
                >
                  מחק
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addDetail}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            + הוסף פרט נוסף
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="isRecommended"
          checked={formData.isRecommended}
          onChange={(e) => onUpdateRecommended(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="isRecommended"
          className="mr-2 block text-sm text-gray-700"
        >
          סמן כפיקדון מומלץ
        </label>
      </div>
    </div>
  );
}
