import React from 'react'
import Hero from './Hero'
import Universe from './Universe'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const ProductPage = () => {
  return (
    <div>
      <Hero/>
      <LeftSection 
        imageURL="media/kite.png"
        productName = "Kite"
        productDesc = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo = ""
        learnMore = ""
        googlePlay = ""
        appStore />

        <RightSection
          imageURL="media/console.png"
          productName = "Console"
          productDesc = "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          learnMore = ""
        />

      <LeftSection 
        imageURL="media/coin.png"
        productName = "Coin"
        productDesc = "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo = ""
        learnMore = ""
        googlePlay = ""
        appStore />

        <RightSection
          imageURL="media/kiteconnect.png"
          productName = "Kite Connect API"
          productDesc = "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          learnMore = ""
        />

      <LeftSection 
        imageURL="media/varsity.png"
        productName = "Varsity Mobile"
        productDesc = "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo = ""
        learnMore = ""
        googlePlay = ""
        appStore />

      <Universe/>
      
     </div>

  )
}

export default ProductPage
