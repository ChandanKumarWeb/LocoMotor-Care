import React from "react";
import Banner from "../Components/Banner";
import homebg from "../../../public/Images/homebg.jpeg";
import ServiceBanner from "../../../public/Images/Banner Images/ServiceBanner.jpg";

function Services() {
  return (
    <div>
      <Banner
        pageName={"Services We Offer"}
        pageNavigation1="Home"
        pageNavigation2="Services"
        src={ServiceBanner}
        alt="Services Banner"
      />
    </div>
  );
}

export default Services;
  