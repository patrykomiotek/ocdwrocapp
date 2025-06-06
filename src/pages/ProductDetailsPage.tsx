// import { ProductsList } from '@/features/Products/ProductsList';
import { Heading } from 'ui/Heading';
import { useParams } from 'react-router-dom';
import { ProductsDetails } from '@/features/Products/ProductDetails';
import type { ProductId } from '@/features/Products/types';

type RouterParams = {
  id: string;
};

export function ProductDetailsPage() {
  const params = useParams<RouterParams>();
  console.log({ params });
  return (
    <div>
      <Heading variant="h1">Test</Heading>
      {params.id && <ProductsDetails id={params.id as ProductId} />}
    </div>
  );
}
