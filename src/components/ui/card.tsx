import { ShoppingCartIcon, Star } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"

const Card = ({ thumbnail }: { thumbnail: string }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const handleMouseHover = () => {
    if (ref.current) {
      const childElement = ref.current.children[0];
      if (childElement) {
        console.log(ref.current.offsetWidth)
        // childElement.style.maxWidth = `${ref.current.clientWidth}px`;
      }

      // const newWidth = ref.current.clientWidth + 24;
      // ref.current.style.width = `${newWidth}px`;

    }
  }
  const handleMouseLeave = () => {
    if (ref.current) {
      const childElement = ref.current.children[0];
      if (childElement) {
        // childElement.style.maxWidth = `100%`;
      }

      // ref.current.style.width = `auto`;
    }
  }

  return (
    <div ref={ref} className="relative rounded-2xl group">
      <div
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}
        className="h-[378px] group-hover:absolute  z-40 group-hover:h-auto group-hover:shadow-4xl group-hover:rounded-2xl py-4 bg-background">
        <div className=" mx-auto">
          <Link to={"#"} className="relative">
            <img src={thumbnail} alt="img" className="rounded-2xl" />
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
            <div className="mt-2.5 hidden group-hover:flex min-[1552px]:flex-row flex-col justify-between items-center gap-2 bg-background">
              <a href="#" className="bg-[#191919] inline-flex justify-center items-center text-white font-bold text-xs rounded-3xl h-9 w-full px-5">See preview</a>
              <a href="#" className="bg-[#191919] inline-flex justify-center items-center text-white font-bold text-xs rounded-3xl h-9 w-full px-5">Similar items</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card