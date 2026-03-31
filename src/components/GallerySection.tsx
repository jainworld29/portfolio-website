

import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";

/* ================= DATA ================= */
/* 👉 Add images + videos here */
const gallery = [
  {
    type: "image",
    src: "/gallery/pic1.jpg",
  },
  {
    type: "image",
    src: "/gallery/pic2.JPG",
  },
    {
    type: "image",
    src: "/gallery/pic3.JPG",
  },
    {
    type: "image",
    src: "/gallery/pic4.JPG",
  },
  {
    type: "image",
    src: "/gallery/pic5.jpg",
  },
   {
    type: "image",
    src: "/gallery/pic6.jpg",
  },
   {
    type: "image",
    src: "/gallery/pic7.jpg",
  },
   {
    type: "image",
    src: "/gallery/pic8.jpg",
  },
   {
    type: "image",
    src: "/gallery/pic9.jpg",
  },
  {
    type: "video",
    src: "/gallery/video1.mp4", // local video
  },
];

/* ================= COMPONENT ================= */

const GallerySection = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="gallery" className="section-padding lg:pl-28">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="line-accent" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gallery <span className="text-gradient-blue">Media</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="group relative cursor-pointer"
              onClick={() => setSelected(item)}
            >
              {/* IMAGE */}
              {item.type === "image" && (
                <img
                  src={item.src}
                  className="w-full h-64 object-cover rounded-2xl shadow-md group-hover:scale-105 transition"
                />
              )}

              {/* VIDEO PREVIEW */}
              {item.type !== "image" && (
                <div className="relative">
                  <video
                    src={item.type === "video" ? item.src : undefined}
                    className="w-full h-64 object-cover rounded-2xl"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl">
                    <Play className="text-white" size={40} />
                  </div>
                </div>
              )}

              {/* CAPTION */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                              rounded-2xl flex items-end p-4 transition">
                <p className="text-white text-sm font-semibold">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={30} />
            </button>

            {/* IMAGE VIEW */}
            {selected.type === "image" && (
              <img
                src={selected.src}
                className="max-w-4xl max-h-[80vh] rounded-xl"
              />
            )}

            {/* LOCAL VIDEO */}
            {selected.type === "video" && (
              <video
                src={selected.src}
                controls
                autoPlay
                className="max-w-4xl max-h-[80vh] rounded-xl"
              />
            )}

            {/* YOUTUBE */}
            {selected.type === "youtube" && (
              <iframe
                src={selected.src}
                className="w-[80vw] h-[60vh] rounded-xl"
                allowFullScreen
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;