import Image from "next/image";
import {ArrowUpRight} from "@untitledui/icons";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

export interface TPropsBlogCard {
    id: number;
    image: string;         // absolute path to /public/images/...
    name: string;
    date: string;          // e.g. "20 Jan 2025"
    title: string;         // heading
    description: string;   // text under heading
    badges: string[];      // e.g. ["Design", "Research", "Presentation"]
}


function Card({id, image, name, date, title, description, badges} : TPropsBlogCard) {

  return (
    <div className={cn("flex flex-col gap-5")}>
        <Image
            src={image}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-2xl"
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
              <span className="text-[#6941C6] font-semibold text-sm">{name} {date}</span>
              <div className="flex justify-between">
                  <h3 className="text-[#181D27] text-xl font-semibold">{title}</h3>
                  <ArrowUpRight size={24} color="#181D27"/>
              </div>
              <p className="text-[#535862]">{description}</p>
          </div>

          <div className="flex gap-2">
              {
                  badges.map((badge, i) => {
                      return (
                          <Badge key={i} label={badge}/>
                      )
                  })
              }
          </div>
      </div>
    </div>
  );
}

export default Card;