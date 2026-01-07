import Link from "next/link";
import {ChevronDown} from "@untitledui/icons";
import {useTranslations} from "next-intl";


interface TProps {
    label: string;
    icon?: boolean;
}
function DesktopNavLink({label, icon: Icon}: TProps) {

    return (
        <li className="flex md:flex-row-reverse items-center gap-1">
            {Icon && <ChevronDown size={20} color="white"/>}

            <Link className="no-underline text-white" href="/">
                {label}
            </Link>
        </li>
    );
}

export default DesktopNavLink;