import React from "react";
import { Svg, Path, G, Defs, Rect } from "react-native-svg";

const JamIcon = ({ size = 17, color = 'black' }) => (
     <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
          <G clip-path="url(#clip0_1955_14244)">
               <Path d="M10.5 1.75C15.3326 1.75 19.25 5.66738 19.25 10.5C19.25 15.3326 15.3326 19.25 10.5 19.25C5.66738 19.25 1.75 15.3326 1.75 10.5C1.75 5.66738 5.66738 1.75 10.5 1.75ZM10.5 3.5C8.64348 3.5 6.86301 4.2375 5.55025 5.55025C4.2375 6.86301 3.5 8.64348 3.5 10.5C3.5 12.3565 4.2375 14.137 5.55025 15.4497C6.86301 16.7625 8.64348 17.5 10.5 17.5C12.3565 17.5 14.137 16.7625 15.4497 15.4497C16.7625 14.137 17.5 12.3565 17.5 10.5C17.5 8.64348 16.7625 6.86301 15.4497 5.55025C14.137 4.2375 12.3565 3.5 10.5 3.5ZM10.5 5.25C10.7143 5.25003 10.9212 5.32871 11.0813 5.47113C11.2415 5.61354 11.3438 5.80978 11.3689 6.02262L11.375 6.125V10.1378L13.7436 12.5064C13.9006 12.6638 13.9917 12.8751 13.9984 13.0973C14.0052 13.3195 13.9272 13.536 13.7802 13.7027C13.6331 13.8695 13.4281 13.974 13.2068 13.9951C12.9855 14.0162 12.7645 13.9522 12.5886 13.8162L12.5064 13.7436L9.88138 11.1186C9.74538 10.9825 9.65804 10.8054 9.63287 10.6146L9.625 10.5V6.125C9.625 5.89294 9.71719 5.67038 9.88128 5.50628C10.0454 5.34219 10.2679 5.25 10.5 5.25Z" fill="#0890EA" />
          </G>
     </Svg>

);

export default JamIcon;
