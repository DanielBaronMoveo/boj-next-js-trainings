import React from "react";

interface CardProps {
  title: string;
  percentage: string;
  description: string;
  bulletPoints?: string[];
  variant?: "pink" | "orange" | "blue";
}

const gradients: Record<string, string> = {
  pink: "bg-gradient-to-br from-secondary-pink/40 via-white to-white",
  orange: "bg-gradient-to-br from-secondary-orange/40 via-white to-white",
  blue: "bg-gradient-to-br from-secondary-blue/40 via-white to-white",
};

export default function Card({
  title,
  percentage,
  description,
  bulletPoints = [],
  variant = "orange",
}: CardProps) {
  return (
    <div
      className={`rounded-[12px] p-lg shadow-md transition-transform hover:translate-y-[-2px] hover:shadow-lg ${gradients[variant]}`}
    >
      <div className="text-status-success font-bold text-3xl mb-sm">
        {percentage}
      </div>
      <h3 className="font-semibold text-primary mb-xs">{title}</h3>
      <p className="text-neutral-text_secondary text-sm mb-sm">{description}</p>
      {bulletPoints.length > 0 && (
        <ul className="list-disc pl-md space-y-xs text-neutral-text_secondary text-sm">
          {bulletPoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <button className="mt-md bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark">
        השקיע עכשיו
      </button>
    </div>
  );
}
