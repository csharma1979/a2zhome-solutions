"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography , Container } from "@mui/material";


const ServiceGallary = ({ data = [] }) => {
  return (
    <div className="comp-space ">
      <Container maxWidth="lg" className=" d-flex flex-column justify-content-center align-items-center mx-auto ">
        <Typography variant="h5">GALLARY</Typography>
        <h3 className="py-2 text-center">Elegant Home Improvement Services</h3>

        {/* Two Rows of Images with Five Images Each */}
        <div className="d-flex justify-content-center align-items-center row mt-2 g-3">
          {data.slice(0, 6).map((img, index) => (
            <div
              key={`row1-${index}`}
              className="col-12 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center"
            >
              <Link href="/gallery">
                <Image
                  src={img}
                  alt={`Kitchen ${index + 1}`}
                  width={500}
                  height={150}
                  className="rounded img-fluid"
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center row mt-2 g-3">
          {data.slice(6, 12).map((img, index) => (
            <div
              key={`row2-${index}`}
              className="col-12 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center"
            >
              <Link href="/gallery">
                <Image
                  src={img}
                  alt={`Kitchen ${index + 6}`}
                  width={500}
                  height={150}
                  className="rounded img-fluid"
                />
              </Link>
            </div>
          ))}
        </div>
        <Link href="/gallery" >
          <button className="custom-button mt-4" size="large">
            View All Gallaries
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default ServiceGallary;