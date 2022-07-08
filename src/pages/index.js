import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

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

export default function IndexPage() {
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
        <BlogSection />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
