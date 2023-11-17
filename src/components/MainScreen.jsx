import React from 'react'
import { CommonButton } from './CommonButton'
import IMAGES from '../assets/Images';

export const MainScreen = () => {
  return (
    <section className='mainscreen'>
      <div className="container">
         <div className="mainscreen__body">
            <div className="mainscreen__content content-mainscreen">
               <div className="content-mainscreen__label">Pro.Beyond.</div>
               <h1 className="content-mainscreen__title title-1">
                  IPhone 14 <span>Pro</span>
               </h1>
               <div className="content-mainscreen__tagline">
                  Created to change everything for the better. For everyone
               </div>
               <CommonButton className={'content-mainscreen__btn'} value='light'>
                  Shop Now
               </CommonButton>
            </div>
            <div className="mainscreen__background"></div>
         </div>
      </div>
    </section>
  )
}