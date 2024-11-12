import React from 'react'
import styles from './style'
import { Navbar, Billing, Business, Button, Stats, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, Testimonials } from './components'
const App = () => {
  return (
    <>
      <div className='bg-orange-400 w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth}`} >
            <Navbar />
          </div>
        </div>

        <div className={`bg-slate-400 ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`} >
            <Hero />
          </div>
        </div>

        <div className={`bg-slate-400 ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`} >
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App