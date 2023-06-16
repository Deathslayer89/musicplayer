import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest,NextResponse } from "next/server";
const middleware =async (req:NextRequest) => {
    const res=NextResponse.next();
    const supbase=createMiddlewareClient({req,res});
    await supbase.auth.getSession();
    return res;

}
 
export default middleware;