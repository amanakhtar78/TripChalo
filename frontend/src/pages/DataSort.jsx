import React from "react";
import FilterPlaces from "../components/FilterPlaces/FilterPlaces";
import FooterFilter from "../components/FooterNavigate/FooterFilter";
const DataSort = () => {
  return (
    <div className="bg-slate-50">
      <FilterPlaces />
      <section className="fixed bottom-0 w-[100%]">
        <FooterFilter />
      </section>
    </div>
  );
};

export default DataSort;
