import Link from "next/link";
import React from "react";
import { TMovies } from "../../../types";
import { imgUrl } from "@/service";

const TrendingList = (movie: TMovies) => {
  return (
    <Link href={`${`/movies/${movie.id}`}`}>
      <div
        className="h-[26rem] w-auto rounded-lg hover:opacity-50 "
        style={{
          backgroundImage: `url( ${imgUrl + movie.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[26rem] rounded-lg bg-gradient-to-t from-black ...">
          <div className="flex justify-center items-center gap-5 p-10 rounded-lg flex-col md:flex-row">
            <img
              className="rounded-lg"
              src={imgUrl + movie.poster_path}
              alt="img"
              width={200}
            />

            <h1 className="text-lg text-white md:text-4xl">
              {movie.title || movie.name}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingList;
