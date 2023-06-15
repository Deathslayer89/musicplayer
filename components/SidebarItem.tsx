import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
interface SidebarItemProps {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  active,
}) => {
  return (
    <Link
      className={twMerge(
        `
  flex
  flex-row
  items-center
  w-full
  h-auto
  font-medium
hover:text-white
  gap-x-4
  transition
  text-neutral-400
  text-md 
  py-1

  `,
        active && "text-white"
      )}
      href={href}
    >
      <Icon size={26} /> <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
