import Link from "next/link";
import "./footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
					<div className="col-span-1">
						<div className="footer-link">
							<h3>Quick Links</h3>
							<ul>
								<li>
									<Link href={"/"}>Home</Link>
								</li>
								<li>
									<Link href={"/"}>About</Link>
								</li>
								<li>
									<Link href={"/"}>Contact</Link>
								</li>
								<li>
									<Link href={"/"}>Career</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-span-1">
						<div className="footer-link">
							<h3>Category</h3>
							<ul>
								<li>
									<Link href={"/"}>Nepal Permier League</Link>
								</li>
								<li>
									<Link href={"/"}>General</Link>
								</li>
								<li>
									<Link href={"/"}>Loksewa</Link>
								</li>
								<li>
									<Link href={"/"}>Information and Technology</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-span-1">
						<div className="subscriptions">
							<h3>Subscribe to Our News Letter</h3>

							<form className="subscription-form">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="your-email@gmail.com"
								/>
								<button type="submit" className="category">
									Submit
								</button>
							</form>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
								modi.
							</p>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center py-6 lg:pt-8 mt-6 lg:mt-12 border-t-[1px] border-solid border-secondary">
					<p>
						&copy; {new Date().getFullYear()} Arjun Jhukal. All Right Reserved
					</p>
					<Link href={"/"}>Privacy Policy</Link>
				</div>
			</div>
		</footer>
	);
}