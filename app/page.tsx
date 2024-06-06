import Image from "next/image";
import data from "../data.json";

function LinkCard({ href, title, image }: {href: string, title: string, image?: string}) {
  return (
    <a 
    href={href} 
    className="flex items-center p-4 w-full rounded-md scale-90 text-black hover:text-white hover:scale-95 hover:bg-sky-700 transition-all border border-orange-600 bg-sky-300 mb-3">
      <div className="flex flex-col text-center">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <div className="flex place-items-center flex-col mx-auto w-full justify-center mt-6 p-10">
        <Image 
          className="rounded-full"
          alt={data.name} 
          src={data.avatar} 
          width="200" 
          height="200"
          />
        <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
          {data.links.map((link) => (
            <LinkCard key={link.url} href={link.url} {...link} />
          ))}
      </div>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/b2e19fb5-3de9-440f-ac2a-7d1a0d0ae9b1/webchat/config.js" defer></script>
    </>
    
  );
}
