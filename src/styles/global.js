import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  padding:0;
  margin:0;
}

body {
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
}


ul, ol {
  list-style:none;

}

input[type=text],
input[type=password],
textarea,
select {
  border:0;
  padding:0;
  width:100%;
  height:100%;
}

`;
export default GlobalStyle;
