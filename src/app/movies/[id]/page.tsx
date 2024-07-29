"use client";

import { useState } from "react";
import YouTube from "react-youtube";
import useSWR from "swr";
import { apiKey, baseUrl, imgUrl } from "@/service";
import { fetcher } from "@/service/fetcher";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Languages,
  LayoutGrid,
  Plus,
  Star,
  ThumbsUp,
  Volume2,
  X,
} from "lucide-react";
import PlayIcon from "@/assets/svgs/play";
import { Ratings } from "@/components/shared/rating";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import ArrowLeftIcon from "@/assets/svgs/arrow-left";
import ArrowRightIcon from "@/assets/svgs/arrow-right";

const MovieDetail = () => {
  const [playing, setPlaying] = useState(false);
  const { id } = useParams();

  const { data: movie, isLoading } = useSWR(
    `${baseUrl}/movie/${id}?${apiKey}&language=en-US&append_to_response=videos`,
    fetcher
  );

  const { data: credits } = useSWR(
    `${baseUrl}/movie/${id}/credits?${apiKey}&language=en-US`,
    fetcher
  );
  const { data: reviews } = useSWR(
    `${baseUrl}/movie/${id}/reviews?${apiKey}&language=en-US`,
    fetcher
  );

  const trailer = movie?.videos?.results.find(
    (vid: any) => vid.name.includes("Trailer") || vid.site === "YouTube"
  );

  const videoOnReady = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <div className="card pt-20">
      <div
        className="h-[35rem] w-auto rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url( ${imgUrl + movie?.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center h-[35rem] rounded-xl bg-gradient-to-t from-black ...">
          <div className="pt-32 space-y-4">
            <img
              className="rounded-xl mx-auto"
              src={imgUrl + movie?.poster_path}
              alt="img"
              width={200}
            />

            <div className="space-y-2 text-center">
              <h4 className="text-white bottom-0">
                {movie?.title || movie?.name}
              </h4>
              {/* <p className="max-w-4xl mx-auto">{movie?.overview}</p> */}

              <div className="flex items-center justify-center gap-4">
                {trailer ? (
                  <Button
                    onClick={() => {
                      setPlaying(true);
                      window.scrollTo(0, 0);
                    }}
                    className="gap-2"
                    size="sm"
                  >
                    <span>
                      <PlayIcon />
                    </span>{" "}
                    Play Trailer
                  </Button>
                ) : (
                  "Sorry, no trailer available"
                )}

                <Button size="icon" variant="ghost" className="bg-Black-60">
                  <Plus />
                </Button>
                <Button size="icon" variant="ghost" className="bg-Black-60">
                  <ThumbsUp />
                </Button>
                <Button size="icon" variant="ghost" className="bg-Black-60">
                  <Volume2 />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {playing && (
          <YouTube
            videoId={trailer?.key}
            className="h-[35rem] rounded-lg absolute top-20 left-0 right-0 bottom-0"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
            onReady={videoOnReady}
          />
        )}
      </div>
      {playing && (
        <div className="px-5 pb-5 w-full ml-0 md:ml-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setPlaying(false);
              window.scrollTo(0, 0);
            }}
          >
            <X />
          </Button>
        </div>
      )}

      <div className="flex gap-4 my-10 font-thin flex-col md:flex-row">
        <div className="w-full space-y-5 md:w-2/3">
          <div className="bg-Black-55 p-5 space-y-5 rounded-xl border border-Black-80">
            <p>Description</p>
            <h6 className="text-sm">{movie?.overview}</h6>
          </div>

          <div className="bg-Black-55 p-5 space-y-5 rounded-xl border border-Black-80">
            <div className="flex justify-between items-center">
              <p>Cast</p>
              <div className="flex items-center gap-6">
                <Button
                  size="icon"
                  variant="ghost"
                  className="swiper-btn-prev bg-Black-60"
                >
                  <ArrowLeftIcon />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="swiper-btn-next bg-Black-60"
                >
                  <ArrowRightIcon />
                </Button>
              </div>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              navigation={{
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev",
                // clickable: true,
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {credits?.cast?.map((el: any) => (
                <SwiperSlide key={el?.id}>
                  <div className="space-y-1">
                    {el?.profile_path ? (
                      <Image
                        src={imgUrl + el?.profile_path}
                        alt={el?.name}
                        width={200}
                        height={80}
                        className="rounded-xl"
                      />
                    ) : (
                      <div className="w-[115px] h-[180px] rounded-xl bg-Black-90" />
                    )}
                    <p className="text-xs line-clamp-1">{el?.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="bg-Black-55 p-5 space-y-5 rounded-xl border border-Black-80">
            <div className="flex justify-between items-center">
              <p>Crew</p>
              <div className="flex items-center gap-6">
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
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {credits?.crew?.map((el: any) => (
                <SwiperSlide key={el?.id}>
                  <div className="space-y-1">
                    {el?.profile_path ? (
                      <Image
                        src={imgUrl + el?.profile_path}
                        alt={el?.name}
                        width={200}
                        height={80}
                        className="rounded-xl"
                      />
                    ) : (
                      <div className="w-[115px] h-[180px] rounded-xl bg-Black-90" />
                    )}
                    <p className="text-xs line-clamp-1">{el?.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="bg-Black-55 p-5 space-y-5 rounded-xl border border-Black-80">
            <p>Reviews</p>
            {reviews?.results.length > 0 ? (
              <>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={5}
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    // 1024: {
                    //   slidesPerView: 2,
                    // },
                  }}
                  pagination={{ el: ".swiper-pagination", clickable: true }}
                  navigation={{
                    nextEl: ".swiper-btn-next",
                    prevEl: ".swiper-btn-prev",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {reviews?.results?.map((el: any) => (
                    <SwiperSlide key={el?.id}>
                      <div className="space-y-1 bg-Black-45 p-5 h-44 rounded-xl">
                        <div className="flex justify-between items-center">
                          <h6>{el?.author}</h6>
                          <div className="flex items-center gap-1 border-b-Black-50 rounded-full p-1 border border-Black-80">
                            <Ratings
                              rating={el?.author_details?.rating / 2}
                              totalStars={5}
                              size={12}
                            />
                            <p className="text-xs">
                              {el?.author_details?.rating / 2}
                            </p>
                          </div>
                        </div>
                        <p className="line-clamp-5">{el?.content}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="flex items-center justify-center gap-6">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="swiper-btn-prev bg-Black-60"
                  >
                    <ArrowLeftIcon />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="swiper-btn-next bg-Black-60"
                  >
                    <ArrowRightIcon />
                  </Button>
                </div>
              </>
            ) : (
              <p>No review yet</p>
            )}
          </div>
        </div>
        <div className="w-full bg-Black-55 h-fit p-5 space-y-5 rounded-xl border border-Black-80 md:w-1/3">
          <div className="space-y-2">
            <p className="items-center flex gap-2 font-thin">
              <span>
                <CalendarDays size={15} />
              </span>{" "}
              Released Year
            </p>
            <h6>{movie?.release_date?.slice(0, 4) || "No date"}</h6>
          </div>
          <div className="space-y-2">
            <p className="items-center flex gap-2 font-thin">
              <span>
                <Languages size={15} />
              </span>{" "}
              Available Languages
            </p>
            <div className="flex gap-2 items-center">
              {movie?.spoken_languages?.map((language: any, index: number) => (
                <h6
                  key={index}
                  className="text-xs border bg-Black-50 border-Black-80 p-2 rounded-lg"
                >
                  {language?.name}
                </h6>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="items-center flex gap-2 font-thin">
              <span>
                <Star size={15} />
              </span>{" "}
              Ratings
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-xs border bg-Black-50 border-Black-80 p-2 rounded-lg">
                <h6>IMDb</h6>
                <div className="flex items-center gap-1">
                  <Ratings rating={1} totalStars={1} size={15} />
                  <p className="text-xs">
                    {movie?.vote_average.toFixed(1) / 2}
                  </p>
                </div>
              </div>
              <div className="text-xs border bg-Black-50 border-Black-80 p-2 rounded-lg">
                <h6>Status</h6>
                <p className="text-xs">{movie?.status}</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="items-center flex gap-2 font-thin">
              <span>
                <LayoutGrid size={15} />
              </span>{" "}
              Genres
            </p>
            <div className="flex gap-2 items-center">
              {movie?.genres?.map((genre: any) => (
                <h6
                  key={genre?.id}
                  className="text-xs border bg-Black-50 border-Black-80 p-2 rounded-lg"
                >
                  {genre.name}
                </h6>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
