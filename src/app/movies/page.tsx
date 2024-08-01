import ArrowLeftIcon from "@/assets/svgs/arrow-left";
import ArrowRightIcon from "@/assets/svgs/arrow-right";
import List from "@/components/movie/list";
import ListTv from "@/components/movie/list-tv";
import Trending from "@/components/movie/Trending";
import { Button } from "@/components/ui/button";
import React from "react";

function Movies() {
  return (
    <div className="space-y-20 pt-20">
      <Trending />

      <div className="card border border-Black-90 p-5 space-y-5 rounded-xl">
        <p className="bg-Red-45 px-4 py-2 -mt-10 rounded-lg text-white w-fit">
          Movies
        </p>

        <div className="space-y-5">
          <div className="flex justify-between items-start gap-4 flex-col md:flex-row md:items-center">
            <h4>Our Genres</h4>

            <div className="flex items-center gap-6 bg-Black-45 p-2 rounded-xl border-2 border-Black-90">
              <Button
                size="icon"
                variant="ghost"
                className="swiper-button-prev bg-Black-60"
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="swiper-button-next bg-Black-60"
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </div>

          <List />
        </div>
      </div>

      <div className="card border border-Black-90 p-5 space-y-5 rounded-xl">
        <p className="bg-Red-45 px-4 py-2 -mt-10 rounded-lg text-white w-fit">
          Shows
        </p>
        <div className="space-y-5">
          <div className="flex justify-between items-start gap-4 flex-col md:flex-row md:items-center">
            <h4>Popular Shows Genres</h4>

            <div className="flex items-center gap-6 bg-Black-45 p-2 rounded-xl border-2 border-Black-90">
              <Button
                size="icon"
                variant="ghost"
                className="swiper-button-prev bg-Black-60"
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="swiper-button-next bg-Black-60"
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
          <ListTv />
        </div>
      </div>
    </div>
  );
}

export default Movies;
