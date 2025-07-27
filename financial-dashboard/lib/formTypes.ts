export interface FormData {
  title: string;
  subtitle: string;
  percentage: string;
  variant: "pink" | "orange" | "blue";
  details: string[];
  isRecommended: boolean;
}

export interface ValidationErrors {
  title?: string;
  subtitle?: string;
  percentage?: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}
