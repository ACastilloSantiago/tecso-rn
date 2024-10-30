import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

export const MapPin = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="20px" height="20px">
      <G stroke="#99DBD6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" clipPath="url(#a)">
        <Path d="M17.5 8.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 0 1 15 0Z" />
        <Path d="M10 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
