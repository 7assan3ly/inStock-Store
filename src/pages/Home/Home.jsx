import React from 'react'
import './Home.css'

import { Slider, WhoWe, HotDeals, Footer} from '../../components'

const Home = () => {
    return (
        <div>
            <Slider />
            <WhoWe />
            <HotDeals />
            <Footer />
        </div>
    )
}

export default Home