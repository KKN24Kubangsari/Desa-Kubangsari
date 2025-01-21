import potensiLogo from '/public/images/file-tree.png';
import fotoPanetean from '/public/images/panetean.jpg';
import fotoLeuwileungsir from '/public/images/leuwileungsir.jpg';
import fotoSale from '/public/images/sale.jpg';
import fotoKreatif from '/public/images/kreatif.jpg';

const Potensi = () => {
  const listPotensi = [
    {
      namaPotensi: 'Curug Panetean',
      description:
        'Curug Panetean, terletak di Desa Kubangsari, Kecamatan Cikalong, Tasikmalaya, adalah air terjun yang mempesona dengan pemandangan alam yang asri dan udara sejuk. Cocok untuk wisata alam dan fotografi.',
      image: fotoPanetean,
    },
    {
      namaPotensi: 'Curug Leuwi Leungsir',
      description:
        'Curug Leuwi Leungsir, di Desa Kubangsari, Kecamatan Cikalong, Tasikmalaya, menawarkan air terjun jernih dengan batuan alami di sekitarnya. Tempat ini ideal untuk bersantai dan menikmati keindahan alam yang tenang.',
      image: fotoLeuwileungsir,
    },
    {
      namaPotensi: 'UMKM Sale',
      description:
        'UMKM sale di Kubangsari memproduksi camilan khas berbahan dasar pisang yang diolah menjadi sale. Produk ini memiliki pasar yang luas karena rasa gurih dan teksturnya yang renyah, menjadikannya salah satu oleh-oleh khas yang populer di daerah tersebut.',
      image: fotoSale,
    },
    {
      namaPotensi: 'UMKM Kerajinan',
      description:
        'UMKM kerajinan dari kelapa di Kubangsari menghasilkan berbagai produk kreatif seperti kopiah, anyaman, dan aksesori rumah tangga dari sabut kelapa dan tempurung kelapa. Kerajinan ini bernilai jual tinggi dan menjadi produk khas yang menggambarkan kearifan lokal serta potensi pemanfaatan bahan alami secara berkelanjutan.',
      image: fotoKreatif,
    },
    // {
    //   namaPotensi: 'Pesawahan',
    //   description:
    //     'Sawah subur menghasilkan padi berkualitas yang menjadi andalan ekonomi dan ketahanan pangan desa.',
    //   image: './src/assets/images/image-3.jpg',
    // },
    // {
    //   namaPotensi: 'Pesawahan',
    //   description:
    //     'Sawah subur menghasilkan padi berkualitas yang menjadi andalan ekonomi dan ketahanan pangan desa.',
    //   image: './src/assets/images/image-3.jpg',
    // },
    // {
    //   namaPotensi: 'Pesawahan',
    //   description:
    //     'Sawah subur menghasilkan padi berkualitas yang menjadi andalan ekonomi dan ketahanan pangan desa.',
    //   image: './src/assets/images/image-3.jpg',
    // },
  ];

  return (
    <>
      <section className='py-40 bg-secondaryBg' id='potensi'>
        <div className='container flex gap-6 flex-col px-6 md:px-6 lg:px-[7rem]'>
          <div className='flex items-center gap-4'>
            <img src={potensiLogo} alt='image not found' />
            <h1 className='font-barlow font-bold text-3xl md:text-4xl text-blackText'>
              Potensi
            </h1>
          </div>
          <div className='flex gap-8 items-start justify-center flex-wrap leading-8'>
            {listPotensi.map((item) => (
              <div
                className='shadow-lg text-blackText max-w-[270px] flex-shrink-0'
                key={item.namaPotensi}>
                <div className='w-full h-40 overflow-hidden rounded-t-lg'>
                  <img
                    className='object-contain object-center'
                    src={item.image}
                    alt='image not found'
                  />
                </div>
                <div className='bg-white p-5 rounded-b-lg space-y-2 w-full'>
                  <h1 className='font-bold text-normal leading-8 md:text-lg md:leading-8'>
                    {item.namaPotensi}
                  </h1>
                  <p className='text-normal leading-8 md:text-lg md:leading-8'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Potensi;
