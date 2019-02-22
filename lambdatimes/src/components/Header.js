import React from "react";
import styled, { css } from "styled-components";
import { Alert } from "reactstrap";
// import styled from 'styled-components'

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const StyledDiv = styled.div``;
const StyledHeading = styled.h1``;
const StyledSpan = styled.span``;

const Header = () => {
  return (
    <div className="header">
      <StyledSpan>SMARCH 32, 2018</StyledSpan>
      <StyledHeading>Lambda Times</StyledHeading>
      <StyledSpan>98°</StyledSpan>
    </div>
  );
};

export default Header;
