import { Link } from "react-router-dom"
import CategoryMenu from "./categoryMenu"
import { ChevronDown, QrCode } from "lucide-react"
import { AlQrCode } from "@/lib/icon"
import TopHeader from "./topHeader"

const menuList = [
    {
        "url": "",
        "name": "SuperDeals"
    },
    {
        "url": "",
        "name": "plus"
    },
    {
        "url": "",
        "name": "new"
    },
    {
        "url": "",
        "name": "aliexpress Business"
    },
    {
        "url": "",
        "name": "shoes"
    },
    {
        "url": "",
        "name": "soprts & entertetment"
    },
    {
        "url": "",
        "name": "home & garden"
    },
    {
        "url": "",
        "name": "Hair Extensions & Wigs"
    },
    {
        "url": "",
        "name": "Men's Clothing"
    },
    {
        "url": "",
        "name": "more",
        "dropdown": [
            {
                "url": "",
                "name": "Accessories"
            },
            {
                "url": "",
                "name": "Consumer Electronics"
            },
            {
                "url": "",
                "name": "Home Improvement & Lighting"
            },
        ]
    },

]
const Header = () => {
    return (
        <header className="container ">
            <TopHeader />
            <div className="flex items-center gap-5 pb-2.5">
                <div className="shrink-0">
                    <CategoryMenu />
                </div>
                <nav className="w-full">
                    <ul className="flex justify-between w-full">
                        {
                            menuList.map((item) => {
                                return (
                                    <li className="relative">
                                        <Link to={item.url || "#"} className="capitalize text-[#191919] px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-1 hover:bg-slate-100 transition-all">
                                            {item.name}
                                            {item.dropdown && <span><ChevronDown size={14} /></span>}
                                        </Link>
                                        {
                                            item.dropdown &&
                                            <ul className="absolute right-0 min-w-max bg-white py-3 px-4 rounded-3xl shadow-[0_2px_8px_0_rgba(0,0,0,.2)]">
                                                {
                                                    item.dropdown?.map((drop) => {
                                                        return (
                                                            <li>
                                                                <Link to={drop.url || "#"} className="text-sm text-[#222] px-2.5 py-2.5 block hover:bg-slate-100 transition-all">{drop.name}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header