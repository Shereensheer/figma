import React from 'react'
import Hero from './hero/page'
import ClientReviews from './testimonial/page'
import ProductCards from './pic-card/page'
import Topselling from './topselling/page'
import SubscribeBox from './subbox/page'
export default function Home() {
  return (
    <div>
  
<Hero />
<ClientReviews />
<ProductCards />
<Topselling />
<SubscribeBox />
      </div>
  )
}
