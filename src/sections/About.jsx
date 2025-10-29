import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `CSE graduate from East West University (Data Science & Intelligent Systems). I build adaptive intelligent systems that learn, reason, and act in the real world.`;

  const aboutText = `About Me
🎓 CSE Graduate — East West University, Dhaka, Bangladesh
🔭 Working on: Machine Learning, Deep Learning, Natural Language Processing, Self-Supervised Learning, Computer Vision
🌿 Bachelor Thesis: Building a multimodal Artificial Intelligence framework for medicinal plant identification
💡 Interested Areas: Large Language Models | Robotics | Embodied AI | Artificial Intelligence
⚽ Real Madrid fan; FIFA/FC enthusiast
📚 Reading: "Sapiens - A Brief History of Humankind" by Yuval Noah Harari
Feel free to connect with me for collaborations or discussions on AI and technology!`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Md Sifatullah Sheikh"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.png"
          alt="Portrait"
          className="w-md rounded-3xl"
          loading="lazy"
          decoding="async"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
