import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import { theme, typography } from './variables';

/* eslint-disable */
injectGlobal`
  ${styledNormalize}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 17px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: ${typography.bodyFont};
    color: ${theme.textColor};
    background: url(https://images.unsplash.com/reserve/MxJDaPQQAGf9MgAJNiLA_Peppers_Albuquerque_2013.JPG) no-repeat;
    line-height: 1.6;
    margin: 0;
    padding: 1em;
    &:after {
      content: '';
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background-image: linear-gradient(-15deg, rgba(249, 111, 132,.7) 0%, rgba(254, 225, 64,.7) 100%);
    }
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5 {
    letter-spacing: .067em;
  }

  h1, h2, h3, h4, h5, p {
    margin-top: .1em;
    margin-bottom: .8em;
  }

  a {
    color: ${theme.linkColor};
    text-decoration: none;
  }
`;
