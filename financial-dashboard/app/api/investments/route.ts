import { NextResponse } from "next/server";
import { investmentData } from "@/lib/investments";
import { type Investment } from "@/lib/investments";

export async function GET() {
  return NextResponse.json(investmentData);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ["title", "subtitle", "percentage", "variant"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create new investment with generated ID
    const newInvestment: Investment = {
      id: (investmentData.length + 1).toString(),
      title: body.title,
      subtitle: body.subtitle,
      percentage: body.percentage,
      details: body.details || [],
      variant: body.variant,
      isRecommended: body.isRecommended || false,
    };

    // Add the new investment to the data array
    investmentData.push(newInvestment);

    console.log("New investment created:", newInvestment);
    console.log("Total investments:", investmentData.length);

    return NextResponse.json(newInvestment, { status: 201 });
  } catch (error) {
    console.error("Error creating investment:", error);
    return NextResponse.json(
      { error: "Failed to create investment" },
      { status: 500 }
    );
  }
}
