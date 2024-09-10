import { QuoteRecordType } from "@/interface";
import React from "react";

export default function Quote({ data }: { data: QuoteRecordType }) {
  return (
    <div className="quote p-6 md:px-0 relative mb-4">
      <h3 className="mb-4 md:mb-8">{data.quoteText}</h3>
      {data?.quoteBy ? <em>{data.quoteBy}</em> : ""}
    </div>
  );
}
