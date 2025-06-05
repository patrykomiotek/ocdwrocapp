import { useQuery } from '@tanstack/react-query';

import { ProductsList } from '@/features/Products/ProductsList';
import { fetchProducts } from '@/features/Products/services';
import { Heading } from 'ui/Heading';
import { Button } from 'ui/Button';

export function ProductsListPage() {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Oh no!</div>;
  }

  const products = data?.data;

  if (!products) {
    return <div>No records!</div>;
  }

  return (
    <div>
      <Heading variant="h1">Products</Heading>
      <Button onClick={() => refetch()}>Refresh</Button>

      <ProductsList data={products.records} />
    </div>
  );
}
