import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";

export default function TermsOfUse() {
    return (
        <>
            <NavigationBar />
            <ImageBannerStatic title="Term Of Use" img="/src/assets/images/slider-banner-3.jpg" className=""/>
            <div className="max-w-5xl mx-auto p-6 font-algreya text-xl mt-4">
                <h1 className="text-2xl font-bold text-center mb-6 font-algreya">SYARAT DAN KETENTUAN PENGGUNAAN</h1>
                <div className="space-y-4 text-gray-800">
                <section>
                    <h2 className="font-semibold">1. Umum</h2>
                    <p className="ms-5">
                    Dengan menggunakan layanan kami, pengguna menyetujui semua syarat dan ketentuan yang ditetapkan. Jika pengguna tidak setuju, harap berhenti menggunakan layanan ini.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold">2. Layanan</h2>
                    <p className="ms-5">
                    Kami menyediakan layanan pemesanan tiket perjalanan, akomodasi, dan paket wisata. Informasi yang ditampilkan di situs web bersifat informatif dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold">3. Tanggung Jawab Pengguna</h2>
                    <p className="ms-5">
                    Pengguna bertanggung jawab untuk memberikan informasi yang benar dan akurat saat melakukan pemesanan. Membaca dan memahami syarat dan ketentuan layanan dari penyedia pihak ketiga, seperti maskapai penerbangan atau hotel.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold">4. Pembatalan dan Pengembalian Dana</h2>
                    <p className="ms-5">
                    Ketentuan pembatalan dan pengembalian dana mengikuti kebijakan masing-masing penyedia layanan (maskapai, hotel, dll). Kami tidak bertanggung jawab atas perubahan kebijakan tersebut.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold">5. Pembatasan Tanggung Jawab</h2>
                    <p className="ms-5">
                    Kami tidak bertanggung jawab atas kerugian atau kerusakan yang terjadi akibat kesalahan informasi yang diberikan oleh pihak ketiga, perubahan jadwal perjalanan, atau force majeure seperti bencana alam atau pandemi.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold">6. Hak Cipta dan Kekayaan Intelektual</h2>
                    <p className="ms-5">
                    Semua konten di situs web ini, termasuk teks, gambar, dan logo, adalah milik kami dan dilindungi oleh undang-undang hak cipta. Dilarang menyalin atau mendistribusikan konten tanpa izin tertulis.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold">7. Perubahan Ketentuan</h2>
                    <p className="ms-5">
                    Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold">8. Kontak</h2>
                    <p className="ms-5">
                    Untuk pertanyaan lebih lanjut, silakan hubungi kami melalui:
                    </p>
                    <ul className="list-disc list-inside ms-5">
                    <li>Email: support@namasitusweb.com</li>
                    <li>Telepon: +62-XXX-XXXX-XXXX</li>
                    </ul>
                </section>
                </div>
            </div>
        </>
    );
  }