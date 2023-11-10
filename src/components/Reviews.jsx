import React from "react";
import IMAGES from "../assets/Images";

const rate_stars = [
   IMAGES.full_star,
   IMAGES.full_star,
   IMAGES.full_star,
   IMAGES.full_star,
   IMAGES.half_star,
];

const statsList = [
   { title: "Excellent", value: 90, total: 100 },
   { title: "Good", value: 66, total: 11 },
   { title: "Average", value: 51, total: 3 },
   { title: "Below Average", value: 56, total: 8 },
   { title: "Poor", value: 55, total: 1 },
];

export const Reviews = () => {
   return (
      <section className="reviews">
         <div className="container">
            <div className="reviews__body">
               <div className="reviews__content">
                  <div className="reviews__title title-24">Reviews</div>
                  <div className="reviews__box box-review">
                     <div className="box-review__inner">
                        <div className="box-review__rate rate-review">
                           <div className="rate-review__rate">4.8</div>
                           <div className="rate-review__count">
                              of 125 reviews
                           </div>
                           <ul className="rate-review__stars">
                              {rate_stars.map((star, idx) => (
                                 <li key={idx}>
                                    <img src={star} alt="star icon" />
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <ul className="box-review__stats stats-review">
                           {statsList.map((item) => (
                              <li
                                 key={item.title}
                                 className="stats-review__item"
                              >
                                 <div className="stats-review__title">
                                    {item.title}
                                 </div>
                                 <div className="stats-review__progress">
                                    <div
                                       className="stats-review__progress-value"
                                       style={{ width: `${item.value}%` }}
                                    ></div>
                                 </div>
                                 <div className="stats-review__total">
                                    {item.total}
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  <div className="reviews__leave-comment">
                     <input type="text" placeholder="Leave Comment" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
