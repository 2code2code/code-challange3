import Descrip from "@/components/ui/Description/Description";
import Features from "@/components/ui/Features/Features";
import CustomerReviews from "@/components/ui/Review/Review";
import React from "react";

export default function Services() {
  return (
    <div>
      <div className="text-center bg-gradient-to-r from-amber-200 to-yellow-400">
        <h1 className="text-black font-extrabold text-4xl p-10">Services</h1>
      </div>
      <Descrip />
      <Features />
      <CustomerReviews />
    </div>
  );
}
