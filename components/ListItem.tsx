"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import {FaPlay} from 'react-icons/fa'
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useSubscribeModal from "@/hooks/useSubscribeModal";
interface ListItemProps{
    image:string;
    name:string;
    href:string;
}
const ListItem:React.FC<ListItemProps> = ({
    image,
    name,href
}) => {
    const router=useRouter();
    const {user,subscription}=useUser();
    const authModal=useAuthModal();
    const subscribeModal=useSubscribeModal();
    const onClick=()=>{

        if(!user){
            return authModal.onOpen();
        }
        if(!subscription){
            return subscribeModal.onOpen()
        }
        router.push(href);
    }
    return (
        <button 
        onClick={onClick}
        className="
        relative
        group
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4">
            <div className="relative min-h-[64px] min-w-[64px]">
                    <Image
                    fill
                    src={image}
                    alt='image'
                    className="object-cover"/>
            </div>
            <p className="font-medium text-white truncate py-6">{name}</p>
                <div className="
                absolute
                transition
                opacity-0
                rounded-full
                flex
                items-center
                justify-center
                bg-green-500
                p-4
                drop-shadow-md
                right-5
                group-hover:opacity-100
                hover:scale-105
                ">
                    <FaPlay/>
                </div>
        </button>
    );
}
 
export default ListItem;