import BlogDetail from "@/components/BlogDetail";
import SingleImage from "@/components/SingleImage";
import { BlogContentRecord, BlogDetailT, SingleImageBlockRecord } from "@/interface";

export const RenderComponent = (section: BlogDetailT) => {
  switch (section.__typename) {
    case "BlogContentRecord":
      return <BlogDetail data={section as BlogContentRecord} />;
    case "SingleImageBlockRecord":
      return <SingleImage data={section as SingleImageBlockRecord} />;
  }
};
