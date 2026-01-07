import {ChevronDown} from "@untitledui/icons";
import Link from "next/link";
import {useState} from "react";
import {cn} from "@/lib/utils";

interface TProps {
    label: string;
    icon?: boolean;
    items?: string[];
}

function MobileNavLink({label, icon: Icon, items}: TProps) {
    const [isOpen, setIsOpen] = useState(false);

    if (!items || items.length === 0) {
        return (
            <li className="flex items-center gap-1">
                <Link className="no-underline text-[#181D27] font-semibold" href="/">
                    {label}
                </Link>
            </li>
        );
    }
    return (
        <>
            <li className="flex items-center gap-1" onClick={() => setIsOpen((prev) => !prev)}>
                <Link className="no-underline text-[#181D27] font-semibold" href="/">
                    {label}
                </Link>
                {Icon && <ChevronDown size={20} color="#535862" className={cn(isOpen ? "-rotate-180" : "rotate-0", "transition-transform duration-100")} />}
            </li>

            {isOpen && <ul className="flex flex-col gap-1">
                {
                    items?.map((item, i) => (
                        <li key={i}>
                            <Link href="/" className="text-[#181D27]">{item}</Link>
                        </li>
                    ))
                }
            </ul>}
        </>
    );
}

export default MobileNavLink;