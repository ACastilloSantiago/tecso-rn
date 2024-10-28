import PropTypes from "prop-types";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../../../assets/styles/styles";

export const Arrow = ({ variant, error }) => {
  const transform = variant === "down" ? "" : "rotate(180 9 9)";
  const stroke = error ? colors.systemError : "#F08318";
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G opacity="0.5" transform={transform}>
        <Path d="M3 6.75L9 12.75L15 6.75" stroke={stroke} stroke-width="2" stroke-linecap="square" />
      </G>
    </Svg>
  );
};

Arrow.propTypes = {
  variant: PropTypes.oneOf(["up", "down"]),
  error: PropTypes.bool,
};
