import React from "react";
import { CommonViewMore } from "./common/CommonViewMore";

const screenCharacteristics = [
   { title: "Screen diagonal", value: ['6.7"'] },
   { title: "The screen resolution", value: ["2796x1290"] },
   { title: "The screen refresh rate", value: ["120 Hz"] },
   { title: "The pixel density", value: ["460 ppi"] },
   { title: "Screen type", value: ["OLED"] },
   {
      title: "Additionally",
      value: [
         "Dynamic Island",
         "Always-On display",
         "HDR display",
         "True Tone",
         "Wide color (P3)",
      ],
   },
];

const cpuCharacteristics = [{ title: "CPU", value: ["A16 Bionic"] }];

export const ProductDetails = () => {
   return (
      <section className="details">
         <div className="container">
            <div className="details__body">
               <div className="details__inner">
                  <div className="details__title title-24">Details</div>
                  <div className="details__text">
                     <p>
                        Just as a book is judged by its cover, the first thing
                        you notice when you pick up a modern smartphone is the
                        display. Nothing surprising, because advanced
                        technologies allow you to practically level the display
                        frames and cutouts for the front camera and speaker,
                        leaving no room for bold design solutions. And how good
                        that in such realities Apple everything is fine with
                        displays. Both critics and mass consumers always praise
                        the quality of the picture provided by the products of
                        the Californian brand. And last year's 6.7-inch Retina
                        panels, which had ProMotion, caused real admiration for
                        many.
                     </p>
                  </div>
                  <div className="details__screen screen-details">
                     <div className="screen-details__title title-details">
                        Screen
                     </div>
                     <ul className="screen-details__box">
                        {screenCharacteristics.map((char) => (
                           <li
                              key={char.title}
                              className="screen-details__line"
                           >
                              <div className="screen-details__item">
                                 <span>{char.title}</span>
                              </div>
                              <div className="screen-details__item screen-details__item--right">
                                 {char.value.map((item) => (
                                    <div key={item}>{item}</div>
                                 ))}
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="details__cpu cpu-details">
                     <div className="cpu-details__title title-details">cpu</div>
                     <ul className="cpu-details__box">
                     {cpuCharacteristics.map((char) => (
                        <li key={char.title} className="cpu-details__line">
                           <div className="cpu-details__item">
                              <span>{char.title}</span>
                           </div>
                           <div className="cpu-details__item cpu-details__item--right">
                              {char.value.map((item) => (
                                 <div key={item}>{item}</div>
                              ))}
                           </div>
                        </li>
                     ))}
                     </ul>
                  </div>
                  <div className="details__cores">
                     <div className="details__cores-row">
                        <div className="details__cores-item">Number of cores</div>
                        <div className="details__cores-item details__cores-item--right">6</div>
                     </div>
                  </div>
                  <CommonViewMore name={'viewmore'} />
               </div>
            </div>
         </div>
      </section>
   );
};
