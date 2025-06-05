import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductsListPage } from './ProductsListPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { fetchProducts } from '@/features/Products/services';
// import type { ProductId } from '@/features/Products/types';
// import type { AxiosResponse } from 'axios';
import { MemoryRouter } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';

// vi.mock('@/features/Products/services', () => ({
//   fetchProducts: vi.fn(),
// }));
vi.mock('@tanstack/react-query', () => {
  // const actual = await importOriginal();

  return {
    // ...actual,
    useQuery: vi.fn(),
  };
});

// const mockedProducts = [
//   {
//     id: '123' as ProductId,
//     fields: {
//       description: 'test1',
//       name: 'cvb',
//       price: 123,
//       quantity: 1,
//     },
//   },
//   {
//     id: '456' as ProductId,
//     fields: {
//       description: 'test2',
//       name: 'lorem ipsum',
//       price: 321,
//       quantity: 1,
//     },
//   },
// ];

const client = new QueryClient();

const WrappedProductsComponent = () => (
  <QueryClientProvider client={client}>
    <MemoryRouter>
      <ProductsListPage />
    </MemoryRouter>
  </QueryClientProvider>
);

describe('ProductListPage component', () => {
  it('should display loading indicator', () => {
    // vi.mocked(fetchProducts).mockResolvedValueOnce({
    //   data: {
    //     records: mockedProducts,
    //   },
    // } as AxiosResponse);
    // vi.mocked(useQuery).mockImplementationOnce(() => ({));
    render(<WrappedProductsComponent />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    // debug();
  });
  it('should display error indicator', async () => {
    // vi.mocked(fetchProducts).mockRejectedValue({
    //   data: {
    //     records: [],
    //   },
    // } as AxiosResponse);
    const { debug } = render(<WrappedProductsComponent />);
    debug();
    expect(await screen.findByText(/oh no!/i)).toBeInTheDocument();
  });
  it.todo('should display at least two products');

  it.todo('should display two different products after refetch');
});
