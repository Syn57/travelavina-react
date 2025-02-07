import React from 'react';
import { PAGE_WIDTH_CONFIG } from '../../../../utils/Constants';

const WhoWeAre: React.FC = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className={`flex flex-col md:flex-row py-12 bg-white ${PAGE_WIDTH_CONFIG}`}>
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 font-alike text-center md:text-start">Who We Are</h2>
          <p className="text-gray-600 mb-4 font-alice md:text-justify text-center">
              Selamat datang di TravelAvina, destinasi utama untuk Anda yang ingin menjelajahi dunia dengan cara yang aman, terjangkau, dan penuh pengalaman unik. Kami adalah perusahaan pariwisata yang hadir untuk memberikan pengalaman liburan yang tidak hanya menyenangkan, tetapi juga berkesan dan tak terlupakan.
          </p>
          <p className="text-gray-600 font-alice md:text-justify text-center">
              Dengan berbagai pilihan produk wisata yang lengkap dan beragam, TravelAvina mengutamakan kualitas, keamanan, dan kenyamanan dalam setiap perjalanan yang kami tawarkan. Dari destinasi eksotis hingga tempat-tempat lokal yang menawan, kami hadir dengan solusi perjalanan yang disesuaikan untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center items-center self-center">
          <img
            src={`https://trv3-public.travelavina.com/assets/about-us/aboutus-whoweare-1.jpg`}
            className="w-72 h-48 md:w-96 md:h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src={`https://trv3-public.travelavina.com/assets/about-us/aboutus-whoweare-2.jpg`}
            className="absolute bottom-0 right-0 w-40 h-48 md:w-52 md:h-60 object-cover rounded-lg shadow-lg transform translate-y-6"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
