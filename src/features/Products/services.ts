import { api } from '@/services/api';
import type { ApiListResponse, ProductDto, ProductId } from './types';
// import { AxiosError } from 'axios';

export const fetchProducts = () => {
  return api.get<ApiListResponse<ProductDto>>('/products');
  //
  // try {
  //   const result = await api.get<ApiListResponse<ProductDto>>('/products');
  // } catch (error) {
  //   if (error instanceof AxiosError) {
  //     error.code
  //   }
  // }

  // {
  //   success: boolean,
  //   data: ?
  //   errorMessage?:
  // }

  // return api.get<ApiListResponse<ProductDto>>('/products');
};

export const fetchProduct = (id: ProductId) => {
  return api.get<ProductDto>(`/products/${id}`);
};
