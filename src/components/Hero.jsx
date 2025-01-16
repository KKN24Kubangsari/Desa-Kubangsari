const Hero = () => {
  return (
    <>
      <section
        className='bg-blend-overlay bg-center bg-no-repeat bg-cover bg-[url("./src/assets/images/desaa.jpg")] min-h-[850px]'
        id='hero'>
        <div className='container px-6 md:px-12 lg:px-[7rem] min-h-[900px] flex items-center justify-center flex-col gap-6'>
          <div className='flex items-center justify-center flex-col gap-4 font-inter text-whiteText text-center'>
            <p className='text-normal sm:text-lg'>Selamat datang di situs resmi</p>
            <h1 className='font-barlow text-5xl sm:text-6xl font-bold text-normal sm '>Desa Kubangsari</h1>
            <p className='text-normal sm:text-lg'>Kecamatan Cikalong</p>
            <p className='text-normal sm:text-lg'>Kabupaten Tasikmalaya</p>
          </div>
          <div>
            <a
              className='bg-primary hover:bg-primary/90 text-whiteText font-bold font-inter py-3 px-6 rounded-[4px]'
              href='#tentang'>
              Lihat Profil Desa
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
