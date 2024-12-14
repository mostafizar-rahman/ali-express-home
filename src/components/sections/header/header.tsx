import { Link } from "react-router-dom"
import CategoryMenu from "./categoryMenu"
import { ChevronDown } from "lucide-react"
import TopHeader from "./topHeader"
import { menuList } from "@/db/menuList"

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
                                    <li className="relative group">
                                        <Link to={item.url || "#"} className="capitalize  px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-1 hover:bg-slate-100 transition-all">
                                            {item.name}
                                            {item.dropdown && <span><ChevronDown size={14} /></span>}
                                        </Link>
                                        {
                                            item.dropdown &&
                                            <ul className="absolute right-0 min-w-max bg-white py-3 px-4 rounded-3xl shadow-[0_2px_8px_0_rgba(0,0,0,.2)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
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