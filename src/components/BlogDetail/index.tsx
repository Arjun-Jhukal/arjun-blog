import { BlogContentRecord } from "@/interface";
import { renderHtml } from "@/utils/renderHTML/renderHTML";
import React from "react";
import InArticle from "../ads/InArticle";

export default function BlogDetail({ data }: { data: BlogContentRecord }) {
  return <>
    <div className="detail-content" dangerouslySetInnerHTML={renderHtml(data.blogContent)}></div>;
    <InArticle />
  </>
}
