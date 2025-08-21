import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
    return (
        <>
            <section className="about__banner pt-16">
                <div className="container">
                    <div className="section__title mb-6 lg:mb-12">
                        <h1>Yatra With Jhukal</h1>
                        <p className='mt-4'>Exploring hidden trails, breathtaking landscapes, and cultural gems – join me on adventures that inspire and connect.</p>
                    </div>
                </div>
                <div className="about__banner-image aspect-video relative  w-100">
                    <Image src={"/placeholder-01.jpg"} alt='About Yatra with Jhukal' className='object-cover w-100 h-100' fill />
                </div>
            </section>

            <section className="bg-gray-200 py-16 lg:py-[120px] mb-16 lg:mb-[120px]">
                <div className="container">
                    <div className="section-title mb-8 lg:mb-12">
                        <h2>Our Products</h2>
                    </div>
                    <div className="sm:grid sm:grid-cols-2 gap-x-4 gap-y-12">
                        <div className="col-span-1">
                            <div className="comapany-card">
                                <div className="company-image relative aspect-square">
                                    <Image src={"/placeholder-01.jpg"} alt='About Yatra with Jhukal' className='object-cover w-100 h-100' fill />
                                </div>
                                <div className="company-detail mt-4">
                                    <Link href="#" className='hover:text-primary font-bold text-3xl text-black d-block mb-4'>Education Management System</Link>
                                    <p>A smart platform to manage institutional records, courses, and administration efficiently.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="comapany-card">
                                <div className="company-image relative aspect-square">
                                    <Image src={"/placeholder-01.jpg"} alt='About Yatra with Jhukal' className='object-cover w-100 h-100' fill />
                                </div>
                                <div className="company-detail mt-4">
                                    <Link href="#" className='hover:text-primary font-bold text-3xl text-black d-block mb-4'>Online Store</Link>
                                    <p>A smart platform to manage institutional records, courses, and administration efficiently.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="comapany-card">
                                <div className="company-image relative aspect-square">
                                    <Image src={"/placeholder-01.jpg"} alt='About Yatra with Jhukal' className='object-cover w-100 h-100' fill />
                                </div>
                                <div className="company-detail mt-4">
                                    <Link href="#" className='hover:text-primary font-bold text-3xl text-black d-block mb-4'>Travel Management System</Link>
                                    <p>A smart platform to manage institutional records, courses, and administration efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16 lg:mb-[120px]">
                <div className="container">
                    <div className="section-title mb-8 mb-lg-12 text-center">
                        <span className="over-title text-uppercase">Testimonial</span>
                        <h2 className='mt-4'>What People Are Saying</h2>
                    </div>

                    <div className="testimonial-slider-wrapper">
                        <div className="testimonial-slider">
                            <div className="testimonial-card">
                                <div className="testimonial-image relative aspect-video rounded-lg overflow-hidden">
                                    <Image src={"/placeholder-01.jpg"} alt='About Yatra with Jhukal' className='object-cover w-100 h-100' fill />
                                </div>
                                <div className="testimonial-content text-center">
                                    <p className='my-6'>
                                        “An amazing experience! Yatra with Jhukal helped me explore breathtaking trails and discover hidden gems I never knew existed.”
                                    </p>
                                    <div className="reviewer-info flex justify-center items-center gap-3">
                                        <Image src={"/placeholder-01.jpg"} alt='About Yatra with Jhukal' width={48} height={48} className='aspect-square rounded-full object-cover' />
                                        <strong>- Arjun Jhukal</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
