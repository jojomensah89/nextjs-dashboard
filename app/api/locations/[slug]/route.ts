import { NextRequest, NextResponse } from "next/server";
import { locations } from "@/app/lib/locations";
export async function GET(req: NextRequest, res: NextResponse,    { params }: { params: { slug: string } }

) {
    const slug = params.slug; // Access the dynamic parameter
    const id = Number(slug); // C    
    if(!id){
        return NextResponse.json(locations, {
            status: 200,   headers: {
                'Access-Control-Allow-Origin': '*',}
          });
    }
    return NextResponse.json(locations[id], {
    status: 200,   headers: {
        'Access-Control-Allow-Origin': '*',}
  });

}


