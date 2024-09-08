import { SingleImageBlockRecord } from "@/interface";
import Image from "next/image";
import React from "react";

export default function SingleImage({ data }: { data: SingleImageBlockRecord }) {
  return (
    <div className="image-block relative aspect-video mb-4 md:mb-8">
      <Image src={"/placeholder-01.jpg"} alt="" fill objectFit="cover" />
    </div>
  );
}
