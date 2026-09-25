import Link from 'next/link';

export default function NotFound() {
     return (
          <div className="flex min-h-screen items-center justify-center bg-[#111111] px-5 text-white">
               <div className="text-center">
                    <h1 className="text-8xl font-bold text-lime-400">404</h1>

                    <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>

                    <p className="mt-3 text-gray-400">
                         Sorry, the page you are looking for does not exist.
                    </p>

                    <Link
                         href="/"
                         className="mt-7 inline-block rounded-md bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
                    >
                         Back to Home
                    </Link>
               </div>
          </div>
     );
}
