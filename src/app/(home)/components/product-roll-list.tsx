import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/product";
import { Product } from "@prisma/client";

interface IProductListRollProps {
  products: Product[];
}

const ProductListRoll = ({products}:IProductListRollProps) => {
  return ( 
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&:: -webkit-scrollbar]:hidden">
      {products.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>)}
    </div>
   );
}
 
export default ProductListRoll;