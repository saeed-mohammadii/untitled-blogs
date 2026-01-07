import Image from "next/image";

function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Image
                src="/images/logo.svg"
                alt="logo"
                width={32}
                height={32}
                className="rounded-md"
                priority
            />

            <h1 className="text-lg font-bold text-white whitespace-nowrap xl:text-xl">
                Untitled UI
            </h1>
        </div>
    );
}


export default Logo;