import BlogDetail from "@/components/BlogDetail";
import Faq from "@/components/Faq";
import YoutubeIframe from "@/components/Iframe";
import LikhitExamSelectionBlock from "@/components/LikhitExam";
import MomentGallery from "@/components/moment";
import NplPointsTable from "@/components/NplPointsTable";
import InnerPageBanner from "@/components/organism/pageBanner";
import Quote from "@/components/Quote";
import NplTeamList from "@/components/Sections/NplTeamList";
import SingleImage from "@/components/SingleImage";
import { BlogContentRecord, BlogDetailT, FaqProps, GalleryProps, IframeRecordType, NPLPointsTableProps, NplTeamControllerProps, PageBannerProps, QuoteRecordType, SingleImageBlockRecord } from "@/interface";

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
    case "FaqRecord":
      return <Faq data={section as FaqProps} />;
    case "PageBannerRecord":
      return <InnerPageBanner data={section as PageBannerProps} />;
    case "NplPointsTableRecord":
      return <NplPointsTable data={section as NPLPointsTableProps} />;
    case "NplTeamVisibilityControllerRecord":
      return <NplTeamList data={section as NplTeamControllerProps} />;
    case "ToggleQuestionVisibilityRecord":
      return <LikhitExamSelectionBlock />;
  }
};
