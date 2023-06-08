import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <li
      className={twMerge(
        `flex flex-row h-auto items-center w-fulltext-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      <Link href={href} className={"flex flex-row items-center gap-x-4"}>
        <Icon size={30} />
        <p className="truncate w-full">{label}</p>
      </Link>
    </li>
  );
};

export default SidebarItem;
