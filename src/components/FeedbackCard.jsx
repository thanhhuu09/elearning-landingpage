import React from "react";
import { quotationMark } from "../assets/";

const FeedbackCard = ({ avatar }) => {
  return (
    <div className="border bg-white drop-shadow-lg p-8 rounded-3xl m-3 md:m-6 mt-0">
      <div className="flex items-center gap-3 relative">
        <img className="rounded-full h-16 w-16" src={avatar} alt="Customer" />
        <div className="w-full">
          <h2 className="text-2xl font-medium">Jenny Wilson</h2>
          <p className="text-base">UI-UX Designer</p>
        </div>
        <img
          className="absolute right-0 top-0 h-8"
          src={quotationMark}
          alt="Quotation Mark"
        />
      </div>
      <div className="mt-6 font-normal text-left leading-6 text-gray-700">
        <p>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
          Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
          nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
        </p>
        <br />
        <p>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
          Nam sed imperdiet turpis. In hac habitasse platea dictumst.
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
