import { AuthorsProvider } from "@/providers/AuthorsProvider";
import Image from "next/image";

export default function Home() {
  return (
    <AuthorsProvider>
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <title>Parcial WEB SSD</title>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 px-16 bg-white dark:bg-black text-xl">
       <a>Bienvenido al Parcial  de Web de Samuel Suarez - 202321403</a>
       <div className="flex justify-center w-full">
          <Image src="/logo_uniandes.png" alt="Uniandes logo" width={400} height={200} />
        </div>
      </main>
    </div>
    </AuthorsProvider>
  );
}
