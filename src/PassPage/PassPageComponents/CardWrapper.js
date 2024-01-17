import React from "react";
import Card from "./Card";
import "./CardWrapper.css";
import twlogo from "./tw.jpg";

export default function CardWrapper() {
  return (
    <div className="card-wrapper">
      <Card
        title="Online Passes"
        description="Visit Ticketwala to get your passes now"
        action="Visit Ticketwala"
        link="https://ticketwala.pk/event/iba-con"
        img={twlogo}
      />
      <Card
        title="Physical Passes"
        description="Visit our brand ambassodors to get your passes now"
        action="Find a brand ambassodor"
        link="#screen2"
        img={twlogo}
      />
    </div>
  );
}
