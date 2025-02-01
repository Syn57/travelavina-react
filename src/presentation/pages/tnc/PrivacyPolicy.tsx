import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";

export default function PrivacyPolicy() {
    return (
        <>
            <NavigationBar />
            <ImageBannerStatic title="Privacy Policy" img="/src/assets/images/slider-banner-3.jpg" className=""/>
            <div className="max-w-5xl mx-auto p-6 font-algreya text-xl mt-4">
                <h1 className="text-2xl font-bold text-center mb-6">KEBIJAKAN PRIVASI</h1>
                <div className="space-y-4 text-gray-800">
                <section>
                    <h2 className="font-semibold">1. Pengumpulan Informasi</h2>
                    <p className="ms-5">
                    Kami mengumpulkan informasi pribadi dari pengguna untuk keperluan layanan, termasuk:
                    </p>
                    <ul className="list-disc pl-5 ms-5">
                        <li>Nama lengkap</li>
                        <li>Alamat email</li>
                        <li>Nomor telepon</li>
                        <li>Informasi pembayaran</li>
                        <li>Tanggal keberangkatan</li>
                        <li>Destinasi</li>
                        <li>Preferensi perjalanan</li>
                    </ul>
                    <p>
                    Informasi ini digunakan untuk memproses pemesanan, memberikan layanan, serta meningkatkan pengalaman pengguna.
                    </p>
                </section>
        
                <section>
                    <h2 className="font-semibold">2. Penggunaan Informasi</h2>
                    <p className="ms-5">
                    Informasi yang kami kumpulkan digunakan untuk: memproses pemesanan dan pembayaran, memberikan pembaruan terkait perjalanan,
                    mengirimkan penawaran dan promosi khusus. Kami tidak akan membagikan informasi pribadi pengguna kepada pihak ketiga kecuali
                    untuk keperluan pemrosesan transaksi atau apabila diwajibkan oleh hukum.
                    </p>
                </section>
        
                <section>
                    <h2 className="font-semibold">3. Perlindungan Data</h2>
                    <p className="ms-5">
                    Kami menggunakan teknologi enkripsi dan sistem keamanan untuk melindungi data pribadi pengguna dari akses yang tidak sah,
                    kehilangan, atau penyalahgunaan.
                    </p>
                </section>
        
                <section>
                    <h2 className="font-semibold">4. Hak Pengguna</h2>
                    <p className="ms-5">
                    Pengguna memiliki hak untuk: mengakses informasi pribadi yang telah kami simpan, memperbarui atau menghapus informasi pribadi,
                    dan menarik persetujuan untuk menerima promosi kapan saja.
                    </p>
                </section>
        
                <section>
                    <h2 className="font-semibold">5. Cookie dan Teknologi Pelacakan</h2>
                    <p className="ms-5">
                    Kami menggunakan cookie untuk meningkatkan fungsionalitas situs web dan pengalaman pengguna. Pengguna dapat mengelola
                    preferensi cookie melalui pengaturan browser mereka.
                    </p>
                </section>
        
                <section>
                    <h2 className="font-semibold">6. Perubahan Kebijakan Privasi</h2>
                    <p className="ms-5">
                    Kebijakan ini dapat diperbarui sewaktu-waktu. Kami akan memberitahukan perubahan melalui email atau pemberitahuan di situs web.
                    </p>
                </section>
            </div>
        </div>
        </>
    );
};
  