import { categoryList } from "@/db/categoryList";
import { ChevronDown, Menu } from "lucide-react";
import { MouseEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";


const CategoryMenu = () => {
    const elementRef = useRef<HTMLUListElement>(null);
    const [position, setPosition] = useState({ right: 385, top: 120 })
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const handleMouseEnter = (e: MouseEvent<HTMLElement>, index: number) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const top = e.currentTarget.parentElement?.getBoundingClientRect();

        if (elementRef.current) {
            let scrollbarWidth = elementRef.current.offsetWidth - elementRef.current.clientWidth;
            setPosition({ right: rect.right + scrollbarWidth, top: top?.top || 0 });
        }

        setHoveredItem(index);
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
            setHoveredItem(null);
        }, 200);
    }



    return (
        <div className="relative w-[256px] group/category" onMouseLeave={handleMouseLeave}>
            <h2 className="bg-[#f5f5f5] inline-flex items-center justify-between gap-2 rounded-[20px] py-2 px-6 cursor-pointer w-full group-hover/category:font-bold group-hover/category:rounded-bl-none group-hover/category:rounded-br-none">
                <span className="inline-flex items-center gap-2">
                    <Menu size={17} /> All Categories
                </span>
                <ChevronDown size={15} />
            </h2>
            <ul ref={elementRef} className="menu-list group-hover/category:block hidden absolute z-50 bg-[#f5f5f5] w-full max-h-[523px] overflow-y-auto box-border rounded-bl-[20px] rounded-br-[20px] []">
                {categoryList.map((category, index) => (
                    <li
                        key={index}
                        onMouseEnter={(e) => handleMouseEnter(e, index)}
                        className="full group/item"
                    >
                        <Link to={category.url || '#'} className="text-sm flex items-center gap-2 py-3 pl-6 pr-3 group-hover/item:bg-white group-hover/item:font-bold transition-all">
                            <img src={category.img} alt="img" className="h-6" />
                            {category.name}
                        </Link>
                        <ul
                            className={`${hoveredItem === index ? "flex" : "hidden"} gap-6 fixed z-50 max-h-[500px] h-full bg-background p-6 shadow-[3px_0_3px_0_rgba(0,0,0,.1)] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]`}
                            style={{ left: position.right, top: position.top }}
                        >
                            {category.subcategories.map((_, index) => {
                                // Only render on even indexes (start of a pair)
                                if (index % 2 === 0) {
                                    return (
                                        <li className="relative min-w-max flex flex-col gap-6" key={index}>
                                            {/* Div 1: Current subcategory */}
                                            <div className="under-div">
                                                <span className="font-bold max-w-[150px] line-clamp-2">
                                                    {category.subcategories[index]?.label}
                                                </span>
                                                <ul className="mt-2.5 flex flex-col gap-2.5">
                                                    {category.subcategories[index]?.subcategories.map((item, index) => (
                                                        <li key={index}>
                                                            <Link
                                                                to={item.url}
                                                                className="block text-sm text-[rgb(117,_117_117)] hover:text-red-600 transition-all"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Div 2: Next subcategory (if it exists) */}
                                            {category.subcategories[index + 1] && (
                                                <div className="under-div">
                                                    <span className="font-bold max-w-[150px] line-clamp-2">
                                                        {category.subcategories[index + 1]?.label}
                                                    </span>
                                                    <ul className="mt-2.5 flex flex-col gap-2.5">
                                                        {category.subcategories[index + 1]?.subcategories.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    to={item.url}
                                                                    className="block text-sm text-[rgb(117,_117_117)] hover:text-red-600 transition-all"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    );
                                }
                                return null;
                            })}
                            <li className="min-w-max border-l border-l-[#ebebeb] pl-6">
                                <span className="font-bold line-clamp-2">More Ways Top Shop</span>
                                <ul className="mt-2.5">
                                    <li>
                                        <Link
                                            to={"#"}
                                            className="block text-sm text-[rgb(117,_117_117)] hover:text-red-600 transition-all"
                                        >
                                           Top Selling
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryMenu;