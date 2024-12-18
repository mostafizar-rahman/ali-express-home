import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EffectFade, Navigation } from "swiper/modules";
import { homeCategoryData } from "@/db/homeCategoryData";

const HomeCategory = () => {
    return (
        <section className="container mt-8">
            <h2 className="text-center font-bold text-[32px]">Shop by category</h2>
            <div className="grid grid-cols-2 gap-[35px] mt-6">
                <div className="bg-[#1B5F48] 3xl:h-[687px] h-[536px] flex flex-col justify-between">
                    <div className="mt-14 3xl:ml-12 ml-10">
                        <div>
                            <img className="w-auto h-[41px]" src="https://ae01.alicdn.com/kf/S73f17457c7224ac9a7174dafc9bcbd44h.png" />
                        </div>
                        <p className="text-[rgb(255,255,255)] font-[450] mt-2.5 max-w-[292px]">Your fashion choice</p>
                        <Button asChild size={"sm"} className="bg-background text-black rounded-none 3xl:text-xl font-medium 3xl:mt-6 mt-3">
                            <Link to={"#"}>Shop now</Link>
                        </Button>
                    </div>
                    <div className="3xl:mx-12 mx-10 grid grid-cols-3 gap-4 3xl:mb-10 mb-8">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
                <div>
                    <Swiper
                        // slidesPerView={2}
                        className="group"
                        navigation={{
                            nextEl: ".next-el",
                            prevEl: ".prev-el"
                        }}
                        effect="fade"
                        loop
                        modules={[Navigation, EffectFade]}
                    >

                        {
                            homeCategoryData.map(({ categories, id }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <div  className="grid grid-cols-2 3xl:gap-6 gap-4">
                                            {
                                                categories.map(({ id, image, title }) => {
                                                    return (
                                                        <Link key={id} to={"#"} className="block 3xl:h-[213px] h-[168px] max-w-[384px] bg-cover" style={{ backgroundImage: `url(${image})` }}>
                                                            <span className="p-6 font-semibold 3xl:text-2xl text-xl max-w-[135px] block">{title}</span>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                        <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="prev-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
                            <div className="next-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default HomeCategory


const ProductCard = () => {
    return (
        <div className="bg-background p-2 pt-2 pb-3 text-[#222]">
            <div className="relative">
                <div className="bg-[rgba(0,0,0,.03137254901960784)] w-full h-[272px] absolute"></div>
                <Link to={"#"} className="max-w-[205px] max-h-[272px] block">
                    <img src="https://ae-pic-a1.aliexpress-media.com/kf/S696092beee15461387d080cd374f03918.jpg_480x480.jpg_.webp" alt="" />
                </Link>
            </div>
            <div className="mt-3">
                <p className="3xl:text-xl text-base font-bold inline-block">US $99.0</p>
                <p className="3xl:text-base text-xs text-[#979797] inline-block ml-2">US $3.37</p>
                <div className="text-sm flex items-center mt-1.5">
                    <div className="inline-flex items-center gap-1">
                        <img src="https://ae01.alicdn.com/kf/S41f4d1d8fe7b4fe3a65c5450e45c4e9aT/14x14.png" alt="star" className="" />
                        <span className="font-bold inline-block mt-0.5">4.7</span>
                    </div>
                    <span className="block h-2 border-r border-[#dbdbdb] ml-2"></span>
                    <p className="ml-2">
                        <span>420</span>
                        <span className="inline-block ml-[3px]">sold</span>
                    </p>
                </div>
            </div>
        </div>
    )
}