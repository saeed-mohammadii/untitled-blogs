"use client";

import {useEffect, useState} from "react";
import Logo from "@/components/common/Logo";
import DesktopNavLink from "@/components/ui/desktopNavLink";
import MobileNavLink from "@/components/ui/mobileNavLink";
import {Button} from "@/components/ui/button";
import {Menu01, XClose} from "@untitledui/icons";
import LangSwitcher from "@/components/ui/langChanger";
import {cn} from "@/lib/utils";


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    // const { theme, setTheme } = useTheme();

    function handleOpen(){
        setIsOpen((prev) => !prev)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false); // Auto-close menu on large screens
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <header className="fixed w-full bg-[#53389E]">
                <nav className="max-w-[376px] sm:container mx-auto px-4 xl:px-8 py-2.5 xl:py-3.5">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-8">
                            <Logo/>

                            <div className="flex gap-5 hidden lg:flex">
                                <DesktopNavLink label="Products" icon/>
                                <DesktopNavLink label="Services" icon/>
                                <DesktopNavLink label="Pricing"/>
                                <DesktopNavLink label="Resources" icon/>
                                <DesktopNavLink label="About"/>
                                {/*<LangSwitcher/>*/}

                                {/*<button*/}
                                {/*    onClick={() => setTheme(theme === "light" ? "dark" : "light")}*/}
                                {/*    className="p-2 rounded-md"*/}
                                {/*>*/}
                                {/*    {theme === "light" ? (*/}
                                {/*        <Moon className="w-5 h-5 text-white"/>*/}
                                {/*    ) : (*/}
                                {/*        <Sun className="w-5 h-5 text-white"/>*/}
                                {/*    )}*/}
                                {/*</button>*/}
                            </div>
                        </div>

                        <div className="items-center gap-1.5 hidden lg:flex">
                            <Button variant="secondaryGray" size="lg">Log in</Button>
                            <Button variant="primary" size="lg">Sign up</Button>
                        </div>


                        <button onClick={handleOpen} className="p-2 rounded-md flex items-center lg:hidden z-50">
                            <Menu01 size={24} color="white"/>
                        </button>
                    </div>
                </nav>

            </header>

            <div className={cn(
                "fixed top-0 right-0 h-screen w-2/3 sm:w-1/3 bg-white",
                "transition-transform duration-200 z-50",
                "lg:hidden",
                "flex flex-col ",
                "pt-2 pr-2",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="self-end"
                >
                    <XClose size={24} className="text-black" />
                </button>
                <ul className="flex flex-col gap-1 pl-2">
                    <MobileNavLink label="Products" icon items={["Untitled UI Figma", "Untitled UI React", "Untitled UI Icons"]}/>
                    <MobileNavLink label="Services" icon items={["Untitled UI Figma", "Untitled UI React", "Untitled UI Icons"]}/>
                    <MobileNavLink label="Pricing"/>
                    <MobileNavLink label="Resources" icon items={["Untitled UI Figma", "Untitled UI React", "Untitled UI Icons"]}/>
                    <MobileNavLink label="About"/>
                    <MobileNavLink label="Login"/>
                    <MobileNavLink label="Signup"/>
                </ul>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}

export default Header
