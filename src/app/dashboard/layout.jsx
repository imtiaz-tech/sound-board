"use client";

import SearchModal from "@/components/SearchModal";
import config from "@/config/config.json";
import theme from "@/config/theme.json";
import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import Providers from "@/partials/Providers";
import StoreProvider from "../storeProvider";
import "@/styles/main.scss";
import Sidebar from "../../layouts/partials/page";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <TwSizeIndicator />
      {/* <StoreProvider> */}
      {/* <Providers> */}
      {/* <SearchModal /> */}
      <Sidebar />
      <main style={{ paddingLeft: "270px" }}>{children}</main>
      {/* </Providers> */}
      {/* </StoreProvider> */}
    </div>
  );
}
