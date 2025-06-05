import { useEffect, useState } from 'react';
import axios from 'axios';

import { Heading, Text } from '@/ui';
import { Link } from 'react-router-dom';
import type { ProductDto } from './types';

interface Props {
  id: string;
}

export function ProductsDetails({ id }: Props) {
  const [data, setData] = useState<ProductDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const loadData = async () => {
    try {
      const response = await axios.get<ProductDto>(
        `https://api.airtable.com/v0/appJ0votvrhmT0Sbq/products/${id}`,
        {
          headers: {
            Authorization:
              'Bearer patIue07KSSDoXBuy.715a741891404d252001aed6f98b869e913b1eaea944a1c1a649d8ea601066a2',
          },
        },
      );

      setData(response.data);

      // response.data.records[0].fields.quantity
    } catch (error) {
      // Error, throw new Mieso()
      // if (error instanceof AxiosError) {
      // }
      console.error(error); // TODO: not use in production!
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Oh no!</div>;
  }

  if (!data) {
    return <div>Product is loading...</div>;
  }

  return (
    <div>
      <div className="my-2 py-2 divide-gray-500 border-blue-400 border-b-2">
        <Heading variant="h2">
          <Link to={`/products/${data.id}`}>{data.fields.name}</Link>
        </Heading>
        <Text>
          {data.fields.description} {data.fields.price}
        </Text>
      </div>
    </div>
  );
}
