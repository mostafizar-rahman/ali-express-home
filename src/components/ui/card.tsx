import { ShoppingCartIcon, Star } from "lucide-react"
import { Link } from "react-router-dom"

const Card = () => {
  return (
    <div className="relative px-3 py-4 rounded-2xl hover:bg-background hover:shadow-4xl hover:scale-105 group w-[269.34px] ">
      <Link to={"#"} className="relative">
        <img src="https://ae-pic-a1.aliexpress-media.com/kf/Sa7df1e6e752a4508b04c2ed115353c9ag/Men-Shoes-Sneakers-man-casual-Men-s-Shoes-tenis-Luxury-shoes-Trainer-Race-Breathable-Shoes-fashion.jpg_350x350xz.jpg_.webp" alt="img" className="rounded-2xl" />
        <div className="absolute right-3 bottom-3 w-12 h-12 rounded-full flex justify-center items-center bg-background cursor-pointer hover:bg-black hover:border hover:border-white hover:text-white transition-all duration-300">
          <ShoppingCartIcon />
        </div>
      </Link>
      <div className="mt-2">
        <Link to="#" className="line-clamp-1 text-sm ">Men Shoes Sneakers man casual Men's Shoes tenis Luxury shoes Trainer Race Breathable Shoes fashion running Shoes for women</Link>
        <div className="flex items-center  mt-0.5">
          <ul className="flex gap-0.5">
            <li><Star fill="black" size={10} /></li>
            <li><Star fill="black" size={10} /></li>
            <li><Star fill="black" size={10} /></li>
            <li><Star fill="black" size={10} /></li>
            <li><Star fill="black" size={10} /></li>
          </ul>
          <span className="text-[#757575] text-xs ml-1.5">6 sold</span>
          <img className="inline-block ml-2" src="https://ae01.alicdn.com/kf/S1070fe6ce9fd4b2bb6760161cf556f9ag/372x64.png" height="16" width="93"></img>
        </div>
        <div>
          <p className="font-bold inline-block">
            <span className="text-xs">US $</span>
            <span className="text-2xl">3</span>
            <span className="text-xs">.12</span>
          </p>
          <p className="text-[rgb(153,153,153)] line-through text-xs inline-block ml-3">US $29.14</p>
        </div>
        <p className="text-sm mt-2 text-[rgb(25,25,25)]">Free shipping</p>
        <div className="mt-2.5 flex justify-between items-center gap-2 absolute w-[calc(100%_-22px)] ">
          <a href="#" className="bg-[#191919] inline-flex justify-center items-center text-white font-bold text-xs rounded-3xl h-9 w-full px-5">See preview</a>
          <a href="#" className="bg-[#191919] inline-flex justify-center items-center text-white font-bold text-xs rounded-3xl h-9 w-full px-5">Similar items</a>
        </div>
      </div>
    </div>
  )
}

export default Card