import Link from "next/link";
import { type Investment } from "@/lib/investments";

const cardVariants = {
  pink: {
    bg: "bg-card-pink",
    gradient: "bg-card-pink-gradient",
  },
  orange: {
    bg: "bg-card-orange",
    gradient: "bg-card-orange-gradient",
  },
  blue: {
    bg: "bg-card-blue",
    gradient: "bg-card-blue-gradient",
  },
};

export default function InvestmentCard({
  id,
  percentage,
  title,
  subtitle,
  details,
  variant,
  isRecommended = false,
}: Investment) {
  return (
    <Link href={`/investments/${id}`} className="block">
      <div className="relative bg-white rounded-2xl p-6 shadow-sm min-h-[280px] overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
        {/* Background gradient circle */}
        <div
          className={`absolute bottom-0 left-0 w-32 h-32 rounded-full ${cardVariants[variant].gradient} opacity-60`}
        />

        {/* Recommended badge */}
        {isRecommended && (
          <div className="absolute top-4 left-4 bg-recommended-bg text-white text-xs px-2 py-1 rounded-full">
            מומלץ
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Percentage */}
          <div className="text-3xl font-bold text-text-dark mb-1">
            {percentage}
          </div>

          {/* Subtitle */}
          <div className="text-sm text-text-gray mb-3">{subtitle}</div>

          {/* Title */}
          <div className="text-lg font-semibold text-text-dark mb-4">
            {title}
          </div>

          {/* Details */}
          <div className="space-y-2 mb-6">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-sm text-text-gray"
              >
                <span className="text-orange-btn mt-1">•</span>
                <span>{detail}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full bg-transparent border border-gray-300 text-text-gray py-2 px-4 rounded-full text-sm hover:bg-gray-50 transition-colors">
            למפקדון ומידע נוסף
          </button>
        </div>
      </div>
    </Link>
  );
}
