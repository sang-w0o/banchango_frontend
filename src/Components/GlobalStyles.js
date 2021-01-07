import { createGlobalStyle } from 'styled-components';
import bocFont from '../assets/fonts/paybooc_Medium.ttf';
import notoFont from '../assets/fonts/NotoSansKR-Regular.otf';

import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
@font-face {
    font-family: 'paybooc-Medium';
    src: url(${bocFont});
  }
  @font-face {
      font-family: 'notosans-Regular';
      src: url(${notoFont});
  }
    ${reset};
    body {
        font-family: 'paybooc-Medium', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
    }
`;

export default globalStyles;
