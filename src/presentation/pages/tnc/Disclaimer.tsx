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
                    <p className="ms-5">
                    Selamat datang di travelavina.com Informasi yang disajikan di situs ini disediakan hanya untuk tujuan informasi umum...
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">2. Tidak Ada Jaminan atau Tanggung Jawab</h3>
                    <p className="ms-5">
                    Kami tidak bertanggung jawab atas kehilangan atau kerugian, termasuk namun tidak terbatas pada...
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">3. Harga dan Ketersediaan</h3>
                    <p className="ms-5">
                    Harga tiket, paket perjalanan, akomodasi, dan layanan lainnya yang ditampilkan di situs ini dapat berubah...
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">4. Tautan ke Situs Pihak Ketiga</h3>
                    <p className="ms-5">
                    Website ini dapat berisi tautan ke situs web eksternal yang dioperasikan oleh pihak ketiga...
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">5. Risiko Perjalanan</h3>
                    <p className="ms-5">
                    Kami tidak bertanggung jawab atas risiko yang terkait dengan perjalanan, seperti kecelakaan, penundaan...
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">6. Informasi Visa dan Dokumen Perjalanan</h3>
                    <p className="ms-5">
                    Informasi terkait visa, paspor, atau dokumen perjalanan lainnya yang disediakan di situs ini hanya sebagai panduan...
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">7. Hak Kekayaan Intelektual</h3>
                    <p className="ms-5">
                    Semua konten di situs ini, termasuk teks, gambar, logo, dan grafik, dilindungi oleh hak cipta...
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">8. Perubahan Disclaimer</h3>
                    <p className="ms-5">
                    Kami berhak untuk memperbarui atau mengubah disclaimer ini kapan saja tanpa pemberitahuan sebelumnya...
                    </p>
                </section>
                
                <section>
                    <h3 className="font-semibold">9. Hubungi Kami</h3>
                    <p className="ms-5">
                    Jika Anda memiliki pertanyaan atau memerlukan klarifikasi lebih lanjut mengenai disclaimer ini, silakan hubungi kami melalui:
                    </p>
                    <p className="ms-5">Email: travelavinaa@gmail.com</p>
                    <p className="ms-5">Telepon: 087875128049</p>
                    <p className="ms-5">Alamat: Gulang RT 4 RW 5 Mejobo Kudus</p>
                </section>
            </div>
        </div>
        </>
    );
  }
  