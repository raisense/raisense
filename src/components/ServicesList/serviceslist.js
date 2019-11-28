import React, { Component } from "react";
import "./services.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TimelineLite, CSSPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";

export const c = CSSPlugin;

export default class ServicesList extends Component {
  cards = [];
  GSAP = gsap.registerPlugin(TimelineLite);

  tl = new TimelineLite({ paused: true, delay: 0.5 });

  state = {
    servicesList: this.props.data
  };

  componentDidMount() {
    // this.tl.staggerFrom(
    //   this.cards,
    //   0.5,
    //   { opacity: 0, autoAlpha: 2, y: 40 },
    //   0.1
    // );
    // this.tl.play();
  }

  render() {
    if (this.state.servicesList) {
      return (
        <div>
          <h1>Services</h1>
          <Row>
            {this.state.servicesList.map((service, index) => {
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  md={3}
                  key={index}
                  ref={(div) => (this.cards[index] = div)}
                >
                  <div className="service">
                    <div className="service-img">
                      <img src={service.data.image.url} />
                    </div>
                    <div className="service-desc">
                      <div className="service-name">
                        {service.data.name.text}
                      </div>
                      <div className="service-desc">
                        {service.data.description.text}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      );
    }
    return (
      <div>
        <h1>No data!</h1>
      </div>
    );
  }
}
