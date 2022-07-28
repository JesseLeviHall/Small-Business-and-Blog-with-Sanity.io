import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { YOURL } from "../../config";
import moment from "moment";
import imageUrlBuilder from "@sanity/image-url";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import ServicesCard from "../sections/services";
import BlogSection from "../sections/blog-section";
import Subscribe from "../sections/subscribe";

export default function IndexPage({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "6f7brgic",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Private Investigation Services" />
        <Banner />
        <Feature />
        <CoreFeature />
        <ServicesCard />
        <WorkFlow />
        <Package />
        <BlogSection mappedPosts={mappedPosts} />
      </Layout>
    </ThemeProvider>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type == "post" ]');

  const result = await fetch(YOURL).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
