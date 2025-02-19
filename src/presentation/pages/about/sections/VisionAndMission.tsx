import React from 'react';
import { PAGE_WIDTH_CONFIG } from '../../../../utils/Constants';

const VisionMission: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-auto ">
      <div className={`bg-black/20 py-16 z-10 relative flex items-center justify-center`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${PAGE_WIDTH_CONFIG}`}>
          {/* Vision Section */}
          <div className="bg-blue-900/75 text-white p-6 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 font-alike">Our Vision</h2>
            <p className="text-sm md:text-lg leading-relaxed font-abhaya text-justify">
              Menjadi perusahaan pariwisata terdepan yang menyediakan pengalaman
              liburan yang aman, terjangkau, dan penuh inspirasi bagi semua pelanggan kami.
              Menjadi perusahaan pariwisata terdepan yang menyediakan pengalaman liburan
              yang aman, terjangkau, dan penuh inspirasi bagi semua pelanggan kami.
            </p>
          </div>
          {/* Mission Section */}
          <div className="bg-blue-900/75 text-white p-6 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 font-alike">Our Mission</h2>
            <ol className="list-decimal pl-4 text-sm md:text-lg leading-relaxed font-abhaya text-justify">
              <li>
                Menyediakan layanan pariwisata yang aman, nyaman, dan mudah diakses oleh
                semua kalangan.
              </li>
              <li>
                Menawarkan produk wisata yang unik dan bervariasi, memberikan pengalaman
                yang tak terlupakan.
              </li>
              <li>
                Memastikan bahwa setiap pelanggan merasa puas dan mendapatkan nilai terbaik
                dari setiap perjalanan yang mereka pilih.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <img src={`https://trv3-public.travelavina.com/assets/about-us/aboutus-banner-visimisi.jpg`}
        className="absolute top-0 left-0 w-full h-full object-cover  z-0"
        alt="Background"
      />
    </div>
  );
};

export default VisionMission;
