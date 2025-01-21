import wilayahLogo from "/public/images/map.png";

const Wilayah = () => {
   return (
      <>
         <section
            className="container py-40 px-6 md:px-6 lg:px-[7rem]"
            id="wilayah"
         >
            <div className="flex gap-6 flex-col">
               <div className="flex gap-4 items-center">
                  <img src={wilayahLogo} alt="image not found" />
                  <h1 className="font-bold font-barlow text-3xl md:text-4xl text-blackText">
                     Wilayah
                  </h1>
               </div>
               <div className="self-center w-full rounded-lg  shadow-slate-500/25 shadow-lg">
                  <iframe
                     className="rounded-lg w-full h-[30rem] md:h-[35rem]"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78412.24668441895!2d108.19092837915711!3d-7.730407975621901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65e7ff54333863%3A0x4071250f097d876b!2sKubangsari%2C%20Cikalong%2C%20Tasikmalaya%20Regency%2C%20West%20Java!5e1!3m2!1sen!2sid!4v1737440534118!5m2!1sen!2sid"
                     allowFullscreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
            </div>
         </section>
      </>
   );
};

export default Wilayah;
