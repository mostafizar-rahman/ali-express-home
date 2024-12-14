import { categoryList } from "@/db/categoryList";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";


const CategoryMenu = () => {
    const renderSubcategories = (subcategories: any) => {

    };

    return (
        <div className="relative w-[256px]">
            <h2 className="bg-[#f5f5f5] text-[#191919] inline-flex items-center justify-between gap-2 rounded-full py-2 px-6 cursor-pointer w-full">
                <span className="inline-flex items-center gap-2"><Menu size={17} /> All Categories</span> <ChevronDown size={15} />
            </h2>
            <ul className="bg-[#f5f5f5] w-full max-h-[523px] box-border absolute">
                {categoryList.map((category) => (
                    <li key={category.url || category.name} className="relative full group">
                        <a href={category.url || '#'} className="text-[#191919] text-sm  flex items-center gap-2 py-3 pl-6 pr-3 hover:bg-white hover:font-bold transition-all">
                            <img src={category.img} alt="img" className="h-6" />
                            {category.name}
                        </a>
                        {/* {renderSubcategories(category.subcategories)} */}
                        <ul className="hidden group-hover:flex gap-6 absolute top-0 z-50 left-[256px] h-fit bg-[#f5f5f5] p-5 shadow-[3px 0 3px 0 rgba(0,0,0,.1)] rounded-tr-[20px] rounded-br-[20px]">
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
                                                    {category.subcategories[index]?.subcategories.map((item) => (
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
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryMenu;