/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import Sticky from "react-stickynode";
import HeaderBlog from "./header/headerBlog";
import Footer from "./footer/footer";

export default function LayoutBlog({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <HeaderBlog className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      <main id="content" sx={{ variant: "layout.main" }}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
