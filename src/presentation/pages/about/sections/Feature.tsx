import React from 'react';
import ic_booking from "../../../../assets/icons/ic_book.svg"
import ic_affordable from "../../../../assets/icons/ic_affordable.svg"
import ic_globe from "../../../../assets/icons/ic_lot_choice.svg"
import ic_per_service from "../../../../assets/icons/ic_service.svg"
import { PAGE_WIDTH_CONFIG } from '../../../../utils/Constants';

const Features: React.FC = () => {
  const features = [
    {
      icon: ic_booking,
      title: 'Easy Booking',
      description:
        'Keamanan Anda adalah prioritas utama kami. Dengan pengalaman bertahun-tahun, kami pastikan setiap perjalanan Anda berjalan dengan lancar, aman, dan penuh kenyamanan.',
    },
    {
      icon: ic_affordable,
      title: 'Affordable Price',
      description:
        'Kami percaya bahwa liburan berkualitas tidak harus mahal. TravelAvina menyediakan paket wisata yang ramah di kantong tanpa mengorbankan kualitas, sehingga Anda bisa menikmati liburan impian dengan biaya yang efisien.',
    },
    {
      icon: ic_per_service,
      title: 'Personal Service',
      description:
        'Kami menawarkan produk wisata yang berbeda dan penuh kejutan! Dengan paket-paket yang kreatif dan beragam, Anda dapat menikmati pengalaman baru yang menyegarkan – mulai dari wisata alam, budaya, kuliner, hingga petualangan yang menantang.',
    },
    {
      icon: ic_globe,
      title: 'A Lot of Choice',
      description:
        'TravelAvina menawarkan berbagai pilihan produk wisata, baik untuk perjalanan solo, keluarga, maupun grup. Kami menyediakan paket wisata domestik dan internasional yang bisa disesuaikan dengan preferensi dan anggaran Anda.',
    },
  ];

  return (
    <div className={`flex items-center justify-center`}>
      <div className={`bg-white py-12 ${PAGE_WIDTH_CONFIG} `}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center self-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={feature.icon} className='w-[72px] h-[72px] mb-4'/>
              <h3 className="text-xl font-bold mb-2 font-alike">{feature.title}</h3>
              <p className="text-gray-600 font-alice text-justify">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
