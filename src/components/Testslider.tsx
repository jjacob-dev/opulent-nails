import Tbox from "../components/Tbox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center py-6 md:py-9 text-4xl underline decoration-rose-300 decoration-2 underline-offset-8">
        <div>
          <h1>Testimonies</h1>
        </div>
      </div>

      <div className="flex justify-center items-center w-full pb-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-[90%] h-96 md:w-[65%] md:h-80"
        >
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <Tbox
              desc="Donna always, without fail, does an amazing job on my manicures and pedicures. And I love love love the colours I choose today, there is always an amazing range of colours to choose from."
              name="Caroline"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <Tbox
              desc="I never thought my one-off (or so I thought) set of gel nails would become an obsession, however I’m well and truly addicted.  Donna is the best.  She has so much experience, takes enormous pride in her work, and it’s reflected in her services."
              name="Janene"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <Tbox
              desc="I have been a client of Opulent Nails for a number of years and cannot speak highly enough fo the service which Donna provides. Always very professional, strong hygiene protocols in place and a very experienced nail technician"
              name="Christine"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <Tbox
              desc="Donna did my nails perfectly for the wedding! She colour matched with my dress and we had great chats about multiple topics. I gave her my woes with nails like i didnt want super long or pointy nails or anything that would cause me and potentially other people injury. She also gave me 2 options to doing the nails which was great."
              name="e m"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <Tbox
              desc="Donna has been my nail technician for many years now. She does a fantastic job and I always have beautiful sparkly nails. Donna takes great care to make sure my nails are looked after and kept in good condition."
              name="Liana"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <Tbox
              desc="Donna is a great nail technician. So over the poor service and experience at the usual shopping centre nail bars I was searching for someone local who could give great service and results. Very happy with my gel polish and nail art."
              name="Kate"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <Tbox
              desc="Always great communication before and after appointments. Super friendly and expert skills. I wouldn't go anywhere else!"
              name="Donna"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
