"use client";

import NavBar from "@/app/components/layout/NavBar";
import Footer from "@/app/components/layout/Footer";
import "../(landing)/team/style.css";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="white">
        <NavBar />
        <div className="relative isolate pt-20">{children}</div>
        <Footer />
      </div>
    </>
  );
}
