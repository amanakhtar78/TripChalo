import React, { useEffect } from "react";
import "./scroll.css";

const Scroll = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // Function to add animation
    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    // Check if the user hasn't opted in for reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="">
      <h1 style={{ textAlign: "center" }}></h1>

      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>Agra</li>
          <li>Jaipur</li>
          <li>Varanasi</li>
          <li>Goa</li>
          <li>Kerala (Backwaters)</li>
          <li>Leh-Ladakh</li>
          <li>Udaipur</li>
          <li>Rajasthan (Desert)</li>
          <li>Darjeeling</li>
          <li>Hampi</li>
        </ul>
      </div>
    </div>
  );
};

export default Scroll;
