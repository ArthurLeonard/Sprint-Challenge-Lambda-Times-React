import React from "react";
import styled, { css } from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const StyledDiv = styled.div``;
const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const StyledLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const StyledRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const StyledHeading = styled.h1``;
const StyledSpan = styled.span``;

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledLeft>
          <StyledSpan>TOPICS</StyledSpan>
          <StyledSpan>SEARCH</StyledSpan>
        </StyledLeft>
        <StyledCenter>
          <StyledSpan>GENERAL</StyledSpan>
          <StyledSpan>BROWNBAG</StyledSpan>
          <StyledSpan>RANDOM</StyledSpan>
          <StyledSpan>MUSIC</StyledSpan>
          <StyledSpan>ANNOUNCEMENTS</StyledSpan>
        </StyledCenter>
        <StyledRight>
          <StyledSpan>LOG IN</StyledSpan>
        </StyledRight>
      </StyledContainer>
    </StyledTopBar>
  );
};

export default TopBar;
