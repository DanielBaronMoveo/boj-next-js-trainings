import { Step } from "@/lib/formTypes";

interface FormStepsProps {
  steps: Step[];
  currentStep: number;
}

export default function FormSteps({ steps, currentStep }: FormStepsProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                currentStep >= step.id
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              {step.id}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-16 h-0.5 mx-4 ${
                  currentStep > step.id ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {steps[currentStep - 1].title}
        </h2>
        <p className="text-gray-600">{steps[currentStep - 1].description}</p>
      </div>
    </div>
  );
}
