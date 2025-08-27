import React from 'react'

export default function ReviewForm() {
    return (
        <section className="reviews">
            <div className="container">
                <div className="section-title">
                    <h2>Comments</h2>
                </div>

                <div className="lg:grid lg:grid-cols-4">
                    <div className="col-span-3">

                    </div>
                    <div className="col-span-1">
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
                            <label htmlFor="message" className='capitalize'>message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Message"
                            />
                        </div>
                        <div className="input__field">
                            <label htmlFor="message" className='capitalize'>message</label>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
