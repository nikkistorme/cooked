import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
  black: '#001524',
  white: '#fff',
  color_primary: '#83C5BE',
  color_secondary: '#FFECD1',
  color_background: '#EDF6F9',
  font_heading: "'Abril Fatface', cursive",
  font_body: "'Baskerville', serif"
};

const StyledPage = styled.div`
  /* background: ${props => props.theme.color_background}; */
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  .hidden {
    display: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: ${theme.font_body};
    color: ${theme.black};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
  h1, h2, h3, h4 {
    font-family: ${theme.font_heading};
    margin: 0;
  }
  h1 {font-size: 2.35rem;}
  h2 {font-size: 2.1rem;}
  h3 {font-size: 1.85rem;}
  button, input {font-family: ${theme.font_body}}
`;

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}