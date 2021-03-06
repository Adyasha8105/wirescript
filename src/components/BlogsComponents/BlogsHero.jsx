import React from "react";

import Hero from "../Hero";
import { HeroHeader, BigHead, BigBody, Author } from "../styles";

function BlogsPage() {
  return (
    <Hero>
      <HeroHeader>
        <BigHead
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          Everything I've ever written
        </BigHead>
        <BigBody
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease"
          data-sal-duration="1200"
        >
          From the day I didn't know what programming was, till my last cup of
          coffee
        </BigBody>
        <Author
          data-sal="slide-up"
          data-sal-delay="450"
          data-sal-easing="ease"
          data-sal-duration="1200"
        >
          Handwritten by Tulsi Prasad
        </Author>
      </HeroHeader>
    </Hero>
  );
}

export default BlogsPage;
