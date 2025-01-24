import fotoApbd from "/public/images/RAPBD.jpg";

const APBDesa = () => {
   return (
      <>
         <section
            className="container py-40 px-6 md:px-6 lg:px-[7rem]"
            id="apbd"
         >
            <div className="flex flex-col gap-6">
               <div className="flex items-center gap-4">
                  <h1 className="font-barlow text-blackText text-3xl md:text-4xl font-bold">
                     APBDesa Kubangsari
                  </h1>
               </div>
               <div className="self-center w-full">
                  <img
                     className="rounded-lg shadow-slate-500/10 shadow-lg object-fit w-full h-auto"
                     src={fotoApbd}
                     alt="image not found"
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default APBDesa;
