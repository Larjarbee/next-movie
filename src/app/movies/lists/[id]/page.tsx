import { apiKey, baseUrl, imgUrl } from "@/service";
import Link from "next/link";
import React from "react";
import { TMovies } from "../../../../../types";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@/service/fetcher";
import Loading from "@/components/shared/loading";

const MovieLists = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useSWR(
    `${baseUrl}discover/movie?${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${params.id}`,
    fetcher
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="card grid grid-cols-2 gap-1 pt-24 md:grid-cols-4 lg:grid-cols-6">
          {data?.results?.map((movie: TMovies) => (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <Image
                key={movie.id}
                src={imgUrl + movie.poster_path}
                alt={movie.name || movie.title}
                width={65}
                height={30}
                className="w-full rounded-xl transition-all hover:scale-110"
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieLists;
