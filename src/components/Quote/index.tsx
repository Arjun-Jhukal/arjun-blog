import { QuoteRecordType } from "@/interface";
import React from "react";

export default function Quote({ data }: { data: QuoteRecordType }) {
  return (
    // <div className="quote p-6  relative mb-4 bg-red-800 border-solid border-[1px] border-primary rounded-xl text-white mt-6">
    //   <p className="text-white">{data.quoteText}</p>
    //   {data?.quoteBy ? <em className="block mt-4 md:mt-8">{data.quoteBy}</em> : ""}
    // </div>
    <div className="quote relative mb-6 mt-10 rounded-xl border border-primary bg-highlight/10 p-6 text-highlight shadow-md">

      <p className="relative z-10 text-lg font-medium leading-relaxed">{data.quoteText}</p>
      {data?.quoteBy && (
        <em className="relative z-10 mt-4 block text-sm font-light italic text-primary md:mt-6 font-[600]">
          — {data.quoteBy}
        </em>
      )}
    </div>

  );
}
