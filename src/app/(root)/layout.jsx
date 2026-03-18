import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
