import { NextRequest, NextResponse } from "next/server";
import { locations } from "@/app/lib/locations";
export async function GET(req: Request, res: Response,   
) {
  
  return NextResponse.json(locations, {
    status: 200,
  });
}
