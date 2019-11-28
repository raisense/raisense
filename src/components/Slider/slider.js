import React, { Component } from "react";
import Swiper from "react-id-swiper";
import "./slider.css";
import { TimelineLite, CSSPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";

export const c = CSSPlugin;

export default class Slider extends Component {
  gsap = gsap.registerPlugin(TimelineLite);
  tl = new TimelineLite({ paused: true });
  sliderEL;
  state = {
    sliders: this.props.data
  };

  componentDidMount() {
    this.tl.to(this.sliderEl, 1, { bottom: 100 });
    this.tl.play();
  }

  render() {
    const params = {
      autoplay: {
        delay: 5000
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination"
      },
      breakpoints: {}
    };
    return (
      <div className="slider" ref={(div) => (this.sliderEL = div)}>
        <Swiper {...params}>
          {this.state.sliders.map((slider, index) => {
            console.log(slider.tags[0]);
            return (
              <div key={index}>
                <img
                  src={slider.data.image.localFile.childImageSharp.fluid.src}
                  srcSet={
                    slider.data.image.localFile.childImageSharp.fluid.srcSet
                  }
                  sizes={
                    slider.data.image.localFile.childImageSharp.fluid.sizes
                  }
                  alt={slider.data.title.text}
                />
                {slider.tags[0] == "nextgen" ? (
                  <div className={"slider-info " + slider.tags[0]}>
                    <h1 className="slider-title">
                      NEXT GEN <span>TECHNOLOGIES</span>
                    </h1>
                    <div className="slider-desc">
                      {slider.data.description.text}
                    </div>
                  </div>
                ) : (
                  <div className={"slider-info " + slider.tags[0]}>
                    <h1 className="slider-title">
                      ENGINEERING <span>THE FUTURE</span>
                    </h1>
                    <div className="slider-desc">
                      {slider.data.description.text}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </Swiper>
      </div>
    );
  }
}
