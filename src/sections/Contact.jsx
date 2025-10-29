import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import gsap from "gsap";

const Contact = () => {
  const text = `Got a question or a project idea?
    I'd love to connect and discuss how we can build something impactful together.`;
  const items = [
    "Let's build something impactful",
    "Open to ML • LLM • NLP collaborations",
    "From prototype to production",
    "Clean architecture, real-world results",
    "Reliable, testable, scalable software",
  ];
  const socials = [
    { name: "GitHub", href: "https://github.com/SifatSwapnil2022" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mdsifatullahsheikh/",
    },
    {
      name: "ORCID",
      href: "https://orcid.org/my-orcid?orcid=0009-0007-2045-8245",
    },
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=7m3g1cEAAAAJ",
    },
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.25,
      ease: "back.out",
      scrollTrigger: { trigger: ".social-link" },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Let’s collaborate"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                mdsifatullahsheikh@gmail.com
              </p>
            </div>

            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
