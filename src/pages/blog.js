import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ShapeLeft from "../assets/shape-left.png";
import ShapeRight from "../assets/shape-right.png";
import { ThemeProvider } from "theme-ui";
import LayoutBlog from "components/layoutBlog";
import YOURL from "../../config";
import moment from "moment";
import theme from "theme";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Image, Flex, Box, Button, Text, Heading } from "theme-ui";

export default function Blog({ posts }) {
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
      <LayoutBlog>
        <section sx={styles.post}>
          <Container css={{ textAlign: "center", background: "#defbfc" }}>
            {mappedPosts.length ? (
              mappedPosts.map((p, index) => (
                <Box sx={styles.card} key={index}>
                  <Box sx={styles.thumbnail}>
                    <Image src={p.mainImage} alt="thumbnail" />
                  </Box>

                  <Flex sx={styles.postContent}>
                    <Heading
                      onClick={() => router.push(`/post/${p.slug.current}`)}
                      sx={styles.title}>
                      {p.title}
                    </Heading>

                    <Flex sx={styles.postFooter}>
                      <Text sx={styles.postFooter.date}>
                        {moment(p.publishedAt).format("MM-DD-YY")}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              ))
            ) : (
              <>No Posts Yet</>
            )}
          </Container>
        </section>
      </LayoutBlog>
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
  card: {
    backgroundColor: "white",
    boxShadow: "0px 4px 10px rgba(38,78,118,0.12)",
    borderRadius: "7px",
    pt: "20px",
    m: "0 15px 140px",
    transition: "all 0.3s",
    "&:hover": {
      boxShadow: "0px 5px 20px rgba(38,78,118,0.15)",
    },
  },

  thumbnail: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: "7px",
    overflow: "hidden",
    display: "flex",
    img: {
      borderRadius: "7px",
      minWidth: "25%",
    },
  },
  postContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: ["15px 20px", "25px 30px"],
  },
  title: {
    fontSize: [3, null, null, null, null, 4],
    color: "black",
    lineHeight: [1.4, 1.5],
    fontWeight: 700,
    mb: [3, 4, 5],
    pr: [0, null, null, null, 5],
    transition: "all 0.3s",
    "&:hover": {
      boxShadow: "0px 5px 20px rgba(38,78,118,0.15)",
    },
  },
  postFooter: {
    width: "25%",
    justifyContent: "space-between",
    alignText: "center",
    name: {
      fontSize: ["18px", null, 2],
      fontWeight: 500,
      color: "secondary",
      lineHeight: 1.4,
    },
    date: {
      textAlign: "center",
      fontSize: ["18px", null, 2],
      fontWeight: 400,
      lineHeight: 1.5,
      color: "secondary",
    },
  },
};
