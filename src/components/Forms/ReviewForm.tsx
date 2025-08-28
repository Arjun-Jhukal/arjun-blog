import React from 'react'

export default function ReviewForm() {
    return (
        <section className="reviews mb-[80px] md:mb-[120px]">
            <div className="container">
                <div className="section-title flex justify-between items-center mb-8">
                    <h2>Review</h2>
                    <button type="button" className="bg-primary py-3 px-8 text-white w-auto">Write a Review</button>
                </div>

                {/* <div className="review-form lg:max-w-[50%]">
                    <div className="input__field">
                        <label htmlFor="name" className='capitalize'>name</label>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Ex. Arjun Jhukal"
                        />
                    </div>
                    <div className="input__field">
                        <label htmlFor="email" className='capitalize'>email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="your-email@gmail.com"
                        />
                    </div>
                    <div className="input__field">
                        <label htmlFor="message" className='capitalize'>message <span className='text-[12px]'>(200 character max)</span></label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                        />
                    </div>
                    <div className="input__field">
                        <button className='bg-primary py-2 px-8 text-white'>Submit</button>
                    </div>
                </div> */}

                <div className="reviews md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        Array.from({ length: 3 }).map((_, index) => (
                            <div className="review-card col-span-1 shadow-lg p-4 rounded-[16px]" key={index + 1}>
                                <div className="review-message">
                                    <p>The Panch Pokhari Trek offers stunning mountain views, serene alpine lakes, and a peaceful off-the-beaten-path experience. Perfect for trekkers seeking nature, culture, and solitude in one journey.</p>
                                </div>
                                <div className="reviewer-detail mt-4 flex items-center gap-4">
                                    <div className="reviewer-profile w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white font-[600]">
                                        <span>AJ</span>
                                    </div>
                                    <div className="reviewer-info">
                                        <strong>Arjun Jhukal</strong>
                                        <ul>
                                            <li>star</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
