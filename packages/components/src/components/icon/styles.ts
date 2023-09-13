import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    display: inline-block;

    /* Remove white space in inline-block elements */
    font-size: 0;
  }

  .icon {
    direction: ltr;
    display: inline-block;
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: "Material Icons";
    font-feature-settings: "liga";
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: 1;
    /* stylelint-disable-next-line value-keyword-case */
    text-rendering: optimizeLegibility;
    text-transform: none;
    white-space: nowrap;
    word-wrap: normal;
  }
`;
