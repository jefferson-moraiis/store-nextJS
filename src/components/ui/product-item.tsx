import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown, ArrowDownIcon } from "lucide-react";
import { formatCurrency } from "@/helpers/currencyFormat";

interface IProductItem {
  product: ProductWithTotalPrice
}

const ProductItem = ({product}:IProductItem) => {
  return ( 
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className="relative flex bg-accent rounded-lg h-[170px] w-[156px]  items-center justify-center">
        <Image 
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[70%]"
          style={{
            objectFit: "contain"
          }}
          alt={product.name}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14}/> {product.discountPercentage}%
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis w-full">
          {product.name}
        </p>
        <div className="flex items-center gap-2 ">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">{formatCurrency(product.totalPrice.toFixed(2))}</p>
              <p className="text-xs line-through opacity-75">{formatCurrency(Number(product.basePrice).toFixed(2))}</p>
            </>
          ):(
            <p className="line-through opacity-75">{formatCurrency(Number(product.basePrice).toFixed(2))}</p>
          )}
        </div>
      </div>
    </div>
   );
}
 
export default ProductItem;