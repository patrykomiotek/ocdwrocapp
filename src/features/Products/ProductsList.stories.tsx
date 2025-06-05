import type { Meta } from '@storybook/react-vite';
import { ProductsList } from './ProductsList';
import type { ProductId } from './types';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Components/ProductsList',
  component: ProductsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductsList>;

export default meta;

export const _ProductsList = () => {
  return (
    <MemoryRouter>
      <ProductsList
        data={[
          {
            id: '123' as ProductId,
            fields: {
              description: 'test1',
              name: 'cvb',
              price: 123,
              quantity: 1,
            },
          },
          {
            id: '456' as ProductId,
            fields: {
              description: 'test2',
              name: 'lorem ipsum',
              price: 321,
              quantity: 1,
            },
          },
        ]}
      />
    </MemoryRouter>
  );
};
