import { Dialog, DialogContent, } from "@/components/ui/dialog"
import { AlHeart } from "@/lib/icon"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Navigation } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronLeft, ChevronRight } from "lucide-react"
import SwiperCore from 'swiper';

const productInfo =
{
    id: 1,
    title: "",
    price: "",
    sizes: ["s", "m", "l", "xl", "2xl", "3xl", "4xl", "5xl"],
    images: [
        {
            smallImg: "https://ae-pic-a1.aliexpress-media.com/kf/Saf7b344953994dcc94a80c7f2b87d5e0s.jpg_220x220q75.jpg_.avif",
            bigImg: "https://ae-pic-a1.aliexpress-media.com/kf/Saf7b344953994dcc94a80c7f2b87d5e0s.jpg_960x960q75.jpg_.avif"
        },
        {
            smallImg: "https://ae-pic-a1.aliexpress-media.com/kf/Sb04473ed41f64abd88d30726f54ab1ebT.jpg_220x220q75.jpg_.avif",
            bigImg: "https://ae-pic-a1.aliexpress-media.com/kf/Sb04473ed41f64abd88d30726f54ab1ebT.jpg_960x960q75.jpg_.avif"
        },
        {
            smallImg: "https://ae-pic-a1.aliexpress-media.com/kf/S72ad3e5eb4ee4962a736fe5e89b5e240d.jpg_220x220q75.jpg_.avif",
            bigImg: "https://ae-pic-a1.aliexpress-media.com/kf/S72ad3e5eb4ee4962a736fe5e89b5e240d.jpg_960x960q75.jpg_.avif"
        },
        {
            smallImg: "https://ae-pic-a1.aliexpress-media.com/kf/Sc848537a7dd54f9d88dea36d56ea5b87r.jpg_220x220q75.jpg_.avif",
            bigImg: "https://ae-pic-a1.aliexpress-media.com/kf/Sc848537a7dd54f9d88dea36d56ea5b87r.jpg_960x960q75.jpg_.avif"
        },
    ]
}

const ProductQuickView = ({ isDialogOpen, setIsDialogOpen }: { isDialogOpen: boolean, setIsDialogOpen:Dispatch<SetStateAction<boolean>> }) => {
    const [selectColor, setSelectColor] = useState(0)
    const [selectSize, setSelectSize] = useState("s")
    const swiperRef = useRef<SwiperCore | null>(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(selectColor);
        }
    }, [selectColor]);

    return (
        <Dialog open={isDialogOpen} onOpenChange={()=>setIsDialogOpen(false)}>
            {/* <DialogTrigger className="bg-secondary text-secondary-foreground font-bold text-xs rounded-3xl h-9 w-full px-5 hover:opacity-90">
                See preview
            </DialogTrigger> */}
            <DialogContent className="max-w-[1440px] rounded-xl flex items-start gap-6 py-6 px-8 border-none">
                <div className="w-[33.33%] shrink-0 flex gap-3">
                    <div className="overflow-hidden shrink-0 w-[55px]">
                        <Swiper
                            // slidesPerView={2}
                            // direction={'vertical'}
                            loop
                        // wrapperClass="overflow-hidden"
                        // className="overflow-hidden"
                        >
                            {
                                productInfo.images.map(({ smallImg }) => {
                                    return (
                                        <SwiperSlide key={smallImg} className="w-[52px] h-[68px]">
                                            <img src={smallImg} alt="img" />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className="overflow-hidden">
                        <Swiper
                            spaceBetween={15}
                            effect="fade"
                            navigation={{
                                nextEl: ".next-el",
                                prevEl: ".prev-el"
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[EffectFade, Navigation]}
                            loop
                            className="group relative"
                        >
                            {
                                productInfo.images.map(({ bigImg }, index) => {
                                    return (
                                        <SwiperSlide key={index} className="">
                                            <img src={bigImg} alt="img" />
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
                <div>
                    <div className="mt-4">
                        <h3 className="text-[40px] font-bold leading-none inline-block">BDT814.73</h3>
                        <span className="text-xl leading-6 line-through text-[rgb(117,117,117)] inline-block px-1">BDT1,629.45</span>
                        <span className="text-xl leading-6 text-[rgb(211,3,28)] inline-block px-1">50% off</span>
                        <p className="leading-4 text-xs text-[rgb(117,117,117)]">
                            <span>Tax excluded, add at checkout if applicable. </span>
                            <span>Extra 5% off with coins</span>
                        </p>
                    </div>
                    <div className="mt-2 p-2 bg-[linear-gradient(270deg,_rgb(255,245,245)_48.93%,_rgb(255,229,232)_100%)]">
                        <div className="flex items-center gap-2">
                            <img className="h-[18px]" src="https://ae01.alicdn.com/kf/S98a18bcd33c34d28a0e5276b0aa20f48e/64x64.png" />
                            <span className="text-[#FD384F] text-sm leading-[18px]">BDT131.41 off over BDT6,570.36</span>
                        </div>
                    </div>
                    <p className="pt-4 font-bold leading-[19px] text-[15px]">Simple Geometric Print Men's Fall Fashion Casual Crew-neck Tops And Pants Urban Street Fashion Trends Men's Tops And Long Styles</p>
                    <p className="mt-4 text-sm">3 sold</p>
                    <div className="my-4 bg-[rgba(0,0,0,0.1)] h-px w-full"></div>
                    <div>
                        <strong className="text-[15px]">Color: HHTZZX2411815216</strong>

                        <div className="mt-2 flex gap-2">
                            {
                                productInfo.images.map(({ smallImg }, index) => {
                                    return (
                                        <div
                                            key={smallImg}
                                            onClick={() => setSelectColor(index)}
                                            className={`w-[58px] h-[65px] flex justify-center items-center bg-[rgba(0,0,0,0.04)] cursor-pointer border ${selectColor === index ? "border-black" : "border-transparent"} hover:border-black`}
                                        >
                                            <img src={smallImg} alt="HHTZZX2411815216" className="w-11 h-[58px]" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="mt-4">
                        <strong className="text-[15px]">Size: 3XL</strong>
                        <div className="mt-2 flex gap-2">
                            {
                                productInfo.sizes.map((size, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setSelectSize(size)}
                                            className={`w-[60px] h-9 flex justify-center items-center cursor-pointer border uppercase ${selectSize === size ? "border-black" : "border-[rgb(204,204,204)]"} hover:border-black`}
                                        >
                                            <span>{size}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="py-4 border border-[#ebebeb] shrink-0">
                    <div className="flex gap-4 px-4">
                        <span className="font-bold text-sm">Sold by</span>
                        <p className="text-sm font-normal text-[rgb(34,34,34)]">
                            <span>Fashions Men Clothes Store</span>
                            <span>(Trader)</span>
                        </p>
                    </div>
                    <div className="my-4 bg-[rgba(0,0,0,0.1)] h-px w-full"></div>
                    <div className="h-10 px-4 flex items-center bg-cover bg-no-repeat bg-top bg-[url('https://ae-pic-a1.aliexpress-media.com/kf/Sf9d607003da2464ab3e02681f5651609e/1500x180.png_.avif')]">
                        <span className="font-bold text-sm">AliExpress commitment</span>
                    </div>
                    <div className="px-4">
                        <div className="flex">
                            <img className="h-4 w-4 mt-0.5 shrink-0" src="https://ae01.alicdn.com/kf/Sda4e3004cce04df59c03b833a9e26165f/64x64.png" />
                            <div className="leading-5 text-[15px] px-1">
                                <p className="text-[#191919] font-bold">Shipping: BDT3,211.92</p>
                                <p>
                                    <span className="text-[#666666]">Delivery:</span>
                                    <strong className="text-[#191919] inline-block py-0.5">Feb. 06</strong>
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <img className="h-4 w-4 mt-0.5 shrink-0" src="https://ae01.alicdn.com/kf/S20dd40d7c15a41169efc247da38b1460b/64x64.png" />
                            <div className="leading-5 text-[15px] px-1">
                                <p className="text-[#191919] font-bold">Security & Privacy</p>
                                <p className="text-[#666666] text-xs pt-0.5 max-w-[260px] line-clamp-1">Safe payments: We do not share your personal details with any third parties without your consent. </p>
                                <p className="text-[#666666] text-xs pt-0.5 max-w-[260px] line-clamp-1">Secure personal details: We protect your privacy and keep your personal details safe and secure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 bg-[rgba(0,0,0,0.1)] h-px w-full"></div>
                    <div className="px-4">
                        <strong className="text-[#191919] inline-block">Quantity</strong>
                        <div className="mt-2 flex items-center">
                            <div className="w-6 h-6 rounded-full  bg-[#F5F5F5] text-[#a8a8a8] flex justify-center items-center cursor-not-allowed text-lg">-</div>
                            <input type="text" defaultValue={1} className="bg-transparent outline-none border-none w-8 text-center text-sm font-bold" />
                            <div className="w-6 h-6 rounded-full  bg-[#F5F5F5] flex justify-center items-center cursor-pointer">+</div>
                        </div>
                        <p className="text-sm mt-2">755 available</p>
                        <button className="mt-3 py-3 bg-[#fd384f] font-bold text-white w-full hover:opacity-90">Add to cart</button>
                        <div className="flex gap-4 mt-2.5 ">
                            <Link to={"#"} className="text-[rgb(58,62,74)] bg-[rgb(245,245,245)] h-11 flex justify-center items-center flex-[2]">View details</Link>
                            <div className="text-[rgb(58,62,74)] bg-[rgb(245,245,245)] h-11 flex justify-center items-center gap-1 flex-1 px-3 cursor-pointer">
                                <span className="text-[22px]"><AlHeart /> </span>
                                <span> 16</span>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default ProductQuickView