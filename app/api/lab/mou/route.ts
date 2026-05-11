import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { serializeData } from "@/lib/serialize";

export async function GET() {
  try {

    const mous = await prisma.lab_mou.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(serializeData(mous));

  } catch (error) {

    return NextResponse.json(
      { error: "Failed to fetch MOUs" },
      { status: 500 }
    );

  }
}