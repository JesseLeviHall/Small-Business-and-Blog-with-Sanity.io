/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

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
      "Investigating important local issues cutlivatting a deep understanding of the voice of the community and its members has earnd Carolyn a vast network of professional connections built on trust and a committment to integrity social responsibility.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "High Quality Results",
    title: "High Quality Results",
    text:
      "A tireless researcher and investigator, Caroylyn takes pride in delivering on time with high-standards and gets to the bottom of the issue by uncovering the facts.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Specialized Knowledge",
    title: "Specialized Knowledge",
    text:
      "Taking the time to study and learn each topic she investigates, Caryolyn is effective in gaining specialized knowledge for the job. She brings credibility to the investigation industry.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="An Investigator Unlike Any Other"
          title="Why Carolyn Carlson is unique"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
