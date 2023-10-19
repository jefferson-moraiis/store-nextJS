"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  const {data} = useSession()
  return (
    <div className="p-5">
      <Image
        src="/desconto-banner-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto esse mês!"
        sizes="100vw"
        className="h-auto w-full"
      />
      <div className="mt-8">
         <Categories />
      </div>
    </div>
  )
}
