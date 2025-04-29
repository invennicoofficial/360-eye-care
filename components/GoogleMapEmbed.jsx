"use client";

const GoogleMapEmbed = () => {
  return (
    <div className="relative w-full  font-sans">
      {/* Google Maps iFrame */}
      <iframe
        src="https://www.google.com/maps?q=360+Eyecare+-+Beaches,+2199+Queen+St+E,+Toronto,+ON+M4E+1E5,+Canada&output=embed"
        className="w-full h-[500px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
