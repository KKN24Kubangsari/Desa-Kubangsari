import strukturOrganisasiLogo from '../assets/images/sitemap.png';
import fotoStrukturOrganisasi from '../assets/images/struktur-organisasi-img.png';

const StrukturOrganisasi = () => {
  return (
    <>
      <section
        className='container py-40 px-6 md:px-6 lg:px-[7rem]'
        id='struktur-organisasi'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            <img src={strukturOrganisasiLogo} alt='image not found' />
            <h1 className='font-barlow text-blackText text-3xl md:text-4xl font-bold'>
              Struktur Organisasi
            </h1>
          </div>
          <div className='self-center w-full'>
            <img
              className='rounded-lg shadow-slate-500/10 shadow-lg object-fit w-full h-auto'
              src={fotoStrukturOrganisasi}
              alt='image not found'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StrukturOrganisasi;
