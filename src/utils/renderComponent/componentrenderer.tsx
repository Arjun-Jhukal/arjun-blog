import BlogDetail from "@/components/BlogDetail";
import Quote from "@/components/Quote";
import SingleImage from "@/components/SingleImage";
import { BlogContentRecord, BlogDetailT, QuoteRecordType, SingleImageBlockRecord } from "@/interface";

export const RenderComponent = (section: BlogDetailT) => {
  switch (section.__typename) {
    case "BlogContentRecord":
      return <BlogDetail data={section as BlogContentRecord} />;
    case "SingleImageBlockRecord":
      return <SingleImage data={section as SingleImageBlockRecord} />;
    case "QuoteRecord":
      return <Quote data={section as QuoteRecordType} />;
    case "QuoteRecord":
      return <Quote data={section as QuoteRecordType} />;
  }
};
