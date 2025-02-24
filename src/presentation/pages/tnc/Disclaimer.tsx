import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";

export default function Disclaimer() {
    return (
        <>
            <NavigationBar />
            <ImageBannerStatic title="Disclaimer" img="https://trv3-public.travelavina.com/assets/disclaimer/disclaimer-banner.jpg" className=""/>
            <div className="max-w-5xl mx-auto p-6 font-algreya text-xl mt-4">
                <h2 className="text-2xl font-bold text-center mb-4">DISCLAIMER</h2>
                <div className="space-y-4">
                <section>
                    <h3 className="font-semibold">1. Informasi Umum</h3>
                    <p className="ms-5 text-justify">
                    Selamat datang di Website travelavina.com Informasi yang disajikan di situs ini disediakan hanya untuk 
                    tujuan informasi umum. Kami berusaha untuk memberikan informasi yang akurat dan terkini, tetapi tidak   
                    memberikan jaminan, baik secara eksplisit maupun implisit, mengenai keakuratan, kelengkapan, keandalan, atau 
                    ketersediaan informasi, produk, layanan, atau grafik terkait yang ditampilkan di situs ini untuk tujuan apa pun. 
                    Kepercayaan  Anda terhadap informasi tersebut sepenuhnya merupakan risiko Anda sendiri.
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">2. Tidak Ada Jaminan atau Tanggung Jawab</h3>
                    <p className="ms-5 text-justify">
                    Kami tidak bertanggung jawab atas kehilangan atau kerugian, termasuk namun tidak terbatas pada kerugian tidak 
                    langsung atau konsekuensial, atau kerugian apa pun yang timbul dari hilangnya data atau keuntungan, 
                    sehubungan dengan penggunaan situs ini. Kami juga tidak dapat menjamin bahwa situs ini bebas dari kesalahan 
                    teknis, malware, atau masalah lain yang mungkin memengaruhi penggunaan Anda.
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">3. Harga dan Ketersediaan</h3>
                    <p className="ms-5 text-justify">
                    Harga tiket, paket perjalanan, akomodasi, dan layanan lainnya yang ditampilkan di situs ini dapat berubah 
                    sewaktu-waktu tanpa pemberitahuan sebelumnya. Kami tidak bertanggung jawab atas perubahan harga, 
                    ketidaktersediaan layanan, atau pembatalan yang dilakukan oleh pihak ketiga seperti maskapai penerbangan, 
                    hotel, atau penyedia tur.                    
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">4. Tautan ke Situs Pihak Ketiga</h3>
                    <p className="ms-5 text-justify">
                    Website ini dapat berisi tautan ke situs web eksternal yang dioperasikan oleh pihak ketiga. Kami tidak memiliki 
                    kendali atas konten, kebijakan privasi, atau praktik situs pihak ketiga tersebut. Penyertaan tautan tidak 
                    menyiratkan dukungan terhadap konten atau layanan mereka, dan kami tidak bertanggung jawab atas 
                    konsekuensi yang mungkin timbul dari interaksi Anda dengan situs tersebut. 
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">5. Risiko Perjalanan</h3>
                    <p className="ms-5 text-justify">
                    Kami tidak bertanggung jawab atas risiko yang terkait dengan perjalanan, seperti kecelakaan, penundaan, 
                    pembatalan, kerusakan bagasi, bencana alam, atau kejadian lain yang berada di luar kendali kami. Kami    
                    merekomendasikan Anda untuk membeli asuransi perjalanan sebelum memulai perjalanan Anda.                    
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">6. Informasi Visa dan Dokumen Perjalanan</h3>
                    <p className="ms-5 text-justify">
                    Informasi terkait visa, paspor, atau dokumen perjalanan lainnya yang disediakan di situs ini hanya sebagai 
                    panduan. Anda bertanggung jawab untuk memastikan bahwa Anda memiliki dokumen yang benar dan lengkap 
                    sebelum melakukan perjalanan. Kami tidak bertanggung jawab atas penolakan visa atau masalah dokumen 
                    lainnya.                    
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">7. Hak Kekayaan Intelektual</h3>
                    <p className="ms-5 text-justify">
                    Semua konten di situs ini, termasuk teks, gambar, logo, dan grafik, dilindungi oleh hak cipta dan hak kekayaan 
                    intelektual lainnya. Anda tidak diperbolehkan untuk menyalin, mereproduksi, atau menggunakan konten kami 
                    tanpa izin tertulis sebelumnya dari kami.                    
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">8. Perubahan Disclaimer</h3>
                    <p className="ms-5 text-justify">
                    Kami berhak untuk memperbarui atau mengubah disclaimer ini kapan saja tanpa pemberitahuan sebelumnya. 
                    Disarankan untuk secara berkala memeriksa halaman ini untuk mengetahui pembaruan.
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">9. Hubungi Kami</h3>
                    <p className="ms-5 text-justify ">
                    Jika Anda memiliki pertanyaan atau memerlukan klarifikasi lebih lanjut mengenai disclaimer ini, silakan hubungi 
                    kami melalui:
                    </p>
                    <p className="ms-5">Email: travelavinaa@gmail.com</p>
                    <p className="ms-5">Telepon: 087875128049</p>
                    <p className="ms-5">Alamat: Gulang RT 4 RW 5 Mejobo Kudus</p>
                </section>

                <section>
                    <p>
                    Dengan mengakses dan menggunakan situs ini, Anda dianggap telah membaca, memahami, dan menyetujui semua ketentuan dalam disclaimer ini.
                    </p>
                </section>
            </div>
        </div>
        </>
    );
  }
  