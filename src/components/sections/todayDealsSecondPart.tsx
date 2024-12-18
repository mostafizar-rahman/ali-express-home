import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const TodayDealsSecondPart = () => {
    return (
        <div className="container mt-8">
            <div className="bg-[url('/images/today-sect-bg.jpg')] bg-cover bg-no-repeat p-12 rounded-xl">
                <div className="flex justify-between">
                    <div>
                        <Link to={"#"}>
                            <img src="https://ae01.alicdn.com/kf/S5dad28a656d8485d9bc722857d55048de.png" alt="img" className="max-h-12" />
                        </Link>
                        <ul className="flex gap-5 mt-2">
                            <li className="flex items-center gap-1.5">
                                <img src="https://ae01.alicdn.com/kf/Sc62143e1f2154b63b6a054760a9c6437D/40x40.png" alt="img" className="size-5" />
                                <span className="text-[hsla(0,0%,100%,.8)]">Tax exemptions</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                                <img src="https://ae01.alicdn.com/kf/S0fa75dcc840c4f489a1d26961b9ce53fI/40x40.png" alt="img" className="size-5" />
                                <span className="text-[hsla(0,0%,100%,.8)]">Express payment</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                                <img src="https://ae01.alicdn.com/kf/S6ba567df6b884d02af6ea68fec3251d9F/40x40.png" alt="img" className="size-5" />
                                <span className="text-[hsla(0,0%,100%,.8)]">Financial support</span>
                            </li>
                        </ul>
                        <Button asChild size={"sm"} className="rounded-none min-[1551px]:text-xl  font-medium mt-6">
                            <Link to={"#"}>Shop now</Link>
                        </Button>
                    </div>
                    <div className="text-white grid grid-cols-2 gap-6">
                        <div className="w-[268px] flex items-center gap-2">
                            <div className="bg-[hsla(0,0%,100%,.6)] w-1 h-[54px]"></div>
                            <div>
                                <span className="min-[1551px]:text-[32px] text-2xl font-bold block leading-none">5M+</span>
                                <span className="text-[hsla(0,0%,100%,.8)] block">Factory direct supply</span>
                            </div>
                        </div>
                        <div className="w-[268px] flex items-center gap-2">
                            <div className="bg-[hsla(0,0%,100%,.6)] w-1 h-[54px]"></div>
                            <div>
                                <span className="min-[1551px]:text-[32px] text-2xl font-bold block leading-none">20M+</span>
                                <span className="text-[hsla(0,0%,100%,.8)] block">Value dropshipping items</span>
                            </div>
                        </div>
                        <div className="w-[268px] flex items-center gap-2">
                            <div className="bg-[hsla(0,0%,100%,.6)] w-1 h-[54px]"></div>
                            <div>
                                <span className="min-[1551px]:text-[32px] text-2xl font-bold block leading-none">10</span>
                                <span className="text-[hsla(0,0%,100%,.8)] block">Local warehouses worldwide</span>
                            </div>
                        </div>
                        <div className="w-[268px] flex items-center gap-2">
                            <div className="bg-[hsla(0,0%,100%,.6)] w-1 h-[54px]"></div>
                            <div>
                                <span className="min-[1551px]:text-[32px] text-2xl font-bold block leading-none">24H</span>
                                <span className="text-[hsla(0,0%,100%,.8)] block">Personalized sourcing service</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-[35px] mt-12">
                    <div className="bg-background px-8 py-4 rounded-lg">
                        <b className="min-[1551px]:text-2xl text-xl text-center block">Buy in bulk</b>
                        <div className="mt-4 grid grid-cols-2 gap-[30px]">
                            <Card thumbnail={"https://ae04.alicdn.com/kf/S8c8cbbcac0814bdd88309a8dab8d455fz.jpg"} price={1.21} shortInfo="Retail: US $1.26" />
                            <Card thumbnail={"https://ae04.alicdn.com/kf/S8de720c9fdb24ddaa622202f399c85168.jpg"} price={0.34} shortInfo="Retail: US $0.36" />
                        </div>
                    </div>
                    <div className="bg-background px-8 py-4 rounded-lg">
                        <b className="min-[1551px]:text-2xl text-xl text-center block">Fast delivery</b>
                        <div className="mt-4 grid grid-cols-2 gap-[30px]">
                            <Card thumbnail={"https://ae04.alicdn.com/kf/Sa92df561909e4681a93b04b1594d3fa52.jpg"} price={2.26} shortInfo={"Ships in 2 days"} />
                            <Card thumbnail={"https://ae04.alicdn.com/kf/Se84d3f8e996f4488960e49eabe6532afQ.jpg"} price={0.89} shortInfo={"Ships in 2 days"} />
                        </div>
                    </div>
                    <div className="bg-background px-8 py-4 rounded-lg">
                        <b className="min-[1551px]:text-2xl text-xl text-center block">Buy again</b>
                        <div className="mt-4 grid grid-cols-2 gap-[30px]">
                            <Card thumbnail={"https://ae04.alicdn.com/kf/Sa92df561909e4681a93b04b1594d3fa52.jpg"} price={2.26} shortInfo={"Popular picks"} />
                            <Card thumbnail={"https://ae04.alicdn.com/kf/S066c57470fad4559a7db89f8198ca2a8O.jpeg"} price={3.36} shortInfo={"Popular picks"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayDealsSecondPart


interface CardPropsType {
    thumbnail: string,
    price: number,
    shortInfo: string
}
const Card = ({ thumbnail, price, shortInfo }: CardPropsType) => {
    return (
        <div className="hover:scale-[1.03] transition-all duration-300 ">
            <Link to={"#"} className="relative max-w-[186px] max-h-[186px] mb-3 block">
                <div className="bg-[rgba(0,0,0,.04)] w-full h-full absolute"></div>
                <img src={thumbnail} alt="img" className="w-full h-auto rounded-md" />
            </Link>

            <div>
                <p className="min-[1551px]:text-xl text-base font-bold inline-block">US ${price}</p>
                <p className="min-[1551px]:text-base text-xs text-[#979797] inline-block ml-2">US $3.37</p>
                <p className="text-sm mt-1.5">{shortInfo}</p>
            </div>
        </div>
    )
}