# Small Business Website

Full-Featured Small Business Website With Blog

## Table of contents

- [General info](#general-info)
- [Live Site](#project-demo)
- [Project Video](#project-video)
- [Technologies](#technologies)
- [Features](#features)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General info

This is a unique site built with Next.js that integrates Sanity.io to provide data for the blog and Twilio SendGrid to provide contact form e-mail delivery.

<div align="center">Home Page </div>
<br/>
<div align="center">
<kbd>
<img src="./assets/3.jpg">
</kbd>
</div>
<br />

## Project Demo

[Click to view live site](https://pre-production-eta.vercel.app)

## Project Video

[Click to view video demo](comming soon)

## Technologies

### Backend Services

- Sanity.io
- Twilio SendGrid/mail

### Frontend Development

- JavaScript (ES6)
- HTML5
- CSS3
- Next.js - version 9.5.3
- React - version 16.14.0
- theme-ui version 0.3.1

## Code Examples

### Blog

```Sanity.io
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

return (
    <ThemeProvider theme={theme}>
      <LayoutBlog>
        <section sx={styles.post}>
          <Container sx={styles.container}>
            {mappedPosts.length ? (
              mappedPosts.map((p, index) => (
                <Box sx={styles.card} key={index}>
                  <Box
                    onClick={() => router.push(`/post/${p.slug.current}`)}
                    sx={styles.thumbnail}>
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
```

### JavaScript/Next.js

```
export default function Package() {
  const { individual, business } = packageData;

  const [state, setState] = useState({
    active: "individual",
    pricingPlan: individual,
  });

  const handlePricingPlan = (plan) => {
    if (plan === "business") {
      setState({
        active: "business",
        pricingPlan: business,
      });
    } else {
      setState({
        active: "individual",
        pricingPlan: individual,
      });
    }
  };


```

## Features

- Full stack CMS application utilizing Santiy.io and Twilio SendGrid, React, and Next.js
- A Public Contact Form to send client contact messages.
- Front-End css styles using theme-ui styled components.

## Status

The project is deployed and in use by the client. Public may use repo as reference.

## Inspiration

As a developer I had an interest in exploring the content management platform Sanity.io. This project was intended as an oportunity to improve my delevelopment skills as well as provide a useful website to the client.

## Contact

Created by [Jesse Hall](https://www.linkedin.com/in/jessehall/)
Feel free to contact me for any questions!

```

```
