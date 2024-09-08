import Image from "next/image";
import Link from "next/link";

import "./news.scss";

export default function SingleNewsBlock() {
  return (
    <div className="news__item">
      <div className="news__image relative aspect-blog-image">
        <Image src={"/placeholder-01.jpg"} alt="" fill objectFit="cover" />
      </div>
      <div className="news__content">
        <Link href={"/"} className="category">
          Frontend Development
        </Link>
        <h2>
          <Link href={"/"}>Express your creativity through amazing tattoos</Link>
        </h2>
        <p className="author">
          by <span className="text-primary font-[700]">Arjun Jhukal</span>
        </p>
        <p>
          Progressively evolve functional niches without ethical architectures. Uniquely plagiarize cost effective infomediaries vis-a-vis world-class
          process improvements. Monotonectally disseminate stand-alone results for virtual processes.{" "}
        </p>
      </div>
    </div>
  );
}
