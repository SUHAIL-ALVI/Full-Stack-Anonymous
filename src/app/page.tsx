import Image from "next/image";

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400 text-white">
     <h1 className="text-amber-300 absolute ">Welcome to My App</h1>
    <div className="flex flex-col items-center bg-white opacity-5 p-10 rounded-lg realative">
      
    <p>This is a simple Next.js application.</p>
    </div>
   
   </main>
  );
}
