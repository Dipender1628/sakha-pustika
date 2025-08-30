"use client";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { HomeSection } from "@/components/sections/home";
import { VivekanandaSection } from "@/components/sections/vivekananda";
import { SubhashitaSection } from "@/components/sections/subhashita";
import { AmritVachanSection } from "@/components/sections/amrit-vachan";
import { GeetSection } from "@/components/sections/geet";
import { PrerakPrasangSection } from "@/components/sections/prerak-prasang";
import { CharchaSection } from "@/components/sections/charcha";
import { PanchParivartan } from "@/components/sections/panch-parivartan";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection setActiveSection={setActiveSection} />;
      case "vivekananda":
        return <VivekanandaSection />;
      case "subhashita":
        return <SubhashitaSection />;
      case "amrit-vachan":
        return <AmritVachanSection />;
      case "geet":
        return <GeetSection />;
      case "prerak-prasang":
        return <PrerakPrasangSection />;
      case "charcha":
        return <CharchaSection />;
      case "panch-parivartan":
        return <PanchParivartan />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <div className="main min-h-screen bg-gray-50">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="">{renderSection()}</main>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-center w-full mt-[50px] text-5xl font-bold md:text-7xl bg-orange-600 py-5 text-transparent bg-clip-text">
          "वंदे मातरम्"
        </h1>
      </div>
      <footer className="bg-orange-600 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold">शाखा पुस्तिका</p>
          <p className="text-orange-100">प्रीमियर संस्थान, हरियाणा प्रांत</p>
          <p className="text-sm text-orange-200 mt-2">
            © 2025 सभी अधिकार सुरक्षित
          </p>
        </div>
      </footer>
    </div>
  );
}
