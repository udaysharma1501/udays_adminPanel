const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      {children} {/* uses the page.tsx from app/auth/page */}
    </div>
  );
};

export default AuthLayout;
