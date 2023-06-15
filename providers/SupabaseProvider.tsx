"use client";

import { useState } from "react";
import { Database } from "@/types_db";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
interface SupabaseProviderProps{
    children:React.ReactNode
}
const SupabaseProvider:React.FC<SupabaseProviderProps> = ({children}) => {
const [SupabaseClient]=useState((()=>createClientComponentClient<Database>()))
return(
    <SessionContextProvider supabaseClient={SupabaseClient}>
        {children}
    </SessionContextProvider>
)
}
 
export default SupabaseProvider;