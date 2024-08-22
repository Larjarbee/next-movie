"use client";
import { apiKey, baseUrl, imgUrl } from "@/service";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { TMovies } from "../../../../../types";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import Loading from "@/components/shared/loading";
import { fetcher } from "@/service/fetcher";

const TvLists = ({ params }: { params: { id: string } }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, isLoading } = useSWR(
    `${baseUrl}/discover/tv?${apiKey}&include_adult=false&include_video=false&language=en-US&page=${pageIndex}&sort_by=popularity.desc&with_genres=${params.id}`,
    fetcher
  );
  console.log(data);

  const nextPageHandler = () => {
    if (pageIndex === data?.total_pages) {
      setPageIndex(1);
    } else {
      setPageIndex(pageIndex + 1);
    }
  };

  return (
    <div className="card pt-24 space-y-5">
      {isLoading && <Loading />}
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-5">
        {data?.results?.map((movie: TMovies) => (
          <Link href={`/shows/${movie.id}`} key={movie.id}>
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
      <div className="flex justify-center py-10">
        <Button
          onClick={nextPageHandler}
          disabled={pageIndex === data?.total_pages}
          className="w-1/4"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TvLists;
