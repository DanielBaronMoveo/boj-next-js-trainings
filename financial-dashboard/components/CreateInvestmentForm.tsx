"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormData, ValidationErrors, Step } from "@/lib/formTypes";
import FormSteps from "./form/FormSteps";
import FormNavigation from "./form/FormNavigation";
import BasicDetailsStep from "./form/steps/BasicDetailsStep";
import RateAndColorStep from "./form/steps/RateAndColorStep";
import AdditionalDetailsStep from "./form/steps/AdditionalDetailsStep";
import SummaryStep from "./form/steps/SummaryStep";

const steps: Step[] = [
  { id: 1, title: "פרטים בסיסיים", description: "שם הפיקדון ותיאור" },
  { id: 2, title: "ריבית וצבע", description: "אחוז הריבית וצבע הקטגוריה" },
  { id: 3, title: "פרטים נוספים", description: "פרטים נוספים ותכונות מיוחדות" },
  { id: 4, title: "סיכום", description: "בדיקה ואישור" },
];

export default function CreateInvestmentForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<FormData>({
    title: "",
    subtitle: "",
    percentage: "",
    variant: "pink",
    details: [""],
    isRecommended: false,
  });

  const updateFormData = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const updateDetails = (details: string[]) => {
    setFormData((prev) => ({ ...prev, details }));
  };

  const updateRecommended = (isRecommended: boolean) => {
    setFormData((prev) => ({ ...prev, isRecommended }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {};

    if (step === 1) {
      if (!formData.title.trim()) {
        newErrors.title = "שם הפיקדון הוא שדה חובה";
      }
      if (!formData.subtitle.trim()) {
        newErrors.subtitle = "תיאור הפיקדון הוא שדה חובה";
      }
    }

    if (step === 2) {
      if (!formData.percentage.trim()) {
        newErrors.percentage = "אחוז הריבית הוא שדה חובה";
      } else if (
        !/^\d+(\.\d+)?%?$/.test(formData.percentage.replace("%", ""))
      ) {
        newErrors.percentage = "אחוז הריבית חייב להיות מספר תקין";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Final validation before submission
    if (!validateStep(1) || !validateStep(2)) {
      setCurrentStep(1); // Go back to first step with errors
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/investments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          details: formData.details.filter((detail) => detail.trim() !== ""),
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error("Error creating investment:", error);
      alert("Failed to create investment");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicDetailsStep
            formData={{ title: formData.title, subtitle: formData.subtitle }}
            errors={errors}
            onUpdate={updateFormData}
          />
        );

      case 2:
        return (
          <RateAndColorStep
            formData={{
              percentage: formData.percentage,
              variant: formData.variant,
            }}
            errors={errors}
            onUpdate={updateFormData}
          />
        );

      case 3:
        return (
          <AdditionalDetailsStep
            formData={{
              details: formData.details,
              isRecommended: formData.isRecommended,
            }}
            onUpdateDetails={updateDetails}
            onUpdateRecommended={updateRecommended}
          />
        );

      case 4:
        return <SummaryStep formData={formData} />;

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <FormSteps steps={steps} currentStep={currentStep} />

      <div className="mb-8">{renderStep()}</div>

      <FormNavigation
        currentStep={currentStep}
        totalSteps={steps.length}
        onPrev={prevStep}
        onNext={nextStep}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
