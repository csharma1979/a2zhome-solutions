"use client";

import KitchenService from "../../src/components/Service/Kitchen-Service/KitchenService";
import { Helmet } from "react-helmet-async";

const page = () => {
  return (
    <div>
      <Helmet>
        <title>Expert Kitchen Services for Your Dream Kitchen</title>
        <meta
          name="title"
          content="Professional Kitchen Services - Renovation & Remodeling"
        />
        <meta
          name="description"
          content="Transform your kitchen with our expert kitchen services. From remodeling to installations, we provide high-quality solutions to create your dream kitchen. Book today!"
        />
      </Helmet>
      <KitchenService />
    </div>
  );
};

export default page;
