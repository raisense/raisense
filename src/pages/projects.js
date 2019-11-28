import React, { Component } from "react";
import Layout from "../components/layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TimelineLite, CSSPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";

export const c = CSSPlugin;

export const query = graphql`
  {
    allPrismicProject {
      nodes {
        data {
          description {
            html
            text
          }
          image {
            alt
            copyright
            url
            localFile {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          link {
            link_type
            url
            target
          }
          name {
            html
            text
          }
        }
      }
    }
  }
`;

export default class Projects extends Component {
  cards = [];
  GSAP = gsap.registerPlugin(TimelineLite);

  tl = new TimelineLite({ paused: true, delay: 0.5 });

  state = {
    projects: this.props.data.allPrismicProject.nodes
  };

  componentDidMount() {
    // this.tl.staggerFrom(
    //   this.cards,
    //   0.5,
    //   { opacity: 0, autoAlpha: 2, scale: 0.8 },
    //   0.1
    // );
    // this.tl.play();
  }

  render() {
    return (
      <Layout>
        <div className="projects">
          <h1>Projects</h1>
          <Row>
            {this.state.projects.map((project, index) => {
              return (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  ref={(div) => (this.cards[index] = div)}
                >
                  <div className="project">
                    <a href={project.data.link.url} target="_blank">
                      <div className="project-img">
                        <img
                          src={
                            project.data.image.localFile.childImageSharp.fluid
                              .src
                          }
                          srcset={
                            project.data.image.localFile.childImageSharp.fluid
                              .srcSet
                          }
                          sizes={
                            project.data.image.localFile.childImageSharp.fluid
                              .sizes
                          }
                        />
                      </div>
                      <div className="project-info">
                        <div className="project-name">
                          {project.data.name.text}
                        </div>
                        <div className="project-desc">
                          {project.data.description.text}
                        </div>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Layout>
    );
  }
}
