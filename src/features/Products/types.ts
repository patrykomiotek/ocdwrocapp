// BrandedTypes
type Brand<K, T> = K & { __brand: T };

export type ProductId = Brand<string, 'ProductId'>;

export interface ProductDto {
  id: ProductId;
  fields: {
    name: string;
    quantity: number;
    price: number;
    description: string;
  };
}

// interface ProductsResponse {
//   records: ProductDto[];
// }

export interface ApiListResponse<T> {
  // ApiListResponse<ProductDto>
  records: T[];
}
