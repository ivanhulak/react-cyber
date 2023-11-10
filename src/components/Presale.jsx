import React from "react";
import playstation from "../assets/images/presale/playstation.png";
import headphones from "../assets/images/presale/headphones.png";
import visionpro from "../assets/images/presale/visionpro.png";
import macbook from "../assets/images/presale/macbook.png";
import { CommonButton } from "./CommonButton";

export const Presale = () => {
  return (
    <section className="presale">
      <div className="presale__box">
        <div className="presale__column column-presale">
          <div className="column-presale__inner">
            <article className="column-presale__item item-presale item-one">
              <div className="item-presale__image">
                <img src={playstation} alt="playstation" />
              </div>
              <div className="item-presale__content item-one__content">
                <div className="item-one__title">Playstation 5</div>
                <div className="item-presale__description">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </div>
              </div>
            </article>
            <article className="column-presale__item item-presale item-two">
              <div className="item-presale__image">
                <img src={headphones} alt="headphones" />
              </div>
              <div className="item-presale__content item-two__content">
                <div className="item-two__title">
                  Apple AirPods <span>Max</span>
                </div>
                <div className="item-presale__description">
                  Computational audio. Listen, it's powerful
                </div>
              </div>
            </article>
            <article className="column-presale__item item-presale item-three">
              <div className="item-presale__image">
                <img src={visionpro} alt="visionpro" />
              </div>
              <div className="item-presale__content item-three__content">
                <div className="item-three__title">
                  Apple <br /> Vision <span>Pro</span>
                </div>
                <div className="item-presale__description">
                  An immersive way to experience entertainment
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="presale__column column-presale presale__column--big">
          <div className="column-presale__row">
            <div className="column-presale__content">
              <div className="column-presale__title">Macbook <span>Air</span></div>
              <div className="column-presale__description">
                The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
              </div>
              <CommonButton className={'column-presale__btn'} value={'dark'}>
                Shop Now
              </CommonButton>
            </div>
            <div className="column-presale__image">
              <img src={macbook} alt="macbook" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
