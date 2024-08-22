"use client";
import Loading from "@/components/shared/loading";
import { Input } from "@/components/ui/input";
import { apiKey, baseUrl, imgUrl } from "@/service";
import { fetcher } from "@/service/fetcher";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import { TMovies } from "../../../types";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Search = () => {
  const [search, setSearch] = useState("");
  const [params, setParams] = useState("");
  const [pageIndex, setPageIndex] = useState(1);

  const getKey = () => {
    return `${baseUrl}/search/multi?${apiKey}&query=${params}&include_adult=false&language=en-US&page=${pageIndex}`;
  };

  const { data, isLoading } = useSWR(getKey, fetcher);

  const searchHandler = () => {
    setParams(search);
  };

  const nextPageHandler = () => {
    if (pageIndex === data?.total_pages) {
      setPageIndex(1);
    } else {
      setPageIndex(pageIndex + 1);
    }
  };

  return (
    <div className="pt-24 space-y-5 card">
      <div className="flex gap-2 justify-end">
        <Input
          className="bg-inherit w-full md:w-1/4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={searchHandler}>Search</Button>
      </div>

      {isLoading && <Loading />}
      {!!data?.results?.length ? (
        <>
          <div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-5">
            {data?.results?.map((movie: TMovies) => (
              <>
                {movie?.media_type === "movie" ? (
                  <Link href={`/movies/${movie.id}`} key={movie.id}>
                    <Image
                      key={movie?.id}
                      src={imgUrl + movie?.poster_path}
                      alt={movie?.name || movie?.title}
                      width={65}
                      height={30}
                      className="w-full rounded-xl transition-all hover:scale-110"
                    />
                  </Link>
                ) : (
                  <Link href={`/shows/${movie?.id}`}>
                    <Image
                      key={movie?.id}
                      src={imgUrl + movie?.poster_path}
                      alt={movie?.name || movie?.title}
                      width={65}
                      height={30}
                      className="w-full rounded-xl transition-all hover:scale-110"
                    />
                  </Link>
                )}
              </>
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
        </>
      ) : (
        <p className="text-center">No search results yet</p>
      )}
    </div>
  );
};

export default Search;
