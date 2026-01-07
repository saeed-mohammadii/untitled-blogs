import {Globe} from "lucide-react";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

function LangSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    function switchTo(locale: string) {
        // remove current locale from path (if present) and prefix chosen locale
        const newPath = `/${locale}${pathname.replace(/^\/[a-z]{2}/, "")}`;
        router.push(newPath);
    }

  return (
      <div className="flex gap-1">
          <Globe size={24} color="white"/>
          <div className="flex gap-0.5">
              <button className="text-white active:text-blue-600" onClick={() => switchTo("en")}>EN</button>
              <button className="text-white active:text-blue-600" onClick={() => switchTo("fa")}>FA</button>
          </div>
      </div>
  );
}

export default LangSwitcher;