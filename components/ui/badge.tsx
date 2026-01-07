const badgeStyles: Record<string, string> = {
    Design: "bg-[#F9F5FF] text-[#6941C6] border-[#E9D7FE]",
    Research: "bg-[#EEF4FF] text-[#3538CD] border-[#C7D7FE]",
    Presentation: "bg-[#FDF2FA] text-[#C11574] border-[#FCCEEE]",
    Product: "bg-[#F0F9FF] text-[#6941C6] border-[#026AA2]",
    Tools: "bg-[#FDF2FA] text-[#C11574] border-[#FCCEEE]",
    SaaS: "bg-[#FDF2FA] text-[#C11574] border-[#FCCEEE]",
    // SoftwareDevelopment: "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]",
    Leadership: "bg-[#F9F5FF] text-[#6941C6] border-[#E9D7FE]",
    Management: "bg-[#F8F9FC] text-[#363F72] border-[#D5D9EB]",
    Frameworks: "bg-[#FEF6EE] text-[#B93815] border-[#F9DBAF]",
    Default: "bg-[#F9F5FF] text-[#6941C6] border-[#E9D7FE]",
    // Add more as you go...
}


export function Badge({ label }: { label: string }) {
    return (
        <div className={
            `border py-0.5 px-2.5 rounded-full text-sm font-medium ${badgeStyles[label]}`
        }>
      {label}
    </div>
    );
}
