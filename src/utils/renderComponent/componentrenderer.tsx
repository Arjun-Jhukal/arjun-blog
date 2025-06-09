import BlogDetail from "@/components/BlogDetail";
import YoutubeIframe from "@/components/Iframe";
import MomentGallery from "@/components/moment";
import Quote from "@/components/Quote";
import SingleImage from "@/components/SingleImage";
import { BlogContentRecord, BlogDetailT, GalleryProps, IframeRecordType, QuoteRecordType, SingleImageBlockRecord } from "@/interface";

export const RenderComponent = (section: BlogDetailT) => {
  switch (section.__typename) {
    case "BlogContentRecord":
      return <BlogDetail data={section as BlogContentRecord} />;
    case "SingleImageBlockRecord":
      return <SingleImage data={section as SingleImageBlockRecord} />;
    case "QuoteRecord":
      return <Quote data={section as QuoteRecordType} />;
    case "YoutubeIframeRecord":
      return <YoutubeIframe data={section as IframeRecordType} />;
    case "MomentGalleryRecord":
      return <MomentGallery data={section as GalleryProps} />;
  }
};
