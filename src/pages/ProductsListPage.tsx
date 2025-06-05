import { ProductsList } from '@/features/Products/ProductsList';
import { Heading } from 'ui/Heading';

export function ProductsListPage() {
  return (
    <div>
      <Heading variant="h1">Products</Heading>
      <ProductsList />
    </div>
  );
}
