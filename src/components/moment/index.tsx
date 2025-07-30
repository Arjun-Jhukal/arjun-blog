'use client';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgFullscreen from 'lightgallery/plugins/fullscreen';
import Image from 'next/image';
import { GalleryProps } from '@/interface';



export default function MomentGallery({ data }: { data: GalleryProps }) {
    return (
        <LightGallery
            speed={500}
            plugins={[lgThumbnail]}
            selector="a"
            download={false}

        >
            <div className="grid grid-cols-3 gap-2 mt-6">
                {data?.galleryImage.map((img, i) => (
                    <a
                        key={i}
                        href={img.url}
                        data-src={img.url} // ✅ important
                        className="relative aspect-square w-full"
                    >
                        <Image
                            src={img.url}
                            alt={img?.alt || ""}
                            fill
                            className="object-cover"
                        />
                    </a>
                ))}
            </div>
        </LightGallery>


    );
}
