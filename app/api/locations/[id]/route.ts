import { NextRequest, NextResponse } from 'next/server';
import { locations } from '@/app/lib/locations';
export  function GET(
  req: NextRequest,
{ params }: { params: { id: string } }
) {

  const id = Number(params?.id); // Access the dynamic parameter

  if (!id) {
    return NextResponse.json(locations, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
  return NextResponse.json(locations[id], {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}
