import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { serializeData } from "@/lib/serialize";

export async function GET() {
  try {
    const events = await prisma.lab_events.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(serializeData(events));

  } catch (error) {

    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );

  }
}