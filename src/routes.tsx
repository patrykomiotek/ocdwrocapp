import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';

import { RegistrationFormStatePage } from '@/pages/RegistrationFormStatePage';
import { RegistrationFormRefsPage } from '@/pages/RegistrationFormRefsPage';
import { RegistrationFormRHFPage } from '@/pages/RegistrationFormRHFPage';
import { ViewportPage } from '@/pages/ViewportPage';
import { CounterPage } from '@/pages/ConterPage';
import { GeneratorPage } from '@/pages/GeneratorPage';
import { ProductsListPage } from '@/pages/ProductsListPage';
import { ProductDetailsPage } from '@/pages/ProductDetailsPage';
import { Stepper } from './components/Stepper';

type Route = Record<
  string,
  {
    path: string;
    title: string;
    dynamicPath?: (id: string) => string;
  }
>;

export const Route: Route = {
  HOME: {
    path: '/',
    title: 'Home',
  },
  PRODUCTS_LIST: {
    path: '/products',
    title: 'Products',
  },
  PRODUCTS_DETAILS: {
    path: '/products/:id',
    title: 'Products details',
    dynamicPath: (id: string) => `/products/${id}`,
  },
  CREATE_PRODUCT: {
    path: '/products/create',
    title: 'Create product',
  },
  CATEGORIES_LIST: {
    path: '/categories',
    title: 'Categories',
  },
  // ORDER_SUMMARY: {
  //   path: '/order-summary',
  //   title: 'Order Summary',
  // },
  GENERATOR: {
    path: '/generator',
    title: 'Generator',
  },
  STEPPER: {
    path: '/stepper',
    title: 'Stepper',
  },
  // AUTH: {
  //   path: '/auth',
  //   title: 'Auth',
  // },
  REGISTRATION_FORM_STATE: {
    path: '/registration-form-state',
    title: 'Registration form state',
  },
  REGISTRATION_FORM_REFS: {
    path: '/registration-form-refs',
    title: 'Registration form refs',
  },
  REGISTRATION_FORM_RHF: {
    path: '/registration-form-rhf',
    title: 'Registration form rhf',
  },
  COUNTER: {
    path: '/counter',
    title: 'Counter',
  },
  VIEWPORT: {
    path: '/viewport',
    title: 'View Port',
  },
} as const;

export const router = createBrowserRouter([
  {
    path: Route.HOME.path, // "/""
    element: <Layout />,
    children: [
      {
        path: Route.HOME.path,
        element: <HomePage />,
      },
      {
        path: Route.PRODUCTS_LIST.path,
        element: <ProductsListPage />,
      },
      // {
      //   path: Route.CATEGORIES_LIST.path,
      //   element: <CategoriesListPage />,
      // },
      {
        path: Route.PRODUCTS_DETAILS.path,
        element: <ProductDetailsPage />,
      },
      // {
      //   path: Route.CREATE_PRODUCT.path,
      //   element: <CreateProductPage />,
      // },
      {
        path: Route.GENERATOR.path,
        element: <GeneratorPage />,
      },
      {
        path: Route.STEPPER.path,
        element: <Stepper />,
      },
      // {
      //   path: Route.AUTH.path,
      //   element: <AuthPage />,
      // },
      {
        path: Route.REGISTRATION_FORM_STATE.path,
        element: <RegistrationFormStatePage />,
      },
      {
        path: Route.REGISTRATION_FORM_REFS.path,
        element: <RegistrationFormRefsPage />,
      },
      {
        path: Route.REGISTRATION_FORM_RHF.path,
        element: <RegistrationFormRHFPage />,
      },
      {
        path: Route.COUNTER.path, // "/counter"
        element: <CounterPage />,
      },
      {
        path: Route.VIEWPORT.path,
        element: <ViewportPage />,
      },
      // {
      //   path: Route.MAGIC_BUTTON.path,
      //   element: <MagicButtonPage />,
      // },
      // {
      //   path: Route.ORDER_SUMMARY.path,
      //   element: <OrderSummaryPage />,
      // },
    ],
  },
]);
