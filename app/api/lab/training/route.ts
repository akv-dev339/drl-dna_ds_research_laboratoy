import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { serializeData } from "@/lib/serialize";

export async function GET() {
  try {

    const trainings = await prisma.lab_training.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(serializeData(trainings));

  } catch (error) {

    return NextResponse.json(
      { error: "Failed to fetch training programs" },
      { status: 500 }
    );

  }
}