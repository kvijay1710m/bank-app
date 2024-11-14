import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

import React from 'react'

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
       {/* features.length = 3  ,  (index = 0): 0 !== 2 is true,  (index = 1): 1 !== 2 is true, (index = 2): 2 !== 2 is false */}
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
  )
}



const Business = () => {
  return (
    <>
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" /> we will handle the money.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >With the right credit card, you can improve your financial life by  building credit, earning rewards and saving money, But with hundreds of credit card on the market</p>

          <Button styles="mt-10" />
        </div>

        {/* right section */}
        <div className={`${layout.sectionImg} flex-col `}>
          {
            features.map((feature, index) => (
              <FeatureCard key={feature.id}  {...feature} index={index} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Business