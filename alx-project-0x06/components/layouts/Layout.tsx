"use client";

import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "../../interface";

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
