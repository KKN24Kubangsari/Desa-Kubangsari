import wilayahLogo from '../assets/images/map.png';

const Wilayah = () => {
  return (
    <>
      <section className='container py-40 px-6 md:px-6 lg:px-[7rem]' id='wilayah'>
        <div className='flex gap-6 flex-col'>
          <div className='flex gap-4 items-center'>
            <img src={wilayahLogo} alt='image not found' />
            <h1 className='font-bold font-barlow text-3xl md:text-4xl text-blackText'>
              Wilayah
            </h1>
          </div>
          <div className='self-center w-full'>
            <a href='https://maps.app.goo.gl/EcFvT7355duvzDmF6'>
              <img
                className='rounded-lg shadow-slate-500/10 shadow-lg object-fit w-full min-w-[300px] min-h-[200px] max-h-[920px]'
                src='./src/assets/images/wilayah.png'
                alt='image not found'
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wilayah;
