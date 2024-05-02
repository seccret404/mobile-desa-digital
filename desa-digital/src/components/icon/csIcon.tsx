import React from "react";
import { Svg, Path, G, Defs, Rect } from "react-native-svg";

const CsIcon = ({ size = 17, color = 'black' }) => (
     <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
          <Path d="M16.38 12.9149C16.6862 12.1711 16.8525 11.3749 16.8525 10.4999C16.8525 9.86986 16.7562 9.26611 16.59 8.70611C16.0212 8.83736 15.4263 8.90736 14.805 8.90736C13.5327 8.90873 12.2788 8.60419 11.1488 8.01943C10.0189 7.43467 9.04613 6.58682 8.3125 5.54736C7.52771 7.44626 6.04723 8.97369 4.17375 9.81736C4.13875 10.0361 4.13875 10.2724 4.13875 10.4999C4.13875 11.3352 4.30329 12.1624 4.62297 12.9342C4.94265 13.706 5.41122 14.4072 6.00192 14.9979C7.19488 16.1909 8.81289 16.8611 10.5 16.8611C11.4187 16.8611 12.3025 16.6599 13.0988 16.3011C13.5975 17.2549 13.825 17.7274 13.8075 17.7274C12.3725 18.2086 11.2612 18.4449 10.5 18.4449C8.3825 18.4449 6.36125 17.6136 4.87375 16.1174C3.969 15.2154 3.29645 14.1075 2.91375 12.8886H1.75V8.90736H2.70375C2.99271 7.50081 3.65706 6.19872 4.62629 5.13925C5.59553 4.07979 6.83349 3.30247 8.20884 2.88978C9.58418 2.47708 11.0456 2.44441 12.438 2.79523C13.8304 3.14605 15.1019 3.86727 16.1175 4.88236C17.2202 5.98071 17.9723 7.38145 18.2787 8.90736H19.25V12.8886H19.1975L16.0825 15.7499L11.445 15.2249V13.7636H15.6712L16.38 12.9149ZM8.11125 10.2986C8.37375 10.2986 8.6275 10.4036 8.81125 10.5961C8.99591 10.7823 9.09953 11.0339 9.09953 11.2961C9.09953 11.5583 8.99591 11.8099 8.81125 11.9961C8.6275 12.1799 8.37375 12.2849 8.11125 12.2849C7.56 12.2849 7.11375 11.8474 7.11375 11.2961C7.11375 10.7449 7.56 10.2986 8.11125 10.2986ZM12.88 10.2986C13.4313 10.2986 13.8688 10.7449 13.8688 11.2961C13.8688 11.8474 13.4313 12.2849 12.88 12.2849C12.3288 12.2849 11.8825 11.8474 11.8825 11.2961C11.8825 11.0316 11.9876 10.7778 12.1747 10.5908C12.3617 10.4037 12.6154 10.2986 12.88 10.2986Z" fill="black" />
     </Svg>
);
export default CsIcon;
