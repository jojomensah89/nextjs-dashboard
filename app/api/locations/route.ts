import { NextRequest, NextResponse } from "next/server";
import { locations } from "@/app/lib/locations";
export async function GET(req: Request, res: Response,  { params }: { params: { id: string } }
) {
   const id = Number(params.id); 
  if(id){
     return NextResponse.json(locations[id], {
    status: 200,
  });
  }
  return NextResponse.json(locations, {
    status: 200,
  });
}
