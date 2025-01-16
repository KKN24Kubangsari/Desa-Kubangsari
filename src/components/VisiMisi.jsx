const VisiMisi = () => {
   return (
      <>
         <section className="py-40 bg-secondaryBg" id="visi-misi">
            <div className="container px-6 md:px-12 lg:px-[7rem] flex justify-center flex-col md:flex-col md:items-start sm:items-center sm:flex-col lg:flex-row gap-32 text-blackText">
               <div className="flex flex-col gap-4 items-center">
                  <div className="flex gap-4 items-center justify-center">
                     {/* <img src={visiLogo} alt='image not found' /> */}
                     <h1 className="font-bold font-barlow text-3xl">Visi</h1>
                  </div>
                  <ol className="list-decimal ml-5 max-w-[350px] sm:max-w-[425px] md:max-w-[400px] space-y-2 text-normal leading-8 md:text-lg md:leading-8">
                     <li>
                        MENJADI DESA YANG MAJU DI KABUPATEN TASIKMALAYA PADA
                        TAHUN 2031
                     </li>
                  </ol>
               </div>
               <div className="flex flex-col gap-4 items-center">
                  <div className="flex gap-4 items-center justify-center">
                     <h1 className="font-bold font-barlow text-3xl">Misi</h1>
                  </div>
                  <ol className="list-decimal ml-5 max-w-[350px] sm:max-w-[475px] md:max-w-[450px] space-y-2 text-normal leading-8 md:text-lg md:leading-8">
                     <li>
                        Memberdayakan dan Meningkatkan Sumber Daya Manusia yang
                        Produktif, Kreatif dan Inovatif
                     </li>
                     <li>
                        Menggali Potensi dan Memanfaatkan Sumber Daya Alam
                        dengan Sebaik-baiknya untuk Mencapai Kesejahteraan
                        Masyarakat
                     </li>
                     <li>
                        Mengoptimalkan Kinerja Perangkat Desa Secara Maksimal
                        Sesuai Tugas Pokok dan Fungsi Perangkat Desa Demi
                        Tercapainya Pelayanan yang Prima bagi Masyarakat
                     </li>
                     <li>
                        Meningkatkan Kapasitas Kelembagaan Demi Tewujudnya
                        Pemerintahan yang Jujur, Transparan, dan Penuh
                        Integritas
                     </li>
                     <li>
                     Melaksanakan Koordinasi antar Mitra Kerja serta Menjalin
                     Kerjasama dengan Berbagai Pihak (Stakeholder)
                     </li>
                     <li>
                        Melaksanakan Pembangunan Terpadu baik Sumberdaya
                        Manusia, Sumber Daya Alam dan Pembangunan Ifrastruktur
                        di Lingkungan Masyarakat Desa Kubangsari
                     </li>
                     <li>
                        Mewujudkan Masyarakat Desa yang tanggap dan sadar
                        Bencana
                     </li>
                  </ol>
               </div>
            </div>
         </section>
      </>
   );
};

export default VisiMisi;
