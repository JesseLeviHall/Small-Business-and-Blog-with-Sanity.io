/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Professional Experience",
    title: "Professional Experience",
    text:
      "Decades of investigative journalism work as an independent business owner, staff writer, and freelancer.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Community Connection",
    title: "Community Connection",
    text:
      "Investigating important local issues cutlivatting a deep understanding of the voice of the community and its members has earnd Carolyn a vast network of professional connections built on trust and a committment to integrity social responsibility. ",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "High Quality Results",
    title: "High Quality Results",
    text:
      "A tireless researcher and investigator, Caroylyn takes pride in delivering on time with high-standards and gets to the bottom of the issue by uncovering the facts. ",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Specialized Knowledge",
    title: "Specialized Knowledge",
    text:
      "Taking the time to study and learn each topic she investigates, Caryolyn is effective in gaining specialized knowledge for the job. She brings credibility to the investigation industry. ",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.KeyFeature" }}>
      <Container>
        <SectionHeader
          slogan="An Investigator Unlike Any Other"
          title="Why Carolyn Carlson is unique"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mb: 10,
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
