import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
     return (
          <footer className="border-t border-[#1C1F26] px-5 lg:px-0 py-5 lg:py-10">
               <div className="container-custom flex flex-col lg:flex-row justify-between gap-5 items-center">
                    <Link href="/" className="flex items-center gap-4">
                         <Image
                              src="/images/svg.png"
                              alt="footer logo"
                              width={20}
                              height={20}
                              className="size-7 object-cover"
                         />

                         <span className="font-heading text-[18px] font-bold uppercase text-text-primary">
                              FitLog
                         </span>
                    </Link>
                    <p className="text-text-muted text-center text-[14px]">
                         © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
                         honest.
                    </p>
               </div>
          </footer>
     );
};

export default Footer;
