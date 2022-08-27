import React from "react";
import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { ThemeProvider } from "theme-ui";
import LayoutBlog from "components/layoutBlog";
import theme from "theme";

/** @jsx jsx */
import { jsx } from "theme-ui";

import {
  Container,
  Flex,
  Box,
  Button,
  Input,
  Label,
  Text,
  Textarea,
  Heading,
} from "theme-ui";

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleSendGridResponse = (status) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
      });
    } else {
      setStatus({
        info: { error: true },
      });
    }
  };

  async function handleOnSubmit(e) {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    const res = await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });

    handleSendGridResponse(res.status);
  }

  return (
    <ThemeProvider theme={theme}>
      <LayoutBlog>
        <section sx={{ variant: "section.testimonial" }}>
          <Container css={{ textAlign: "center" }}>
            <Box sx={styles.contentBox}>
              <Box sx={styles.contentBoxInner}>
                <Heading as="h1" sx={styles.title}>
                  Send A Service Request
                </Heading>
                <Text>
                  To: CC Investigations <br /> Los Ranchos, New Mexico
                </Text>
                <form method="post" onSubmit={handleOnSubmit}>
                  <div sx={styles.contactForm}>
                    <p>
                      <Label htmlFor="name">Your Name</Label>
                      <Input type="text" name="name" id="name"></Input>
                    </p>
                    <p>
                      <Label htmlFor="email">Your Email Address</Label>
                      <Input type="email" name="email" id="email"></Input>
                    </p>{" "}
                    <p>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea id="message" name="message" />
                    </p>
                    <div>
                      {status.submitted && (
                        <div className="success">Success!</div>
                      )}
                    </div>
                    <p>
                      <Button
                        css={{ backgroundColor: "black" }}
                        type="submit"
                        disabled={status.submitting}
                        aria-label="Subscribe">
                        {!status.submitting
                          ? !status.submitted
                            ? "Submit"
                            : "Message Sent"
                          : "Sending..."}
                      </Button>
                    </p>
                  </div>
                </form>
              </Box>
            </Box>
          </Container>
        </section>
      </LayoutBlog>
    </ThemeProvider>
  );
}

const styles = {
  contentBox: {
    backgroundColor: "primary",
    mt: 165,
    textAlign: "center",
    borderRadius: 10,
    py: ["60px", null, 8],
  },
  contentBoxInner: {
    color: "black",
    width: ["100%", null, "540px", "600px"],
    mx: "auto",
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ["24px", null, "36px", null, null, "52px", null, "66px"],
    color: "black",
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: "700",
    letterSpacing: ["-.5px", null, "-1.5px"],
    mb: [2, 3],
  },
  description: {
    fontSize: ["15px", 2, null, null, null, "17px", null, 3],
    color: "black",
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  contactForm: {
    backgroundColor: ["transparent", "white"],
    padding: 5,
    borderRadius: 10,
  },
};
