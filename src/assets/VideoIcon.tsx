import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const VideoIcon = (props:SvgProps) => (
  <Svg
    width={16}
    height={9}
    viewBox="0 0 16 9"
    fill="none"
    {...props}
  >
    <Path
      d="M0 0.437489V6.29718C0.0053125 7.62218 1.0875 8.68843 2.40719 8.68311H10.9481C11.1909 8.68311 11.3862 8.4878 11.3862 8.2503V2.39093C11.3809 1.06593 10.2991 -0.000635895 8.97906 0.00467661H0.438125C0.195313 0.00467661 0 0.199989 0 0.437489ZM11.93 2.72343L15.4563 0.147177C15.7625 -0.105948 16 -0.0428236 16 0.416551V8.27124C16 8.79405 15.7097 8.73061 15.4563 8.54061L11.93 5.96968V2.72343Z"
      fill="#4A8CFF"
    />
  </Svg>
);
export default VideoIcon;
