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
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Card>
          <img src={Gif} />
          <p>Slide 1</p>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card>
          <img src={Gif} />
          <p>Slide 2</p>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card>
          <img src={Gif} />
          <p>Slide 3</p>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card>
          <img src={Gif} />
          <p>Slide 4</p>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card>
          <img src={Gif} />
          <p>Slide 5</p>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};
