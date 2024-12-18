import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { Link } from "react-router-dom";
import { superDealsData } from "@/db/superDealsData";
import { Navigation } from "swiper/modules";

const TodayDeals = () => {
  return (
    <section className="container pt-8">
      <h2 className="text-center font-bold text-[32px]">Today's deals</h2>
      <div className="grid grid-cols-2 gap-[35px] mt-6">
        <div className="relative bg-[url('https://ae01.alicdn.com/kf/S750461e03a75471cac965e67d7d557229.jpg')] bg-cover bg-no-repeat group/super">
          <div className="pt-6 flex flex-col items-center">
            <h6 className="text-2xl font-bold leading-[31px] text-center text-white">SuperDeals</h6>
            <div className="px-3 py-1.5 bg-white rounded-[20px] inline-flex items-center gap-2 mt-2 font-medium">
              <img src="https://ae01.alicdn.com/kf/S493ec270c78c4b8b90b8993ec0197d3a6/48x48.png" alt="clock" className="size-6" />
              <span className="leading-none inline-block">Ends in: 18:23:20</span>
              <span><ChevronRight size={17} /></span>
            </div>
          </div>
          <div className="py-6 px-8">
            <Swiper
              slidesPerView={3}
              spaceBetween={16}
              navigation={{
                nextEl: ".next-el",
                prevEl: ".prev-el"
              }}
              loop
              modules={[Navigation]}
            >
              {
                superDealsData.map(({ discountPercentage, id, price, thumbnail, title }) => {
                  return (
                    <SwiperSlide key={id}>
                      <Card discountPercentage={discountPercentage} discountPercentageShow={true} price={price} thumbnail={thumbnail} title={title} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover/super:opacity-100 transition-all duration-300">
            <div className="prev-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
            <div className="next-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
          </div>
        </div>

        <div className="relative bg-[url('https://ae01.alicdn.com/kf/Sc8908a992f6341cda52c8b6ac2d302efG.jpg')] bg-cover bg-no-repeat group/big">
          <div className="pt-6 flex flex-col items-center">
            <h6 className="text-2xl font-bold leading-[31px] text-center text-white">Big Save</h6>
            <div className="px-3 py-1.5 bg-white rounded-[20px] inline-flex items-center gap-2 mt-2 font-medium relative overflow-hidden">
              <div className="flex">
                <img src="https://ae01.alicdn.com/kf/S588971e0387446a4bcf202557655fc61t.png" alt="clock" className="size-6 rounded-full translate-x-0 relative z-10" />
                <img src="https://ae01.alicdn.com/kf/S213f18d82e794cb580fc2b59738b061fQ.png" alt="clock" className="size-6 rounded-full absolute -translate-x-2 z-[2]" />
                <img src="https://ae01.alicdn.com/kf/S1d5267d0fddd4213810e41ed1a4ebf247.png" alt="clock" className="size-6 rounded-full absolute -translate-x-10 z-[1]" />
              </div>
              <span className="leading-none inline-block">500+ Brands</span>
              <span><ChevronRight size={17} /></span>
            </div>
          </div>
          <div className="py-6 px-8">
            <Swiper
              slidesPerView={3}
              spaceBetween={16}
              navigation={{
                nextEl: ".next-el",
                prevEl: ".prev-el"
              }}
              loop
              modules={[Navigation]}
            >
              {
                superDealsData.map(({ id, price, thumbnail, title }) => {
                  return (
                    <SwiperSlide key={id}>
                      <Card discountPercentageShow={false} price={price} thumbnail={thumbnail} title={title} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover/big:opacity-100 transition-all duration-300">
            <div className="prev-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
            <div className="next-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodayDeals



interface CardPropsType {
  discountPercentage?: number,
  price: number,
  thumbnail: string,
  title: string,
  discountPercentageShow: boolean
}
const Card = ({ discountPercentage, price, thumbnail, title, discountPercentageShow }: CardPropsType) => {
  return (
    <div className="p-2 bg-background">
      <Link to={"#"}>
        <img src={thumbnail} alt="img" />
      </Link>
      <div className="mt-3">
        <Link to={"#"} className="line-clamp-2 font-[450] leading-5">{title}</Link>
        <div className="mt-4">
          <p className="font-bold text-xl inline-block leading-none mr-2">US ${price}</p>
          <p className="line-through text-[#979797] inline-block leading-none text-base">US $37.29</p>
        </div>
        {
          discountPercentageShow ?
            <div className="inline-block text-sm bg-[#ed383f] px-1 py-[3px] text-white mt-1.5">-{discountPercentage}%</div>
            :
            <div className="text-[#ed383f] px-1 py-[3px] mt-1.5 leading-[14px] flex gap-2">
              You save
              <span className="font-semibold">US $18.82</span>
            </div>
        }
      </div>
    </div>
  )
}