import React from "react";
import PropTypes from "prop-types";
import { Svg, Path, G, Defs, ClipPath } from "react-native-svg";

import { colors } from "../../../assets/styles/styles";

export const EyeIcon = ({ show, error }) => {
  const strokeColor = error ? colors.systemError : colors.brandPrimary01; // Cambia según tu lógica de error

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      {show ? (
        <>
          <Path stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
          <Path stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </>
      ) : (
        <>
          <G stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" clipPath="url(#a)">
            <Path fill="none" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.494 18.494 0 0 1-2.16 3.19m-6.72-1.07a2.998 2.998 0 0 1-5.194-2.098A3 3 0 0 1 9.88 9.88M1 1l22 22" />
          </G>
          <Defs>
            <ClipPath id="a">
              <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
          </Defs>
        </>
      )}
    </Svg>
  );
};

EyeIcon.propTypes = {
  show: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
