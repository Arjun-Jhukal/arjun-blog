import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="container">
                <div className="content-wrapper text-center lg:max-w-[60%] mx-auto">
                    <h1 className="text-[150px] leading-[1]">404</h1>
                    <div className="flex flex-col gap-2">
                        <h2>Page Not Found</h2>
                        <p>The page you are trying to access is either deleted or moved to new url.</p>
                        <Link href={"/"} className="category">Back to Home</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
