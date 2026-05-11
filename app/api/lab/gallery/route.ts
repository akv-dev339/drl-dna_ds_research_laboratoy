import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { serializeData } from "@/lib/serialize";

export async function GET() {
  try {

    const gallery = await prisma.lab_gallery.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(serializeData(gallery));

  } catch (error) {

    return NextResponse.json(
      { error: "Failed to fetch gallery" },
      { status: 500 }
    );

  }
}