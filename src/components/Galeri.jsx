import galeriLogo from '/public/images/image.png';
import foto4 from '/public/images/image-4.jpg';
import foto5 from '/public/images/image-5.jpg';
import foto6 from '/public/images/image-6.jpg';
import foto7 from '/public/images/image-7.jpg';
import foto8 from '/public/images/image-8.jpg';
import foto9 from '/public/images/image-9.jpg';
import foto10 from '/public/images/image-10.jpg';

const Galeri = () => {
  const images = [
    {
      styleGrid: 'row-span-1 sm:col-span-2 md:col-span-2',
      link: foto4,
    },
    { styleGrid: 'row-span-1', link: foto5 },
    {
      styleGrid: 'row-span-1 col-span-2 sm:col-span-3 md:col-span-1',
      link: foto6,
    },
    {
      styleGrid: 'row-span-1 sm:col-span-1 md:col-span-1 col-span-1',
      link: foto10,
    },
    {
      styleGrid: 'row-span-1 col-span-1 sm:col-span-2 md:col-span-1',
      link: foto9,
    },
    {
      styleGrid: 'row-span-1 sm:col-span-2 col-span-2 md:col-span-2',
      link: foto8,
    },
    {
      styleGrid: 'row-span-1 col-span-2 sm:col-span-1 md:col-span-4 lg:col-span-2',
      link: foto7,
    },
  ];

  return (
    <>
      <section
        className='container py-40 px-6 md:px-6 lg:px-[7rem]'
        id='galeri'>
        <div className='flex flex-col gap-6'>
          <div className='flex gap-4'>
            <img src={galeriLogo} alt='image not found' />
            <h1 className='font-barlow font-bold text-blackText text-3xl md:text-4xl'>
              Galeri
            </h1>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {images.map((image, index) => (
              <div
                className={`${image.styleGrid} overflow-hidden rounded-lg bg-primary shrink-0 h-48 sm:h-60 md:h-72`}
                key={`image-${index + 1}`}>
                <img
                  className='object-center h-full w-full object-cover'
                  src={image.link}
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Galeri;
