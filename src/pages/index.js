import React, { Component } from "react";
import Slider from "../components/Slider/slider";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServicesList from "../components/ServicesList/serviceslist";
import Partners from "../components/PartnersList/partners";
import Header from "../components/Header/header";

export const query = graphql`
  {
    allPrismicServ {
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
          }
          name {
            html
            text
          }
        }
      }
    }
    allPrismicSlider {
      nodes {
        data {
          description {
            text
          }
          image {
            alt
            url
            localFile {
              childImageSharp {
                fluid {
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
          title {
            text
          }
        }

        tags
      }
    }
    allPrismicPartners {
      nodes {
        data {
          image {
            url
          }
          link {
            url
            target
          }
        }
      }
    }
  }
`;

export default class IndexPage extends Component {
  state = {
    services: this.props.data.allPrismicServ.nodes,
    partners: this.props.data.allPrismicPartners.nodes,
    sliders: this.props.data.allPrismicSlider.nodes
  };

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Slider data={this.state.sliders} />
        <Header />
        <ServicesList data={this.state.services} />
        <Partners data={this.state.partners} />
      </Layout>
    );
  }
}
