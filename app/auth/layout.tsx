import { Suspense } from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[url('/div.svg')] opacity-100 ">

      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
};

export default AuthLayout;