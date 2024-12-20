import SearchModal from "@/components/SearchModal";
import theme from "@/config/theme.json";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import "@/styles/main.scss";

export default function RootLayout({ children }) {
  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <>
      <Header />
      <SearchModal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
