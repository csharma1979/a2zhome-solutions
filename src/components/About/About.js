import Image from "next/image";
import React from 'react'

const About = () => {
  return (
    <>
      <div className="about-area pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-inner pe-xl-5 me-xl-5 "
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <Image
                  className="main-img"
                  src="/assets/img/about/1.jpg"
                  alt="increase-traffic-on-website"
                  width={500}
                  height={300}
                  priority
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0">
                <h2 className="heading">Our Journey: Pioneering SEO with AI</h2>
                <p className="content  title-para">
                  Welcome to Fritado AI, the intersection of innovation and
                  expertise. We are more than just a team; we are a coalition of
                  seasoned SEO specialists and forward-thinking entrepreneurs
                  committed to revolutionizing the SEO landscape. Since 2014, we
                  have devoted ourselves to the intricacies of search engine
                  optimization, assisting hundreds of businesses achieve their
                  online objectives.
                </p>
                <p className="content ">
                  Even with the rapid change in technology, many businesses are
                  still using the outdated manual technique to generate content
                  and manage SEO. This inefficiency has led us to develop
                  Fritado AI, a smart solution designed to automate and optimize
                  SEO tasks.
                </p>
                <p className="content ">
                  Our specialized focus enables us to navigate the complexities
                  of modern SEO with unparalleled precision. With Fritado AI,
                  you can forget about the hassles of keyword analysis,
                  technical setups, and keeping up with Google's ever-changing
                  algorithms. We take care of everything, ensuring you not only
                  save time but also achieve exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;