import Image from "next/image";
import data from "../data.json";

function LinkCard({ href, title, image }: {href: string, title: string, image?: string}) {
  if (href === "") {
      return (
        <div className="flex flex-col place-items-center">
            <h2 className="font-bold text-lg text-center">{title}</h2>
        </div>
      );
  } else {
      return (
        <a 
          href={href} 
          className="flex items-center p-4 w-full rounded-md scale-90 text-black hover:text-white hover:scale-95 hover:bg-sky-700 transition-all border border-orange-600 bg-sky-300 mb-3">
          <div className="flex text-center w-full">
            {image && (
              <Image
                className="rounded-sm"
                alt={title}
                src={image}
                width={40}
                height={40} />
            )}
            <h2 className="font-semibold text-xl w-full text-center">{title}</h2>
          </div>
        </a>
      );
  }
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
        <h2 className="text-m mt-5 mb-5 pl-5 sm:pl-56  pr-5 sm:pr-56">{data.description}</h2>
        <Image
          className="mb-5"
          alt="Products and Services"
          src="/res/Product_Banner_DarkGray.png"
          width="1000"
          height="500"
          />
          {data.links.map((link) => (
            <LinkCard key={link.url} href={link.url} {...link} />
          ))}
      </div>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/b2e19fb5-3de9-440f-ac2a-7d1a0d0ae9b1/webchat/config.js" defer></script>
    </>
    
  );
}
