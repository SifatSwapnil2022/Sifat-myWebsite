import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Services = () => {
  const text = `I build intelligent, data-driven systems 
that learn, adapt, and deliver real impact — innovation driven by data.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"What I Do"}
        title={"Services"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      {/* Research & Publications Section */}
      <div className="px-10 py-16 text-white border-t-2 border-white/30">
        <div className="mb-10">
          <h2 className="flex items-center gap-3 text-4xl font-semibold lg:text-5xl">
            <i className="fas fa-microscope text-gold" /> Research &
            Publications
          </h2>
        </div>

        {/* Publications Section */}
        <div className="p-6 mb-12 border border-white/30 rounded-2xl bg-black/60 backdrop-blur-sm">
          <h3 className="text-2xl mb-3">📜 Latest Publication</h3>
          <p className="text-white/80 leading-relaxed">
            <strong>Title:</strong> AI-Powered Deepfake Detection Using CNN and
            Vision Transformer Architectures
            <br />
            <strong>Online Link:</strong>{" "}
            <a
              href="https://ieeexplore.ieee.org/document/11145852"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline hover:text-white"
            >
              IEEE Xplore
            </a>
            <br />
            <strong>Conference:</strong> IBDAP 2025
            <br />
            <strong>Date:</strong> July 2025
          </p>
          <p className="mt-4 text-white/70">
            This paper presents a novel approach combining Convolutional Neural
            Networks (CNNs) with Vision Transformers for effective deepfake
            detection, achieving state-of-the-art results on benchmark datasets.
          </p>
        </div>

        {/* Under Peer Review */}
        <div className="p-6 mb-12 border border-white/30 rounded-2xl bg-black/60 backdrop-blur-sm">
          <h3 className="text-2xl mb-3">📘 Under Peer Review</h3>
          <p className="text-white/80 leading-relaxed">
            <strong>Title:</strong> DeFaX: A Cross-Attention Fusion Framework
            for Robust and Explainable Deepfake Detection
            <br />
            <strong>Status:</strong> Under Peer Review at <em>IEEE Access</em>
            <br />
            <strong>Subject Category:</strong> Computational and Artificial
            Intelligence, Computers and Information Processing, Imaging
            <br />
            <strong>Keywords:</strong> Adversarial Machine Learning, Computer
            Vision, Convolutional Neural Networks, Deep Learning, Generative
            Adversarial Networks, Image Forensics, Image Representation, Machine
            Learning, Transformers
            <br />
            <strong>Manuscript Type:</strong> Research Article
          </p>
          <p className="mt-4 text-white/70">
            This study introduces <em>DeFaX</em>, a cross-attention fusion
            framework integrating CNN and Transformer features to enhance
            robustness and explainability in deepfake detection tasks.
          </p>
        </div>

        {/* Deepfake Detection Project */}
        <div className="p-6 mb-12 border border-white/30 rounded-2xl bg-black/60 backdrop-blur-sm">
          <h3 className="text-2xl mb-3">📜 Deepfake Detection Project</h3>
          <div className="flex justify-center mb-6">
            <img
              src="images/vit.png"
              alt="VFDNET Architecture"
              className="rounded-xl max-w-md"
            />
          </div>
          <p className="text-white/80 leading-relaxed">
            <strong>What is a deepfake?</strong>
            <br />A deepfake refers to AI-generated media where a person's
            appearance or voice is synthetically replaced by another. Although
            the term emerged around 2017, visual forgery has existed for over a
            century. <strong>VFDNET (Vision Fake Detection Network)</strong> is
            our response — a transformer-based deep learning model for spotting
            fake or GAN-generated images.
          </p>

          <h4 className="mt-6 text-xl text-gold">
            🔍 How Vision Fake Detection Network (VFDNET) Works
          </h4>
          <ul className="mt-3 list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>Input Image:</strong> 224×224×3 RGB image
            </li>
            <li>
              <strong>Patch Embedding:</strong> Image split into 16×16 patches
              (196 total), flattened and projected
            </li>
            <li>
              <strong>Positional Encoding:</strong> Added to patch embeddings to
              preserve spatial info
            </li>
            <li>
              <strong>[CLS] Token:</strong> Represents global image features
            </li>
            <li>
              <strong>Transformer Encoder:</strong> Layer Norm, MHSA, MLP,
              residual connections
            </li>
            <li>
              <strong>Feature Extraction:</strong> Uses [CLS] token output
            </li>
            <li>
              <strong>Classification Head:</strong> MLP + softmax for Real/Fake
              prediction
            </li>
          </ul>
          <p className="mt-3 text-white/70">
            In an age of synthetic media, VFDNET helps defend visual integrity
            by detecting manipulated content with high accuracy.
          </p>
        </div>

        {/* Ongoing Research */}
        <div className="p-6 border border-white/30 rounded-2xl bg-black/60 backdrop-blur-sm">
          <h3 className="text-2xl mb-6">🧪 Ongoing Research</h3>

          {/* Retinal Disease Detection */}
          <div className="mb-10">
            <p className="text-white/80 leading-relaxed">
              <strong>
                Retinal Disease Detection using Self-Supervised Vision
                Transformers:
              </strong>
              <br />
              Investigating a scalable AI pipeline combining Self-Supervised
              Learning (SSL) and Vision Transformers (ViTs) for early detection
              of retinal diseases such as Diabetic Retinopathy (DR), AMD, and
              Glaucoma from fundus images. SSL frameworks like DINO and MAE
              enable the model to learn from large unlabeled datasets, reducing
              reliance on expert annotations. Fine-tuned ViTs capture global
              retinal patterns, and Grad-CAM provides visual interpretability.
              This approach supports telemedicine, clinical triaging, and
              discovery of novel biomarkers.
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="images/SSL2.png"
                alt="Retinal fundus example"
                className="rounded-xl max-w-md"
              />
            </div>
          </div>

          {/* Ethnobotanical Knowledge Graph */}
          <div className="mb-10">
            <p className="text-white/80 leading-relaxed">
              <strong>
                An Integrated Deep Learning and Language Processing Framework
                for Medicinal Plant Identification and Ethnobotanical
                Description
              </strong>
              <br />
              This project aims to develop an{" "}
              <strong>Ethnobotanical Knowledge Graph</strong> by integrating
              textual ethnobotanical knowledge and custom plant datasets through
              advanced AI and NLP techniques. The workflow includes entity
              recognition, relationship extraction, image classification using
              CNNs, ResNet, EfficientNet, and Transformer-based models, followed
              by XAI analysis for interpretability.
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="images/WORKFLOW.png"
                alt="Ethnobotanical Workflow Diagram"
                className="rounded-xl max-w-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Your existing sticky service cards */}
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
