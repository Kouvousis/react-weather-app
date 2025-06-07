import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="container mx-auto min-h-[95vh] pt-24">{children}</div>
    </>
  );
};

export default Layout;
