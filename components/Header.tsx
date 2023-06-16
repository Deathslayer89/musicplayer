"use client";
import{toast} from 'react-hot-toast'
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const {user}=useUser();
  const authModal=useAuthModal();
  const supabaseClient=useSupabaseClient();
  const handleLogout =async () => {
    const {error}=await supabaseClient.auth.signOut();
    router.refresh();
    if(error){
      toast.error(error.message);
    }
  };
  return (
    <div
      className={twMerge(
        `
    h-fit
    bg-gradient-to-b
    from-emerald-800
    p-6`,
        className
      )}
    >
      <div className="wfull mb-4 flex items-center justify-between">
        <div className="hidden items-center md:flex gap-x-2">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black items-center justify-center hover:opacity-75"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black items-center justify-center hover:opacity-75"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button onClick={()=>router.push('/')} className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75">
            <HiHome size={20} className="text-black" />
          </button>
          <button onClick={()=>router.push('/search')} className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        
        <div className="flex justify-between items-center gap-x-4">
          {user?(
            <div className="flex gap-x-4 items-center">
             <Button onClick={handleLogout}
             className='bg-white px-6 py-2'>
             Logout
             </Button>
            </div>
          ):(
            <>
            <div>
            <Button onClick={authModal.onOpen} className="bg-transparent text-neutral-300 font-medium">
              Sign up
            </Button>
            
            </div>
            <div>
            <Button onClick={authModal.onOpen} className="bg-white px-6 py-2">
              Login
            </Button>
            
            </div>
          </>
          )}
          
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
