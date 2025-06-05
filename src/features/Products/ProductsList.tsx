// import { useEffect, useState } from 'react';
// import axios from 'axios';

import { Heading, Text } from '@/ui';
import { Link } from 'react-router-dom';
// import type { ApiListResponse, ProductDto } from './types';
// import { useApi } from '@/hooks/useApi';
// import { fetchProducts } from './services';
// import { useQuery } from '@tanstack/react-query';
import type { ProductDto } from './types';
// import type { AxiosResponse } from 'axios';

interface Props {
  data: ProductDto[];
}

export function ProductsList({ data }: Props) {
  // const { data, isError, isLoading, refresh } = useApi<ApiListResponse<ProductDto>>(fetchProducts);
  // const { data, isError, isLoading, refetch } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: fetchProducts,
  // });

  // throw new Error('!!!');

  // const { data, isLoading, isError } = useApi();
  // const { data, isLoading, isError } = useApi('https://api.airtable.com/v0/appJ0votvrhmT0Sbq/products');
  // const { data, isLoading, isError } = useApi<ProductDto[]>(fetchProducts);

  // const [data, setData] = useState<ProductDto[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // const loadData = async () => {
  //   try {
  //     const response = await axios.get<ApiListResponse<ProductDto>>(
  //       'https://api.airtable.com/v0/appJ0votvrhmT0Sbq/products',
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer patIue07KSSDoXBuy.715a741891404d252001aed6f98b869e913b1eaea944a1c1a649d8ea601066a2',
  //         },
  //       },
  //     );

  //     setData(response.data.records);

  //     // response.data.records[0].fields.quantity
  //   } catch (error) {
  //     // Error, throw new Mieso()
  //     // if (error instanceof AxiosError) {
  //     // }
  //     console.error(error); // TODO: not use in production!
  //     setIsError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Oh no!</div>;
  // }

  // const products = data?.data.records;

  // if (!products) {
  //   return <div>No records!</div>;
  // }

  // throw new Error('!!!');

  return (
    <div>
      {data.map((elem) => (
        <div key={elem.id} className="my-2 py-2 divide-gray-500 border-blue-400 border-b-2">
          <Heading variant="h2">
            <Link to={`/products/${elem.id}`} className="text-blue-600">
              {elem.fields.name}
            </Link>
          </Heading>
          <Text>
            {elem.fields.description} {elem.fields.price}
          </Text>
        </div>
      ))}
    </div>
  );
}
