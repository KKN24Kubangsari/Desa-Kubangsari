import fotoKepalaDesa from '/public/images/dummy-kepala-desa.jpg';

const About = () => {
  return (
    <>
      <section
        className='container px-6 md:px-12 lg:px-[7rem] py-20 sm:py-28 md:py-40'
        id='tentang'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 text-blackText lg:gap-10'>
          <div className='flex items-center justify-center gap-4 flex-col shrink-0 order-0'>
            <img
              className='rounded-lg w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover'
              src={fotoKepalaDesa}
              alt='Image not found'
            />
            <div className='flex items-center justify-center flex-col gap-2'>
              <h3 className='font-bold text-lg sm:text-xl md:text-2xl leading-7'>
                Dahyan S.Pd.I
              </h3>
              <p className='text-md sm:text-lg'>Kepala Desa</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 self-center mt-6 lg:mt-0 text-center lg:text-left lg:self-start'>
            <h1 className='font-barlow text-3xl md:text-4xl font-bold'>
              Tentang <span className='text-primary'>Desa Kubangsari</span>
            </h1>
            <p className='max-w-full sm:max-w-[450px] md:max-w-[650px] font-inter leading-8 text-normal sm:text-lg sm:leading-8'>
            Desa Kubangsari terletak di Kecamatan Cikalong, Kabupaten Tasikmalaya, Jawa Barat. Desa ini memiliki pemandangan alam 
            yang asri dengan sebagian besar wilayahnya terdiri dari persawahan dan area perbukitan. Masyarakatnya mayoritas bekerja 
            sebagai petani dan peternak, mengandalkan pertanian sebagai mata pencaharian utama. Desa Kubangsari juga dikenal dengan 
            kekayaan budaya dan tradisi lokal yang masih dilestarikan oleh warganya. Dengan kedekatannya dengan alam, desa ini 
            menawarkan suasana yang tenang dan asri, cocok untuk wisatawan yang ingin menikmati keindahan alam pedesaan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
