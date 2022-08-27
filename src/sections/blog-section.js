/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import PostCard from "components/post-card.js";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/router";
import moment from "moment";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection({ mappedPosts }) {
  const router = useRouter();

  return (
    <section sx={{ variant: "section.news" }}>
      <Container>
        <SectionHeader
          slogan="From the Blog"
          title="Check Out Recent Posts by CC Investigations"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}>
            {mappedPosts.length ? (
              mappedPosts.map((p, index) => (
                <PostCard
                  key={index}
                  src={p.mainImage}
                  alt="thumbnail"
                  postLink={`/post/${p.slug.current}`}
                  title={p.title}
                  authorName={"CC Investigations"}
                  date={moment(p.publishedAt).format("MM-DD-YY")}
                />
              ))
            ) : (
              <>No Posts Yet</>
            )}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    ".carousel-container": {
      mx: -3,
    },
  },
};
