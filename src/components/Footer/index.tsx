import Link from "next/link";
import "./footer.scss";
import { getAllCategory } from "@/services/getAllCategory";
import { performRequest } from "@/services/baseQuery";

export default async function Footer() {
	const QUERY: string = getAllCategory();

	let categories: { id: string; name: string; slug: string }[] = [];
	try {
		const result = (await performRequest({
			query: QUERY,
		})) as { allCategories: { id: string; name: string; slug: string }[] };


		categories = result?.allCategories || [];
	}
	catch (e) {
		console.log("Error Server Didn't respond", e);
	}


	return (
		<footer className="footer">
			<div className="container">
				<div className="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 footer-content">
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
								{
									categories.length && categories.map((category) => (
										<li key={category.slug}>
											<Link href={`/${category.id}`}>{category.name}</Link>
										</li>

									))
								}
								{/* <li>
									<Link href={"/"}>General</Link>
								</li>
								<li>
									<Link href={"/"}>Loksewa</Link>
								</li>
								<li>
									<Link href={"/"}>Information and Technology</Link>
								</li> */}
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
								Subscribe to our newsletter for the latest updates, exclusive
								deals, and more!
							</p>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center py-6 lg:pt-8 mt-6 lg:mt-12 border-t-[1px] border-solid border-secondary">
					<p>
						&copy; {new Date().getFullYear()} AAA Inc. All Right Reserved
					</p>
					<Link href={"/privacy"}>Privacy Policy</Link>
				</div>
			</div>
		</footer>
	);
}
