import { Button } from "../ui/button"
import Card from "../ui/card"

const HomeProducts = () => {
    return (
        <section className="container pt-8">
            <h2 className="text-center font-bold text-[32px] pb-2">More to love</h2>
            <div className="grid grid-cols-6 gap-x-4 gap-y-2">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="flex justify-center  mt-6">
                <Button className="rounded-full font-bold h-12 w-[188px]">View more</Button>
            </div>
        </section>
    )
}

export default HomeProducts