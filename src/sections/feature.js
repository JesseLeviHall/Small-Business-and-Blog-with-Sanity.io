/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.png";
import Partnership from "assets/feature/partnership.png";
import Knowledge from "assets/feature/knowledge.png";
import Experience from "assets/feature/experience.png";

const data = [
  {
    id: 1,
    imgSrc: Experience,
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
      "Investigating important local issues has cutlivated a deep understanding of the voice of the community and its members. CC Investigations has earnd a vast network of professional connections built on trust and a committment to integrity and social responsibility.",
  },
  {
    id: 3,
    imgSrc: Performance,
    altText: "High Quality Results",
    title: "High Quality Results",
    text:
      "As tireless researcher and investigator, CC Investigations takes pride in delivering high-quality timely results and gets to the bottom of the issue by uncovering the facts.",
  },
  {
    id: 4,
    imgSrc: Knowledge,
    altText: "Specialized Knowledge",
    title: "Specialized Knowledge",
    text:
      "With an approach characterized by diligence and equanimity, CC Investigations is effective in gaining specialized knowledge. Corroboration and credibility are essential to each investigation.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Special Features"
          title="Why CC Investigations Is Unique"
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
