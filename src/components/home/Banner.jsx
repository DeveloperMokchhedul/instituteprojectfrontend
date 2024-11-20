import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SwipperData } from "../../api/Swipper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  const navigate = useNavigate();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 3000)}s`;
    }
  };

  return (
    <div className="pb-[30px]">
      <div className="w-full h-screen absolute top-0 left-0 right-0">

      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >



        {SwipperData && SwipperData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
              {/* Image section */}
              <div className="md:w-1/2 w-full flex items-center md:justify-end">
                <img className="rounded-2xl" src={item.image} alt="Banner" />
              </div>

              {/* Text content section */}
              <div className="md:w-1/2 w-full">
                <h1 className="text-[60px] font-bold font-gamamli">
                  {item.title}
                </h1>
                <p className="text-[25px] font-onest font-semibold">{item.subtitle}</p>
                <p className="pb-[30px]">
                  {item.description}
                </p>
                <button onClick={() => navigate("/books")} className="bg-green-500 px-4 py-2 rounded-md text-white">Find Your Book</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
