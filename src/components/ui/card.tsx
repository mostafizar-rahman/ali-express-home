import { ShoppingCartIcon, Star } from "lucide-react"

const Card = () => {
  return (
    <div className="rounded-2xl hover:bg-background hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <div className="relative">
        <img src="https://ae-pic-a1.aliexpress-media.com/kf/Sa7df1e6e752a4508b04c2ed115353c9ag/Men-Shoes-Sneakers-man-casual-Men-s-Shoes-tenis-Luxury-shoes-Trainer-Race-Breathable-Shoes-fashion.jpg_350x350xz.jpg_.webp" alt="img" className="rounded-2xl" />
        <div className="absolute right-3 bottom-3 w-12 h-12 rounded-full flex justify-center items-center bg-background cursor-pointer hover:bg-black hover:border hover:border-white hover:text-white transition-all duration-300">
          <ShoppingCartIcon />
        </div>
      </div>
      <div className="mt-2">
        <a href="#" className="line-clamp-1 text-sm ">Men Shoes Sneakers man casual Men's Shoes tenis Luxury shoes Trainer Race Breathable Shoes fashion running Shoes for women</a>
        <div className="flex items-center  mt-0.5">
          <ul className="flex gap-0.5">
            <li><Star fill="black" size={10} /></li>
            <li><Star fill="black" size={10} /></li>
            <li><Star fill="black" size={10} /></li>
            <li><Star fill="black" size={10} /></li>
            <li><Star fill="black" size={10} /></li>
          </ul>
          <span className="text-[#757575] text-xs ml-1">6 sold</span>
        </div>
      </div>
    </div>
  )
}

export default Card