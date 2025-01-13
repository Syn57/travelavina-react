import React from 'react';
import image from "../../../../assets/images/slider-banner-3.jpg"
const TripService: React.FC = () => {
  const services = [
    {
      title: "Trip Destinations",
      description: "Menawarkan pengalaman explore destinasi-destinasi wisata yang populer dan hidden gem dengan berbagai fasilitas.",
    },
    {
      title: "Accomodation",
      description: "Menyediakan berbagai macam akomodasi penginapan yang dibutuhkan, baik hotel, villa, homestay, hostel, resort, cabin, maupun glamping dengan penawaran yang menarik.",
    },
    {
      title: "Transportasi",
      description: "Menawarkan pengalaman explore destinasi-destinasi wisata yang populer dan hidden gem dengan berbagai fasilitas.",
    },
    {
      title: "Tiket Wisata",
      description: "Menawarkan pengalaman explore destinasi-destinasi wisata yang populer dan hidden gem dengan berbagai fasilitas.",
    },
    {
      title: "Venue",
      description: "Menawarkan pengalaman explore destinasi-destinasi wisata yang populer dan hidden gem dengan berbagai fasilitas.",
    },
    {
      title: "Trip Konsultan",
      description: "Menawarkan pengalaman explore destinasi-destinasi wisata yang populer dan hidden gem dengan berbagai fasilitas.",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Image Section */}
        <div className="col-span-1 w-full h-full">
          <img
            src={image}// Replace with actual image URL
            alt="Trip Service"
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-2">
          <h2 className="text-3xl font-alfaslab mb-2">Our Trip Service</h2>
          <p className="text-black mb-6 font-alice font-bold">
            Memberikan berbagai pilihan pelayanan yang dibutuhkan selama kegiatan wisata berlangsung dengan ketersediaan pelayanan yang lengkap dan profesional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border-black"
              >
                <div className="flex items-center mb-3">
                  <div className="text-yellow-500 text-3xl flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <h3 className="font-semibold text-2xl mb-2 font-alice">{service.title}</h3>
                <p className="text-black text-sm font-alice">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripService;
