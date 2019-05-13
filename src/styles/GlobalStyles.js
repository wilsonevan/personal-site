import { createGlobalStyle } from "styled-components";

const globalColors = {
  PrimaryWhite: "#F2F2F2",
  PrimaryBlack: "#1C1C1C",
  PrimaryGrey: "#424242",
  SecondaryGrey: "#d3d3d3",
  PrimaryRed: "#FF6B5F",
  SecondaryRed: "#FF948C",
  PrimaryOrange: "#FFBD5F",
  SecondaryOrange: "#FFDBA8",
  PrimaryGreen: "#A5FAB4",
  SecondaryGreen: "#8CFFA0",
  SecondaryBlue: "#A9D3F8",
  PrimaryBlue: "#6AB9FF"
};

const globalSizes = {
    ScreenWidth: "700px"
}

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('https://fonts.googleapis.com/css?family=Bungee+Shade');

* {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: inherit !important;
}

body {
    box-sizing: border-box !important;
    /* font-family: Montserrat, san-serif; */
    letter-spacing: 1.25px !important;
    font-weight: 300 !important;
    background: #F2F2F2 !important;
    color: ${globalColors.PrimaryGrey};
}

h1 {
    font-family: 'Bungee Shade', cursive !important;
    letter-spacing: 2px !important;
    font-weight: 1200 !important;
    font-size: 4rem !important;
    padding-bottom: 0.2rem;
    color: ${globalColors.PrimaryRed};
    /* border-bottom: 1px solid #349dc4; */

    @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
        font-size: 3rem !important;
    };
}

h2, h3, h4, h5, h6,
p, div, button, a, 
input, select, textarea {
    /* font-family: Montserrat, san-serif; */
    font-weight: 300 !important;
    letter-spacing: 1.25px !important;
    color: ${globalColors.PrimaryGrey};
}
`;

export { GlobalStyles, globalColors, globalSizes };
