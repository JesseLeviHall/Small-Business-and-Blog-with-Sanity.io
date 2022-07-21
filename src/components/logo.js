/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.log",
        display: "flex",
        cursor: "pointer",
        mr: 15,
        width: "100px",
      }}
      {...rest}>
      <Image src={src} alt="Langing Page Logo" />
    </Link>
  );
}
