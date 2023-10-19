import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductListRoll from "./components/product-roll-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  })
  return (
    <div >
      <Image
        src="/desconto-banner-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto esse mês!"
        sizes="100vw"
        className="h-auto w-full p-5"
      />
      <div className="mt-8 p-5">
         <Categories />
      </div>
      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase" >Ofertas</p>
        <ProductListRoll products={deals}/>
      </div>
    </div>
  )
}
