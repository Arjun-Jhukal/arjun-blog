import { PageBannerProps } from '@/interface'
import Image from 'next/image';
import React from 'react'
import "./pageBanner.scss";
export default function InnerPageBanner({ data }: { data: PageBannerProps }) {
  const { pageBannerSubTitle, pageBannerTitle, pageBannerBrief, pageBannerImage } = data;
  return (
    <section className="page-banner relative py-[64px] lg:py-[80px] flex justify-center items-center min-h-[70vh]">
      <Image src={pageBannerImage.url} alt={pageBannerImage.alt} fill className='object-cover z-[-1]' priority />
      <div className="container">
        <div className="page-banner-content lg:max-w-[50vw]">
          {pageBannerSubTitle ? <span className="over-title inline-block bg-gray-50 rounded-[24px] py-1 px-5 font-[600] mb-4">{pageBannerSubTitle}</span> : ""}
          {pageBannerTitle ? <h1 className='text-white mb-5'>{pageBannerTitle}</h1> : ""}
          {pageBannerBrief ? <p className='text-white'>{pageBannerBrief}</p> : ""}
        </div>
      </div>
    </section>
  )
}
