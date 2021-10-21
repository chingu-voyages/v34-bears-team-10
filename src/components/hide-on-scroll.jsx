import PropTypes from "prop-types";
import { Slide, useScrollTrigger } from "@mui/material";

export default function HideOnScroll({ children, direction = "down" }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={direction} in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  direction: PropTypes.oneOf(["down", "left", "right", "up"]),
};
