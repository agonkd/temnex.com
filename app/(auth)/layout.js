"use client";

import Banner from "@/app/_components/utils/Banner";
import Button from "@/app/_components/utils/Button";
import { GoArrowUpRight } from "react-icons/go";

export default function AuthLayout({ children }) {
  return (
    <main className="px-8 py-4 md:px-16 md:py-8 lg:px-20 lg:py-10 space-y-8">
      <Banner
        title="WORK YOUR WAY"
        subtitle="Give your visitor a smooth online experience with a solid UX design."
        backgroundImage="/images/Background.png"
      >
        <Button onClick={() => console.log("Button was clicked!")}>
          Become Seller
          <GoArrowUpRight className="text-2xl" />
        </Button>
      </Banner>
      {children}
    </main>
  );
}
