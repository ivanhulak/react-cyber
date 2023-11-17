import React from 'react'
import { browseCategories } from '../data/browseCategories'
import IMAGES from '../assets/Images'

export const BrowseCategory = () => {
  return (
    <section className="browseCategory">
      <div className="container">
         <div className="browseCategory__body">
            <div className="browseCategory__top">
               <h2 className="browseCategory__title">Browse By Category</h2>
               <div className="browseCategory__arrows">
                  <button className="browseCategory__arrow browseCategory__arrow--prev">
                     <img src={IMAGES.arrow_prev} alt="arrow prev" />
                  </button>
                  <button className="browseCategory__arrow browseCategory__arrow--next">
                     <img src={IMAGES.arrow_next} alt="arrow next" />
                  </button>
               </div>
            </div>
            <div className="browseCategory__categories categories-browse">
               {browseCategories.map(category => (
                  <div key={category.name} className="categories-browse__item">
                     <div className="categories-browse__icon">
                        <img src={category.icon} alt={category.name} />
                     </div>
                     <div className="categories-browse__name">{category.name}</div>
                  </div>
               ))}
               
            </div>
         </div>
      </div>
    </section>
  )
}