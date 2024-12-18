import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const Ads = () => {
    return (
        <section className="bg-[rgb(10,128,56)] min-w-[1200px] pt-8 pb-12">
            <div className="container bg-[url('/images/ads.png')] bg-no-repeat bg-contain bg-right">
                <div className="text-xl font-bold">
                    <span className="text-white ">Sale Ends in:</span>
                </div>
                <h1 className="uppercase font-bold text-[rgb(255,237,190)] text-[80px] leading-none flex items-center gap-3 mt-2">
                    Hours <span className="text-white font-medium">Left</span>
                    <Link to={"#"} className="w-12 h-12 flex justify-center items-center bg-background rounded-full text-[rgb(10,128,56)] ml-2"><ChevronRight size={50}/></Link>
                </h1>
                <div className="max-w-[954px] max-h-[156px] grid grid-cols-3 gap-3 items-center justify-between mt-3">
                    <div className="bg-[rgb(255,177,233)] h-full p-2 flex">
                        <Link to={"#"} className="w-[140px]">
                            <img src="https://ae-pic-a1.aliexpress-media.com/kf/S0bc42db0003f44cea321e7a8193f7141e.png_480x480.png_.webp" alt="img" />
                        </Link>
                        <div className="max-w-[126px] ml-2 flex flex-col justify-between items-start w-full relative">
                            <Link to={"#"} className="text-[rgb(161,40,98)] text-xl font-bold mt-4">Top discount list</Link>
                            <span className="absolute bottom-4 inline-block text-xl font-medium text-white bg-[rgba(25,25,25,.7)] px-2 py-1">US $72.56</span>
                        </div>
                    </div>
                    <div className="bg-[rgb(255,237,190)] h-full p-2 flex">
                        <Link to={"#"} className="w-[140px]">
                            <img src="https://ae-pic-a1.aliexpress-media.com/kf/S0bc42db0003f44cea321e7a8193f7141e.png_480x480.png_.webp" alt="img" />
                        </Link>
                        <div className="max-w-[126px] ml-2 flex flex-col justify-between items-start w-full relative">
                            <Link to={"#"} className="text-[rgb(161,40,98)] text-xl font-bold mt-4">Stay warm</Link>
                            <span className="absolute bottom-4 inline-block text-xl font-medium text-white bg-[rgba(25,25,25,.7)] px-2 py-1">US $72.56</span>
                        </div>
                    </div>
                    <div className="bg-[rgb(240,220,255)] h-full p-2 flex">
                        <Link to={"#"} className="w-[140px]">
                            <img src="https://ae-pic-a1.aliexpress-media.com/kf/S0bc42db0003f44cea321e7a8193f7141e.png_480x480.png_.webp" alt="img" />
                        </Link>
                        <div className="max-w-[126px] ml-2 flex flex-col justify-between items-start w-full relative">
                            <Link to={"#"} className="text-[rgb(111,71,143)] text-xl font-bold mt-4">Men's fashion</Link>
                            <span className="absolute bottom-4 inline-block text-xl font-medium text-white bg-[rgba(25,25,25,.7)] px-2 py-1">US $72.56</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ads