"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger} from "./ui/sheet";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

const links = [
    {name: "home", path: "/"},
    {name: "services", path: "#services"},
    {name: "resume", path: "#resume"},
    {name: "work", path: "#work"},
    {name: "contact", path: "#contact"},
]
const MobileNav = () => {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <MdMenu className="text-[32px] text-accent"/>
        </SheetTrigger>

        <SheetContent className="flex flex-col">

            {/* NAV */}
            <nav className="flex flex-col justify-center items-center gap-6 mt-28">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav