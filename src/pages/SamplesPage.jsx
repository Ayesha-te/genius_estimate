import React from "react";
import { Helmet } from "react-helmet";

// ✅ Image imports from /src/assets/
import cmuImg from "../assets/cmu.jpg";
import concreteImg from "../assets/concrete.jpg";
import demolitionImg from "../assets/demolition.jpg";
import drywallImg from "../assets/drywall.jpg";
import electricalImg from "../assets/electrical.jpg";
import finishesImg from "../assets/finishes.jpg";
import metalsImg from "../assets/metal.jpg";
import paintImg from "../assets/paint.jpg";
import residentialPaintImg from "../assets/RD.jpg";
import roofing2Img from "../assets/roofing2.jpg";
import roofingImg from "../assets/roofing.jpg";
import timberImg from "../assets/timber.jpg";

const samples = [
  {
    name: "Concrete Masonry Units",
    description: "Accurate estimates for CMU walls, blocks, and related work.",
    pdfUrl: "/pdfs/CONCRETE MASONARY UNITS.pdf",
    image: cmuImg,
  },
  {
    name: "Concrete",
    description: "Concrete estimation for slabs, driveways, and structural work.",
    pdfUrl: "/pdfs/CONCRETE.pdf",
    image: concreteImg,
  },
  {
    name: "Demolition",
    description: "Estimate your demolition project including structure and interior removal.",
    pdfUrl: "/pdfs/DEMOLITION.pdf",
    image: demolitionImg,
  },
  {
    name: "Drywall",
    description: "Estimate drywall installation and finishing for residential and commercial projects.",
    pdfUrl: "/pdfs/DRYWALL.pdf",
    image: drywallImg,
  },
  {
    name: "Electrical",
    description: "Detailed electrical system project estimates for lighting, panels, and wiring.",
    pdfUrl: "/pdfs/Electrical.pdf",
    image: electricalImg,
  },
  {
    name: "Finishes",
    description: "Estimate interior and exterior finishes including plaster, coatings, and more.",
    pdfUrl: "/pdfs/Finishes.pdf",
    image: finishesImg,
  },
  {
    name: "Metals",
    description: "Estimates for structural and ornamental metal work.",
    pdfUrl: "/pdfs/Metals.pdf",
    image: metalsImg,
  },
  {
    name: "Paint",
    description: "Paint job estimation for walls, ceilings, trims, and more.",
    pdfUrl: "/pdfs/PAINT.pdf",
    image: paintImg,
  },
  {
    name: "Residential Building Paint",
    description: "Painting estimates specific to residential buildings and renovations.",
    pdfUrl: "/pdfs/rESIDENTIAL BUILDING PAINT.pdf",
    image: residentialPaintImg,
  },
  {
    name: "Roofing - 2",
    description: "Additional roofing estimate samples for layered or complex jobs.",
    pdfUrl: "/pdfs/ROOFING -2.pdf",
    image: roofing2Img,
  },
  {
    name: "Roofing",
    description: "Get detailed roofing project estimates for all building types.",
    pdfUrl: "/pdfs/ROOFING.pdf",
    image: roofingImg,
  },
  {
    name: "Timber",
    description: "Estimate wood framing, decks, and structural timber usage.",
    pdfUrl: "/pdfs/timber.pdf",
    image: timberImg,
  },
];

// Generate structured data for estimate samples
const itemListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": samples.map((sample, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "DigitalDocument",
      "name": sample.name + " Estimate Sample",
      "description": sample.description,
      "url": "https://geniusestimate.com" + sample.pdfUrl
    }
  }))
};

const SamplesPage = () => {
  return (
    <>
      <Helmet>
        <title>Construction Estimate Samples | Genius Estimate</title>
        <meta name="description" content="View sample construction estimates for concrete, drywall, electrical, roofing, and more. Download professional estimate examples to see our detailed takeoffs and pricing formats." />
        <meta name="keywords" content="construction estimate samples, construction takeoff examples, concrete estimating samples, drywall estimate examples, roofing estimate samples, material takeoff templates" />
        <link rel="canonical" href="https://geniusestimate.com/samples" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geniusestimate.com/samples" />
        <meta property="og:title" content="Construction Estimate Samples | Genius Estimate" />
        <meta property="og:description" content="View sample construction estimates for concrete, drywall, electrical, roofing, and more. Download professional estimate examples to see our detailed takeoffs and pricing formats." />
        <meta property="og:image" content="https://geniusestimate.com/sample-previews.jpg" />
        
        {/* Schema.org markup for ItemList */}
        <script type="application/ld+json">
          {JSON.stringify(itemListStructuredData)}
        </script>
      </Helmet>
      
      <div style={{ maxWidth: 1200, margin: "auto", padding: "40px 20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: 40, fontSize: 36, fontWeight: "700" }}>
          Sample Estimate Categories
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 30,
          }}
        >
          {samples.map((sample) => (
            <div
              key={sample.name}
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: 0,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={() => window.open(sample.pdfUrl, "_blank")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.open(sample.pdfUrl, "_blank");
                }
              }}
              tabIndex={0}
              role="link"
              aria-label={`View estimate for ${sample.name}`}
            >
              {/* Image */}
              <img
                src={sample.image}
                alt={`${sample.name} estimate sample`}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <div style={{ padding: 25 }}>
                <h2 style={{ fontSize: 22, fontWeight: "700", marginBottom: 12 }}>{sample.name}</h2>
                <p style={{ fontSize: 15.5, lineHeight: 1.5, color: "#555" }}>{sample.description}</p>

                <button
                  style={{
                    marginTop: 20,
                    background: "linear-gradient(to right, #FFC107, #FF5722)", // Yellow to red gradient
                    color: "white",
                    border: "none",
                    padding: "10px 24px",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(255, 87, 34, 0.5)",
                    transition: "background 0.3s ease",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(sample.pdfUrl, "_blank");
                  }}
                  onKeyDown={(e) => e.stopPropagation()}
                  aria-label={`View ${sample.name} estimate sample PDF`}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SamplesPage;