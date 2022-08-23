// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./style";
import Gif from "../../../img/giftech.gif";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Card>
          <img src={Gif} />
          <a>Slide 1</a>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card>
          <img src={Gif} />
          <a>Slide 2</a>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card>
          <img src={Gif} />
          <a>Slide 3</a>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card>
          <img src={Gif} />
          <a>Slide 4</a>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card>
          <img src={Gif} />
          <a>Slide 5</a>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};
