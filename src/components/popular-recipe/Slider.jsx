import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.css";
import { Navigation, Autoplay } from "swiper/modules";

import PopularRecipe from "./PopularRecipe";
import aboutImg from "../../assets/img-1.jpg";

import GetRecipes from "../../api/GetRecipes";

const Slider = () => {
  const seafoodRecipes = GetRecipes("Seafood");

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper py-2 sm:py-8"
    >
      {seafoodRecipes.slice(0, 20).map((seafoodRecipe, index) => (
        <SwiperSlide className="flex justify-center" key={index}>
          <PopularRecipe
            title={seafoodRecipe.strMeal}
            img={seafoodRecipe.strMealThumb}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
