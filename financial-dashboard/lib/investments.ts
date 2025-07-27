export interface Investment {
  id: string;
  percentage: string;
  subtitle: string;
  title: string;
  details: string[];
  variant: "pink" | "orange" | "blue";
  isRecommended?: boolean;
}

export const investmentData: Investment[] = [
  {
    id: "1",
    percentage: "4%",
    subtitle: "ריבית קבועה בהנפקדה שנתית",
    title: "פיקדון אחאים",
    details: ["ניסח שנה", "ביל חוסף"],
    variant: "pink",
  },
  {
    id: "2",
    percentage: "4.6%",
    subtitle: "מחזור ב 5 שנים עם תנאות",
    title: "פיקדון שמש",
    details: ["זמין למשביר כל שנה", "מבוטח במוקמת תמה ממותקדת", "שיקלי"],
    variant: "orange",
  },
  {
    id: "3",
    percentage: "4.15%",
    subtitle: "ריבית משתנה במטמוגה שנתית",
    title: "פיקדון ארץ",
    details: [
      "זמין למשביר של 7 ימים",
      "למשביר של עד 4 שנים",
      "זמין למשביר כל 5 ימים",
      "שיקלי",
    ],
    variant: "blue",
    isRecommended: true,
  },
  {
    id: "4",
    percentage: "3.8%",
    subtitle: "ריבית משתנה",
    title: "פיקדון חדש",
    details: ["תנאים משופרים", "גמישות מקסימלית"],
    variant: "pink",
  },
  {
    id: "5",
    percentage: "5.2%",
    subtitle: "השקעה ארוכת טווח",
    title: "פיקדון פרמיום",
    details: ["תשואה גבוהה", "אבטחה מלאה", "שירות אישי"],
    variant: "orange",
  },
];

export const fetchInvestments = async () => {
  try {
    // During SSR, we need to use the full URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/investments`, {
      // Add cache control for SSR
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch investments");
    }

    const data = await response.json();
    console.log({ data });
    return data;
  } catch (error) {
    console.error("Error fetching investments:", error);
    // Fallback to static data if API fails
    return investmentData;
  }
};
