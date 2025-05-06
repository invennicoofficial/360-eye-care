"use client";

const GoogleMapEmbed = ({ src }) => {
  return (
    <div className="relative w-full  font-sans">
      {/* Google Maps iFrame */}
      <iframe
        src={src}
        className="w-full h-[500px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
