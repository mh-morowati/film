import { unstable_noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";

const getData = async ()=>{
  const data = await fetch('https://moviesapi.ir/api/v1/movies?page={page}',{cache:'no-store'});
  return data.json();
}

export default async function Home() {
  const data = await getData();
    return (
      <main className="flex flex-col mx-auto gap-8 container">
      <div>
       <div className="flex flex-wrap">
       {data.data.map((mov,i)=>(
          <Link href={`/movies/${mov.id}`} key={i} className="h-[26rem] my-4 w-72 border-2 border-zinc-300 rounded-2xl p-1">
           <div><Image className="mx-auto" width={200} height={220} alt={mov.title} src={mov.poster}/></div>
           <div className="p-2 mt-2">
            <h1 className="bg-red-100 mb-1">{mov.title}</h1>
            <p className="text-xs mt-2">{mov.country}, {mov.year}</p>
           </div>
          </Link>
        ))}
       </div>
      </div>
      </main>
    );
  }