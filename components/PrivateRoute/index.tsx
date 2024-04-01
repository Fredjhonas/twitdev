import useAuth from 'customHooks/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PrivateRoute = ({ children }) => {
  const signedIn = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!signedIn) {
      router.push('/login');
    } else {
      router.push('/');
    }
  }, [signedIn]);

  return <>{children}</>;
};

export default PrivateRoute;
