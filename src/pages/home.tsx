import Ads from "@/components/sections/ads"
import TodayDeals from "@/components/sections/todayDeals"
import TodayDealsSecondPart from "@/components/sections/todayDealsSecondPart"
import Card from "@/components/ui/card"

const Home = () => {

    return (
        <>
            <Ads />
            <TodayDeals/>
            <TodayDealsSecondPart/>
            <div className="mt-20 container flex flex-wrap">
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
        </>
    )
}

export default Home