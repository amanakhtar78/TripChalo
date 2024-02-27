import React from "react";
import TripOverView from "./TripOverView";
import FooterTripPlan from "../components/FooterNavigate/FooterTripPlan";
const TripPlan = () => {
  return (
    <div className="bg-slate-50">
      <TripOverView />
      <section className="fixed bottom-0 w-[100%]">
        <FooterTripPlan />
      </section>
    </div>
  );
};

export default TripPlan;
