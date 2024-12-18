import Ads from "@/components/sections/ads"
import HomeCategory from "@/components/sections/homeCategory"
import HomeProducts from "@/components/sections/homeProducts"
import TodayDeals from "@/components/sections/todayDeals"
import TodayDealsSecondPart from "@/components/sections/todayDealsSecondPart"

const Home = () => {

    return (
        <>
            <Ads />
            <TodayDeals />
            <TodayDealsSecondPart />
            <HomeCategory />
            <HomeProducts />
        </>
    )
}

export default Home