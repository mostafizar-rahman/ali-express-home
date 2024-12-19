import { productsData } from "@/db/productsData"
import { Button } from "../ui/button"
import Card from "../ui/card"

const HomeProducts = () => {
    return (
        <section className="container pt-8">
            <h2 className="text-center font-bold text-[32px] pb-2">More to love</h2>
            <div className="grid min-[1551px]:grid-cols-6 grid-cols-5 gap-x-4 gap-y-2">
                {
                    productsData.map(({id, thumbnail}) => <Card key={id} thumbnail={thumbnail}/>)
                }
            </div>
            <div className="flex justify-center  mt-6">
                <Button className="rounded-full font-bold h-12 w-[188px]">View more</Button>
            </div>
        </section>
    )
}

export default HomeProducts