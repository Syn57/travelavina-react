import React from 'react';
import bg_image_1 from "../../../../assets/images/slider-banner-1.jpg"
import bg_image_2 from "../../../../assets/images/slider-banner-2.jpg"

const WhoWeAre: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-80 py-12 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 font-alike">Who We Are</h2>
        <p className="text-gray-600 mb-4 font-alice">
            Selamat datang di TravelAvina, destinasi utama untuk Anda yang ingin menjelajahi dunia dengan cara yang aman, terjangkau, dan penuh pengalaman unik. Kami adalah perusahaan pariwisata yang hadir untuk memberikan pengalaman liburan yang tidak hanya menyenangkan, tetapi juga berkesan dan tak terlupakan.
        </p>
        <p className="text-gray-600 font-alice">
            Dengan berbagai pilihan produk wisata yang lengkap dan beragam, TravelAvina mengutamakan kualitas, keamanan, dan kenyamanan dalam setiap perjalanan yang kami tawarkan. Dari destinasi eksotis hingga tempat-tempat lokal yang menawan, kami hadir dengan solusi perjalanan yang disesuaikan untuk memenuhi kebutuhan Anda.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
        <img
          src={bg_image_1}
          alt="Aerial view of a boat"
          className="w-72 h-48 md:w-96 md:h-64 object-cover rounded-lg shadow-lg"
        />
        <img
          src={bg_image_2}
          alt="People snorkeling"
          className="absolute bottom-0 right-0 w-40 h-48 md:w-52 md:h-60 object-cover rounded-lg shadow-lg transform translate-x-6 translate-y-6"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
