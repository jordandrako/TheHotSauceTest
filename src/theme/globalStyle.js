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
    background: ${theme.siteBackground};
    line-height: 1.6;
    margin: 0;
    padding: 1em;
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
