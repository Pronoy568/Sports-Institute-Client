import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/b1.jpg";
import banner2 from "../../../assets/banner/b2.jpg";
import banner3 from "../../../assets/banner/b3.jpg";
import banner4 from "../../../assets/banner/b4.jpg";
import banner5 from "../../../assets/banner/b5.jpg";
import banner6 from "../../../assets/banner/b6.jpg";

const Banner = () => {
  return (
    <div className="text-center">
      <Carousel>
        <div>
          <div className="relative w-full md:h-[680px]">
            <img src={banner1} className="w-full h-full" />
            <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl md:bg-gradient-to-l from-[#272727] to-[rgba(21,21,21,0)]">
              <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-9/12 md:w-3/4 mx-auto md:text-right text-center">
                <h2 className="text-3xl font-bold">
                  Winning isn't everything, but wanting to win is.
                </h2>
                <p className="md:text-xl text-sm">
                  The difference between the impossible and the possible <br />{" "}
                  lies in a man's determination.
                </p>
                <div className="md:pb-0 pb-5">
                  <button className="btn btn-outline btn-warning">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full md:h-[680px]">
            <img src={banner2} className="w-full h-full" />
            <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl md:bg-gradient-to-l from-[#272727] to-[rgba(21,21,21,0)]">
              <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-9/12 md:w-3/4 mx-auto md:text-right text-center">
                <h2 className="text-3xl font-bold">
                  They are who we thought they were!
                </h2>
                <p className="md:text-xl text-sm">
                  Never give up! Failure and rejection are only the first <br />{" "}
                  step to succeeding.
                </p>
                <div className="md:pb-0 pb-5">
                  <button className="btn btn-outline btn-warning">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full md:h-[680px]">
            <img src={banner3} className="w-full h-full" />
            <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl md:bg-gradient-to-l from-[#272727] to-[rgba(21,21,21,0)]">
              <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-9/12 md:w-3/4 mx-auto md:text-right text-center">
                <h2 className="text-3xl font-bold">
                  A champion is someone who gets up when he can't.
                </h2>
                <p className="md:text-xl text-sm">
                  A fit body, a calm mind, a house full of love. These things
                  cannot <br /> be bought – they must be earned.
                </p>
                <div className="md:pb-0 pb-5">
                  <button className="btn btn-outline btn-warning">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full md:h-[680px]">
            <img src={banner4} className="w-full h-full" />
            <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl md:bg-gradient-to-l from-[#272727] to-[rgba(21,21,21,0)]">
              <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-9/12 md:w-3/4 mx-auto md:text-right text-center">
                <h2 className="text-3xl font-bold">
                  Physical fitness is the first requisite of happiness.
                </h2>
                <p className="md:text-xl text-sm">
                  Always work hard, never give up, and fight until the end
                  because it’s <br /> never really over until the whistle blows.
                </p>
                <div className="md:pb-0 pb-5">
                  <button className="btn btn-outline btn-warning">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full md:h-[680px]">
            <img src={banner5} className="w-full h-full" />
            <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl md:bg-gradient-to-l from-[#272727] to-[rgba(21,21,21,0)]">
              <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-9/12 md:w-3/4 mx-auto md:text-right text-center">
                <h2 className="text-3xl font-bold">
                  Overpower, Overtake, Overcome.
                </h2>
                <p className="md:text-xl text-sm">
                  If you're happy, if you're feeling good, then <br /> nothing
                  else matters.
                </p>
                <div className="md:pb-0 pb-5">
                  <button className="btn btn-outline btn-warning">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full md:h-[680px]">
            <img src={banner6} className="w-full h-full" />
            <div className="absolute h-full w-full flex items-center right-0 bottom-0 bg-gradient-to-bl md:bg-gradient-to-l from-[#272727] to-[rgba(21,21,21,0)]">
              <div className="text-white md:space-y-7 space-y-3 md:pl-12 w-9/12 md:w-3/4 mx-auto md:text-right text-center">
                <h2 className="text-3xl font-bold">
                  Don’t be afraid of failure. This is the way to succeed.
                </h2>
                <p className="md:text-xl text-sm">
                  Believe me, the reward is not so great without the struggle.
                </p>
                <div className="md:pb-0 pb-5">
                  <button className="btn btn-outline btn-warning">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
