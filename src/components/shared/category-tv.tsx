import React from "react";
import Image from "next/image";
import { apiKey, baseUrl, imgUrl } from "@/service";
import useSWR from "swr";
import { fetcher } from "@/service/fetcher";
import { TMovies } from "../../../types";
import Loading from "./loading";
import Link from "next/link";

function CategoryTvList({ id }: { id: number }) {
  const { data, isLoading } = useSWR(
    `${baseUrl}/discover/tv?${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,
    fetcher
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-2 gap-1">
      {data?.results.slice(0, 4).map((movie: TMovies) => (
        <Link href={`/movies/shows/${movie.id}`} key={movie.id}>
          <Image
            key={movie.id}
            src={imgUrl + movie.poster_path}
            alt={movie.name || movie.title}
            width={65}
            height={30}
            className="w-auto h-auto rounded-xl transition-all hover:scale-110"
          />
        </Link>
      ))}
    </div>
  );
}

export default CategoryTvList;
