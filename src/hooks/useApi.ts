// const { data, isLoading, isError } = useApi<ProductDto[]>(fetchProducts);
import { useState, useEffect, useCallback } from 'react';
import type { AxiosResponse } from 'axios';

// export const useApi = <T>(fetcher: () => Promise<AxiosResponse<T>>) => {
// eslint-disable-next-line
export const useApi = <T>(fetcher: Function) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const loadData = useCallback(async () => {
    try {
      const response: AxiosResponse<T> = await fetcher();
      setData(response.data);

      // const sth = await fn(response)

      // response.then((response) => {
      //   return another().then()
      // })
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    loadData();
  }, []);

  const refetch = () => {
    loadData();
  };

  return { data, isLoading, isError, refetch };
};
