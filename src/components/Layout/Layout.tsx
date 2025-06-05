import { Outlet } from 'react-router-dom';

// import { ErrorBoundary } from '../ErrorBoundary';
import { Footer } from './Footer';
import { Menu } from './Menu';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
// import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export const Layout = () => {
  return (
    // <ErrorBoundary>
    <div className="container mx-auto">
      <Menu />
      {/* <div className="my-4">
        <Link
          to={Route.CREATE_PRODUCT.path}
          className="dark:text-slate-300 text-blue-500 underline hover:no-underline"
        >
          Create Product
        </Link>
      </div> */}
      {/* <ErrorBoundary fallback={<p>Another component!</p>}> */}
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
    // </ErrorBoundary>
  );
};
