import { QrCode, ScanSearch, Search } from "lucide-react"
import { Link } from "react-router-dom"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AlNoteBook, AlShopCart, AlUser } from "@/lib/icon"
import { useState } from "react"

const TopHeader = () => {
    const [countries, setCountries] = useState([])
    const [selectCountry, setSelectCountry] = useState("")
    const [showCountryPopup, setShowCountryPopup] = useState(false)

    const handleCountries = () => {
        fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
            .then((res) => res.json())
            .then((data) => setCountries(data.data))
    }

    const groupCountriesAlphabetically = (countries: any[]) => {
        return countries.reduce((acc, country) => {
            const firstLetter = country.name[0].toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(country);
            return acc;
        }, {});
    };

    const groupedCountries = groupCountriesAlphabetically(countries);


    return (
        <div className="flex justify-between py-5">
            <Link to={"/"} className="shrink-0">
                <img src="/public/images/logo.avif" alt="logo" className="w-[156px]" />
            </Link>
            <div className="w-full pl-11 relative">
                <input type="text" placeholder="search product" className="h-9 border border-black rounded-3xl w-full pl-6 py-2 text-sm outline-none" />
                <div className="absolute top-1.5 right-[70px] cursor-pointer">
                    <ScanSearch />
                </div>
                <div className="absolute right-0.5 top-0.5 rounded-[20px] bg-[#191919] w-[52px] h-8 text-white flex justify-center items-center cursor-pointer">
                    <Search size={21} />
                </div>
            </div>

            <div className="flex items-center gap-5 pl-8 shrink-0">
                <div className="flex items-center gap-1.5">
                    <span><QrCode /></span>
                    <p className="max-w-[90px] text-xs font-medium ">Download the AliExpress app</p>
                </div>

                {/* start design country/Language/Currency */}
                <div className="relative">
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => { handleCountries(), setShowCountryPopup(!showCountryPopup) }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" alt="flag" className="w-6 h-4" />
                        <div>
                            <span className="text-xs leading-3  block">En /</span>
                            <span className="font-bold text-xs leading-4 block">USD</span>
                        </div>
                    </div>
                    <div className={`${showCountryPopup ? "block" : "hidden"} p-6 bg-white shadow-[0_2px_8px_0_rgba(0,0,0,.2)] rounded-3xl w-[300px] absolute -right-9 top-10 z-30`}>
                        <div className="bg-white w-4 h-4 rotate-45 absolute -top-2 right-10"></div>
                        <div>
                            <p className="leading-6 font-bold text-xl  mb-2">Ship to</p>
                            <Select value={selectCountry} onValueChange={value => setSelectCountry(value)}>
                                <SelectTrigger className="rounded-md border-[rgba(0,0,0,.2)] focus:border-[rgba(0,0,0,.2)] focus:ring-0 h-10">
                                    <div className='flex items-center gap-2'>
                                        {selectCountry ? "" : <img src={"https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"} alt='img' className="w-6 h-4" />}
                                        <SelectValue placeholder="Bangladesh" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="p-0 w-[252px]">
                                    <div className="p-3">
                                        <div className="relative mb-3 ">
                                            <span className="text-[#757575] absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
                                            <input type="text" className="pl-9 pr-3 bg-[#f5f5f5] rounded-md w-full h-10 relative outline-none" />
                                        </div>
                                        {Object.keys(groupedCountries).sort().map((letter) => (
                                            <SelectGroup>
                                                <SelectLabel className="border-b mb-2">{letter}</SelectLabel>
                                                {groupedCountries[letter].map((cn: any) => (
                                                    <SelectItem key={cn.name} value={cn.name}>
                                                        <div className="flex items-center gap-2">
                                                            <img src={cn.flag} alt="flag" className="w-6 h-4" />
                                                            <span>{cn.name}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        ))}
                                    </div>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mt-4">
                            <p className="leading-6 font-bold text-xl  mb-2">Language</p>
                            <Select>
                                <SelectTrigger className="rounded-md border-[rgba(0,0,0,.2)] focus:border-[rgba(0,0,0,.2)] focus:ring-0 h-10">
                                    <SelectValue placeholder="English" />
                                </SelectTrigger>
                                <SelectContent className="p-0 w-[252px]">
                                    <div className="p-3">
                                        <div className="relative mb-3 ">
                                            <span className="text-[#757575] absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
                                            <input type="text" className="pl-9 pr-3 bg-[#f5f5f5] rounded-md w-full h-10 relative outline-none" />
                                        </div>
                                        <SelectItem value="english">English</SelectItem>
                                        <SelectItem value="bangla">Bnglish</SelectItem>
                                    </div>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mt-4">
                            <p className="leading-6 font-bold text-xl  mb-2">Currency</p>
                            <Select>
                                <SelectTrigger className="rounded-md border-[rgba(0,0,0,.2)] focus:border-[rgba(0,0,0,.2)] focus:ring-0 h-10">
                                    <SelectValue placeholder="(BDT) Bangladeshi Taka" />
                                </SelectTrigger>
                                <SelectContent className="p-0 w-[252px]">
                                    <div className="p-3">
                                        <div className="relative mb-3 ">
                                            <span className="text-[#757575] absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
                                            <input type="text" className="pl-9 pr-3 bg-[#f5f5f5] rounded-md w-full h-10 relative outline-none" />
                                        </div>
                                        <SelectItem value="bdt">(BDT) Bangladeshi Taka</SelectItem>
                                        <SelectItem value="eur">EUR (Euro)</SelectItem>
                                        <SelectItem value="usd">USD (US Dollar)</SelectItem>
                                    </div>
                                </SelectContent>
                            </Select>
                        </div>
                        <button onClick={() => setShowCountryPopup(false)} className="bg-[#191919] font-bold text-white rounded-3xl flex justify-center items-center text-center h-10 w-full mt-4">Save</button>
                    </div>

                </div>
                {/* end design country/Language/Currency */}

                {/* start login/register */}
                <div className="relative group/sign">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span><AlUser className="size-8" /></span>
                        <div>
                            <small className="leading-3 text-xs block ">Welcome</small>
                            <span className="leading-4 text-xs block font-bold ">Sign in / Register</span>
                        </div>
                    </div>
                    <div className=" py-6 px-2 bg-white shadow-[0_2px_8px_0_rgba(0,0,0,.2)] rounded-3xl w-[300px] absolute left-1/2 -translate-x-1/2 z-30 top-10 opacity-0 invisible group-hover/sign:opacity-100 group-hover/sign:visible transition-all duration-300">
                        <div className="bg-white w-4 h-4 rotate-45 absolute -top-2 left-1/2 -translate-x-1/2"></div>
                        <div className="px-4">
                            <Link to={"#"} className="bg-[#191919] text-xl font-bold text-white rounded-3xl flex justify-center items-center text-center h-12">Sing in</Link>
                            <p className="text-center">
                                <Link to={"#"} className="text-[#757575] text-sm leading-[18px] text-center mt-2 mb-4 inline-block">Register</Link>
                            </p>
                        </div>
                        <span className="w-full h-px bg-[#ebebeb] block"></span>
                        <ul className="mt-2">
                            <li>
                                <Link to={"#"} className="flex items-center gap-1.5 text-base text-[#222] leading-normal py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">
                                    <AlNoteBook />
                                    <span className="inline-block mt-[3px]">My Orders</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"} className="flex items-center gap-1.5 text-base text-[#222] leading-normal py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">
                                    <AlNoteBook />
                                    <span className="inline-block mt-[3px]">My Coins</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"} className="flex items-center gap-1.5 text-base text-[#222] leading-normal py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">
                                    <AlNoteBook />
                                    <span className="inline-block mt-[3px]">Message Center</span>
                                </Link>
                            </li>
                        </ul>
                        <span className="w-full h-px bg-[#ebebeb] block my-2"></span>
                        <ul>
                            <li>
                                <Link to={"#"} className="text-[#757575] leading-normal block py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">Settings</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="text-[#757575] leading-normal block py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">AliExpress Business</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* end login/register */}

                <div className="flex items-center gap-1 cursor-pointer">
                    <span className=""><AlShopCart className="size-8" /></span>
                    <div className="">
                        <span className="bg-[#191919] text-white w-6 h-[14px] flex items-center justify-center text-xs font-bold rounded-2xl">0</span>
                        <b className="font-bold text-xs  leading-4 block">Cart</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader