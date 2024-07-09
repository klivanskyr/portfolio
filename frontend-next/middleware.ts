import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest): NextResponse {
    console.log(request.nextUrl.pathname);
    return NextResponse.next();
}