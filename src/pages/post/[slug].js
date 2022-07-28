import { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { SLUGURL } from "../../../config";
import Link from "next/link";
import ShapeLeft from "../../assets/shape-left.png";
import ShapeRight from "../../assets/shape-right.png";
import { ThemeProvider } from "theme-ui";
import LayoutBlog from "components/layoutBlog";
import moment from "moment";
import theme from "theme";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";

export const Post = ({ title, body, image, published }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "6f7brgic",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <ThemeProvider theme={theme}>
      <LayoutBlog>
        <section sx={styles.post}>
          <Container sx={styles.container}>
            <Link href="/blog">
              <Button aria-label="all-posts" sx={styles.button}>
                All Posts
              </Button>
            </Link>
            <Heading sx={styles.title} as="h1">
              {title}
            </Heading>
            <hr sx={{ mb: "25px" }} variant="hr"></hr>
            <Box sx={styles.imageBox}>
              {imageUrl && (
                <Image sx={styles.imageBox.img} src={imageUrl} alt="banner" />
              )}
            </Box>
            <Text sx={styles.date}>
              Published {"  "}
              {moment(published).format("MM-DD-YY")}
            </Text>
            <hr variant="hr"></hr>
            <Text sx={styles.body}>
              <BlockContent
                sx={styles.body}
                blocks={body}
                imageOptions={{
                  w: 220,
                  fit: "min",
                }}
                projectId="6f7brgic"
                dataset="production"
              />
            </Text>
            <Link href="/blog">
              <Button
                css={{ marginTop: "45px" }}
                aria-label="all-posts"
                sx={styles.button}>
                All Posts
              </Button>
            </Link>
          </Container>
        </section>
      </LayoutBlog>
    </ThemeProvider>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = SLUGURL + query;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
        published: post.publishedAt,
      },
    };
  }
};

export default Post;

const styles = {
  post: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
  },
  imageBox: {
    justifyContent: "center",
    mx: "auto",
    maxWidth: "65%",
    display: "block",
    mb: [0, null, -6, null, null, "-40px", null, -3],
    img: {
      boxShadow: "0px 4px 10px rgba(38,78,118,0.12)",
      position: "relative",
    },
  },
  container: {
    padding: ["15px 20px", "25px 30px"],
    textAlign: "center",
    background: "#defbfc",
    borderRadius: "28px",
    mb: "25px",
  },
  title: {
    mt: "85px",
    fontSize: "46pt",
    textAlign: "center",
    color: "#110221",
  },
  date: {
    variant: "sectionHeader.subTitle",
    color: "black",
    opacity: 1,
  },
  body: {
    textAlign: "left",
    color: "black",
    mx: "15px",
  },
  button: {
    top: 2,
  },
};
