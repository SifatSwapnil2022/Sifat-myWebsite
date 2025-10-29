import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const resolveSrc = (p) => {
  if (!p) return null;
  if (/^https?:\/\//i.test(p)) return p; // external URLs unchanged
  const base =
    (typeof import.meta !== "undefined" && import.meta.env?.BASE_URL) || "/";
  // remove any leading "/public" and leading slashes so it works under a base path
  const cleaned = p.replace(/^\/?public\//, "").replace(/^\/+/, "");
  return base + cleaned;
};

const Projects = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    if (!previewRef.current) return;

    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (el) {
      gsap.killTweensOf(el);
      gsap.to(el, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 0.2,
        ease: "power2.in",
      });
    }

    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseMove = (e) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    if (moveX.current && moveY.current) {
      moveX.current(mouse.current.x);
      moveY.current(mouse.current.y);
    }
  };

  return (
    <section id="projects" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Projects"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => {
          const img = resolveSrc(project.image);
          const bg = resolveSrc(project.bgImage);
          return (
            <a
              key={project.id}
              id="project"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} on GitHub`}
              className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* overlay */}
              <div
                ref={(el) => {
                  overlayRefs.current[index] = el;
                }}
                className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
              />

              {/* title */}
              <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                <h2 className="lg:text-[32px] text-[26px] leading-none">
                  {project.name}
                </h2>
                <Icon
                  icon="lucide:arrow-up-right"
                  className="md:size-6 size-5"
                />
              </div>

              {/* divider */}
              <div className="w-full h-0.5 bg-black/80" />

              {/* frameworks */}
              <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                {project.frameworks.map((framework) => (
                  <p
                    key={framework.id}
                    className="text-black transition-colors duration-500 md:group-hover:text-white"
                  >
                    {framework.name}
                  </p>
                ))}
              </div>

              {/* mobile preview image */}
              <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
                {bg ? (
                  <img
                    src={bg}
                    alt={`${project.name}-bg-image`}
                    className="object-cover w-full h-full rounded-md brightness-50"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full rounded-md bg-black/60" />
                )}
                {img && (
                  <img
                    src={img}
                    alt={`${project.name}-image`}
                    className="absolute bg-center px-14 rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
            </a>
          );
        })}

        {/* desktop floating preview image (FIXED HEIGHT + SAFE POSITION) */}
        <div
          ref={previewRef}
          className="fixed top-0 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none hidden md:block opacity-0 w-[720px] h-[405px] lg:w-[960px] lg:h-[540px] rounded-xl bg-white"
        >
          {currentIndex !== null && projects[currentIndex]?.image && (
            <img
              src={resolveSrc(projects[currentIndex].image)}
              alt={`${projects[currentIndex].name} preview`}
              className="block object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
