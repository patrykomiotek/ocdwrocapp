import { api } from '@/services/api';
import type { ApiListResponse, ProductDto, ProductId } from './types';

export const fetchProducts = () => {
  return api.get<ApiListResponse<ProductDto[]>>('/products');
};

export const fetchProduct = (id: ProductId) => {
  return api.get<ProductDto>(`/products/${id}`);
};
