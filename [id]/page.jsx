import Image from "next/image";
import NotFound from '../../not-found'
const getData = async (id) => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: "no-store",
  });
  return data.json();
};

async function Movie({ params }) {
  const data = await getData(params.id);
  if(!data.id){
    return NotFound()
  }
  return (
        <div>
          <Image
            className="inline-block"
            width={240}
            height={260}
            alt={data.title}
            src={data.poster}
          />
          <div className="p-2 mt-2 inline-block float-right">
            <h1 className=" mb-1 ">{data.title}</h1>
            <p className="text-xs mt-2">
              {data.country}, {data.year}
            </p>
            <p>{data.year}</p>
            <p>{data.director}</p>
            <p>{data.imdb_rating}</p>
            <p>{data.imdb_votes}</p>
          </div>
          {data.images.map((img, i) => (
            <Image
              className="inline-block mx-5"
              key={i}
              width={300}
              height={460}
              alt={data.title}
              src={img}
            />
          ))}
        </div>
  );
}

export default Movie;
