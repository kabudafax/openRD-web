import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/home`)

  return (
    // <div className="min-h-screen">
    //   <nav className="fixed top-0 left-0 right-0 bg-white shadow-md">
    //     <div className="max-w-7xl mx-auto px-4">
    //       <div className="flex justify-between items-center h-16">
    //         <div className="flex items-center">
    //           <Image 
    //             src="/logo.png"
    //             alt="Logo"
    //             width={40}
    //             height={40}
    //             className="cursor-pointer"
    //           />
    //           <span className="ml-2 text-xl font-bold">OpenRD</span>
    //         </div>
    //         <div className="flex space-x-8">
    //           <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
    //             Dashboard
    //           </a>
    //           <a href="/projects" className="text-gray-600 hover:text-gray-900">
    //             Projects
    //           </a>
    //           <a href="/about" className="text-gray-600 hover:text-gray-900">
    //             About
    //           </a>
    //           <a href="/contact" className="text-gray-600 hover:text-gray-900">
    //             Contact
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>

    //   <main className="pt-16">
    //     <div className="max-w-7xl mx-auto px-4 py-12">
    //       <h1 className="text-4xl font-bold text-center">Welcome to OpenRD</h1>
    //       <p className="mt-4 text-xl text-center text-gray-600">
    //         Your platform for open research and development
    //       </p>
    //     </div>
    //   </main>
    // </div>


    <div></div>
  );
}
