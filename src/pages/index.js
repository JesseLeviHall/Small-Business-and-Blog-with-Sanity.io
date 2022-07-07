import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
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
