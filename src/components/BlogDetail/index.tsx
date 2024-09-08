import { BlogContentRecord } from "@/interface";
import { renderHtml } from "@/utils/renderHTML/renderHTML";
import React from "react";

export default function BlogDetail({ data }: { data: BlogContentRecord }) {
  return <div className="detail-content" dangerouslySetInnerHTML={renderHtml(data.blogContent)}></div>;
}
