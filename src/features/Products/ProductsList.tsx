import { useEffect, useState } from 'react';
import axios from 'axios';

interface ProductDto {
  id: string;
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

interface ApiListResponse<T> {
  // ApiListResponse<ProductDto>
  records: T[];
}

export function ProductsList() {
  const [data, setData] = useState<ProductDto[]>([]);

  const loadData = async () => {
    try {
      const response = await axios.get<ApiListResponse<ProductDto>>(
        'https://api.airtable.com/v0/appJ0votvrhmT0Sbq/products',
        {
          headers: {
            Authorization:
              'Bearer patIue07KSSDoXBuy.715a741891404d252001aed6f98b869e913b1eaea944a1c1a649d8ea601066a2',
          },
        },
      );

      setData(response.data.records);

      // response.data.records[0].fields.quantity
    } catch (error) {
      // Error, throw new Mieso()
      // if (error instanceof AxiosError) {
      // }
      console.error(error); // TODO: not use in production!
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {data.map((elem) => (
        <div key={elem.id}>
          {elem.fields.name} - {elem.fields.description}
        </div>
      ))}
    </div>
  );
}
