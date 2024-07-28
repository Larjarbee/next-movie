import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroPng from "@/assets/pngs/hero.png";
import backgroundPng from "@/assets/pngs/Background Images.png";
import PlayIcon from "@/assets/svgs/play";
import HeadsetIcon from "@/assets/svgs/headset";
import TvIcon from "@/assets/svgs/tv";
import TabletIcon from "@/assets/svgs/tablet";
import PhoneIcon from "@/assets/svgs/phone";
import LaptopIcon from "@/assets/svgs/laptop";
import GameIcon from "@/assets/svgs/game";
import { fetchAPI } from "@/service";
import ArrowLeftIcon from "@/assets/svgs/arrow-left";
import ArrowRightIcon from "@/assets/svgs/arrow-right";
import List from "@/components/home/list";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Trending from "@/components/home/Trending";

export default async function Home() {
  const data = await fetchAPI("movie/popular?language=en-US");
  console.log(data);

  return (
    <div className="space-y-20">
      <div className="pt-20 space-y-5">
        <Trending />

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-4xl font-semibold">
            The Best Streaming Experience
          </h2>
          <p>
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>

          <Button className="gap-2">
            <span>
              <PlayIcon />
            </span>{" "}
            Start Watching Now
          </Button>
        </div>
      </div>

      <div className="card space-y-10">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h4>Explore our wide variety of categories</h4>
            <p>
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>

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

      <div className="card space-y-10">
        <div className="space-y-2">
          <h4>We Provide you streaming experience across various devices.</h4>
          <p>
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of <br /> devices, ensuring that you never miss a moment
            of entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Smartphones",
              description:
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
              svg: <PhoneIcon />,
            },
            {
              title: "Tablet",
              description:
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
              svg: <TabletIcon />,
            },
            {
              title: "Smart TV",
              description:
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
              svg: <TvIcon />,
            },
            {
              title: "Laptops",
              description:
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
              svg: <LaptopIcon />,
            },
            {
              title: "Gaming Consoles",
              description:
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
              svg: <GameIcon />,
            },
            {
              title: "VR Headsets ",
              description:
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
              svg: <HeadsetIcon />,
            },
          ].map((el) => (
            <div
              key={el.title}
              className="p-10 space-y-4 border border-Black-90 rounded-xl bg-gradient-to-tr from-[#0F0F0F] from-40% via-[#0F0F0F] via-60% to-[#e500001f] to-99% ..."
            >
              <div className="flex items-center gap-4">
                <div className="bg-Black-50 p-4 border border-Black-60 rounded-xl">
                  {el.svg}
                </div>
                <h6>{el.title}</h6>
              </div>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card space-y-10">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h4>Frequently Asked Questions</h4>
            <p>
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>

          <Button>Ask Question</Button>
        </div>

        <div>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {[
              {
                question: "What is StreamVibe?",
                answer:
                  "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
              },
              {
                question: "How much does StreamVibe cost?",
                answer:
                  "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
              },
              {
                question: "What content is available on StreamVibe?",
                answer:
                  "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
              },
              {
                question: "How can I watch StreamVibe?",
                answer:
                  "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
              },
              {
                question: "How do I sign up for StreamVibe?",
                answer:
                  "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
              },
              {
                question: "What is the StreamVibe free trial?",
                answer:
                  "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
              },
              {
                question: "How do I contact StreamVibe customer support?",
                answer:
                  "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
              },
              {
                question: "What are the StreamVibe payment methods?",
                answer:
                  "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="card space-y-10">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h4>Choose the plan that's right for you</h4>
            <p>
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>

          <div className="flex items-center gap-4 bg-Black-45 p-1 rounded-xl border-2 border-Black-90">
            <Button size="sm" variant="ghost" className="bg-Black-60">
              Monthly
            </Button>
            <Button size="sm" variant="ghost" className="bg-Black-45">
              Yearly
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              name: "Basic Plan",
              description:
                "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
              price: "$9.99",
            },
            {
              name: "Standard Plan",
              description:
                "Access to a wider selection of movies and shows, including most new releases and exclusive content",
              price: "$12.99",
            },
            {
              name: "Premium Plan",
              description:
                "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
              price: "$14.99",
            },
          ].map((sub) => (
            <div
              key={sub.name}
              className="bg-Black-80 space-y-5 rounded-xl p-8"
            >
              <h6>{sub.name}</h6>
              <p>{sub.description}</p>
              <div className="flex gap-1">
                <h4>{sub.price}</h4>
                <p className="flex flex-col justify-end">/month</p>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" className="bg-Black-45">
                  Start Free Trial
                </Button>
                <Button>Choose Plan</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card relative">
        <Image alt="backgroundPng" src={backgroundPng} />
        <div className="absolute m-0 inset-0 px-10 flex justify-between items-center md:px-20">
          <div className="space-y-2">
            <h4>Frequently Asked Questions</h4>
            <p>
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>

          <Button>Ask Question</Button>
        </div>
      </div>
    </div>
  );
}
