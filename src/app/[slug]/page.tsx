import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./detail.scss";
import SingleNewsBlock from "../components/News";

export default function DetailPage() {
  return (
    <>
      <section className="news__detail my-[80px] md:my-[120px] ">
        <div className="container">
          <div className="section-title lg:text-center max-w-[736px] mx-auto mb-4 md:mb-8">
            <Link href={"#"} className="category mb-2">
              Motivation
            </Link>
            <h1 className="mb-2 md:mb-3">It’s ok to work in a bar while getting a degree</h1>
            <p className="text-ternary text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] "> - 2 Weeks ago</p>
          </div>

          <div className="featured__image relative aspect-blog-image mb-4 md:mb-8">
            <Image src={"/placeholder-01.jpg"} alt="" fill objectFit="cover" />
          </div>

          <div className="detail__content__box max-w-[540px] mx-auto">
            <div className="author-block flex justify-start items-center mb-3 gap-4">
              <div className="author-profile relative w-[50px] h-[50px] rounded-[50%] overflow-hidden ">
                <Image src={"/placeholder-01.jpg"} alt="" fill objectFit="cover" />
              </div>
              <div className="author-info">
                <span className="text-[12px] leading-[16px] block text-ternary">Written by</span>
                <Link href={"#"} className="text-primary font-[900]">
                  Arjun Jhukal
                </Link>
              </div>
            </div>

            <div className="detail-content">
              <p>
                Progressively evolve functional niches without ethical architectures. Uniquely plagiarize cost effective infomediaries vis-a-vis
                world-class process improvements. Monotonectally disseminate stand-alone results for virtual processes. Competently evolve flexible
                processes before user-centric innovation. Professionally harness clicks-and-mortar platforms before pandemic collaboration and
                idea-sharing.
              </p>
              <p>
                Holisticly disintermediate cross-unit models with proactive platforms. Holisticly utilize{" "}
                <Link href={"#"}>error-free action items</Link> vis-a-vis viral internal or “organic” sources. Interactively impact interdependent
                e-services through premier ROI. Proactively e-enable compelling e-commerce via turnkey initiatives. Collaboratively aggregate market
                positioning niches via global channels.
              </p>
              <h2>Unleash your creativity</h2>
              <p>
                Quickly facilitate intuitive vortals vis-a-vis client-centric innovation. Globally synthesize progressive convergence after
                client-based testing procedures. Efficiently enhance user friendly schemas via sticky total linkage. Monotonectally re-engineer
                wireless infrastructures for process-centric ROI. Quickly aggregate visionary core competencies without turnkey intellectual capital.
              </p>
            </div>

            <div className="image-block relative aspect-video mb-4 md:mb-8">
              <Image src={"/placeholder-01.jpg"} alt="" fill objectFit="cover" />
            </div>

            <div className="detail-content">
              <p>
                Quickly drive wireless content after next-generation core competencies. Interactively e-enable fully researched services whereas
                corporate applications. Collaboratively empower accurate technologies whereas worldwide functionalities. Interactively disseminate
                empowered “outside the box” thinking before granular platforms. Competently syndicate quality architectures vis-a-vis.
              </p>

              <h2>Blocks are amazing!</h2>
              <p>
                Progressively administrate multimedia based convergence vis-a-vis resource maximizing web-readiness. Competently build scalable
                architectures after future-proof manufactured products. Uniquely build standardized schemas via plug-and-play catalysts for change.
                Authoritatively integrate adaptive.
              </p>
            </div>

            <div className="quote p-6 md:px-0 relative mb-4">
              <h3 className="mb-4 md:mb-8">
                You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like
                it’s heaven on earth.
              </h3>
              <em>Arjun Jhukal</em>
            </div>
            <div className="detail-content">
              <p>
                Dramatically monetize bleeding-edge architectures with user friendly content. Distinctively aggregate timely convergence after
                holistic opportunities. Enthusiastically disseminate exceptional e-tailers for strategic supply chains. Rapidiously re-engineer cost
                effective metrics whereas frictionless technologies. Continually disseminate functional customer.
              </p>

              <ul>
                <li>One for the money</li>
                <li>Two for the show</li>
                <li>Three to get ready</li>
                <li>Now go, cat, go</li>
              </ul>
              <p>
                Dramatically monetize bleeding-edge architectures with user friendly content. Distinctively aggregate timely convergence after
                holistic opportunities. Enthusiastically disseminate exceptional e-tailers for strategic supply chains. Rapidiously re-engineer cost
                effective metrics whereas frictionless technologies. Continually disseminate functional customer.
              </p>

              <ol>
                <li>One for the money</li>
                <li>Two for the show</li>
                <li>Three to get ready</li>
                <li>Now go, cat, go</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="related__blog mb-[80px] md:mb-[120px]">
        <div className="container">
          <div className="section-title mb-4 md:mb-8">
            <h2>Related Articles</h2>
          </div>

          <div className="lg:grid grid-cols-2 gap-6">
            {Array.from({
              length: 2,
            }).map((item, index) => (
              <SingleNewsBlock key={index.toString()} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
