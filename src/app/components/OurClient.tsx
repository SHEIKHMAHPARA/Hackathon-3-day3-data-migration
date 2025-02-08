// Our Cient
import Image from "next/image";
import React from "react";
export interface OurClientProps {
    showText?: boolean;
    title?: string;
    description?: string;
    companies?: Company[];
  }
  export interface Company {
    name: string;
    url: string;
  }
  export const defaultCompanies: Company[] = [
    { name: "Hooli", url: "/fa-brands-1.png" },
    { name: "Lyft", url: "/fa-brands-2.png" },
    { name: "Feather", url: "/fa-brands-3.png" },
    { name: "Stripe", url: "/fa-brands-4.png" },
    { name: "AWS", url: "/fa-brands-5.png" },
    { name: "Reddit", url: "/fa-brands-6.png" },
  ];



function OurClient({
  showText = true,
  title = "Big Companies Are Here",
  description = "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
  companies = defaultCompanies
}: OurClientProps) {
  return (
    <section className="w-auto container py-8 sm:py-12 md:py-16 lg:py-20 bg-[#FAFAFA] xl:max-w-screen-2xl xl:mx-auto">
    <div className="container px-4 md:px-6 mx-auto">
      {showText && (
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <h2 className="text-[40px] leading-[50px] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#252B42]">
            {title}
          </h2>
          <p className="mx-auto max-w-[700px] text-sm font-normal sm:text-base md:text-lg lg:text-xl text-[#737373]">
            {description}
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center ">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center"
          >
            <Image
              src={company.url}
              alt= "/"
              width={100}
              height={40}
              className="max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] h-auto  opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default OurClient;
