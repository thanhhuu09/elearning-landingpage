import React from "react";
import { quotationMark } from "../assets/";

const FeedbackCard = ({ avatar }) => {
  return (
    <div className="m-4 mt-0 rounded-3xl border bg-white p-8 drop-shadow-lg md:m-6">
      <div className="relative flex items-center gap-3">
        <img className="h-16 w-16 rounded-full" src={avatar} alt="Customer" />
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
      <div className="mt-6 text-left font-normal leading-6 text-gray-700">
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
