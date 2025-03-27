import { NextRequest, NextResponse } from 'next/server';
import payload from 'payload';
import { getPayload } from '../../../payload';

// This is a catch-all API route for PayloadCMS
export async function GET(req: NextRequest) {
  const payload = await getPayload();
  const { res } = await payload.handle(req);
  return res;
}

export async function POST(req: NextRequest) {
  const payload = await getPayload();
  const { res } = await payload.handle(req);
  return res;
}

export async function PUT(req: NextRequest) {
  const payload = await getPayload();
  const { res } = await payload.handle(req);
  return res;
}

export async function DELETE(req: NextRequest) {
  const payload = await getPayload();
  const { res } = await payload.handle(req);
  return res;
}

export const dynamic = 'force-dynamic';
