const Footer = () => {
   return (
      <>
         <footer className="bg-secondary">
            <div className="container px-3 md:px-6 lg:px-[7rem] w-full py-6 flex items-center justify-between flex-col md:flex-row lg:flex-row gap-4">
               <div>
                  <p className="font-bold font-inter text-blackText text-center text-normal leading-8">
                     Copyright © 2025 Desa Kubangsari | All Rights Reserved
                  </p>
               </div>
               <div className="flex gap-3">
                  <a href="mailto:desakubangsari82@gmail.com">
                     <img
                        src="./src/assets/images/email.png"
                        alt="image not found"
                     />
                  </a>
                  <a href="https://wa.me/+6285318748666">
                     <img
                        src="./src/assets/images/phone-in-talk.png"
                        alt="image not found"
                     />
                  </a>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
