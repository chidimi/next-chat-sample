import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  );
};
