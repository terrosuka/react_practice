import React from "react"
import styled from "styled-components"

const CloseButton = ({ length = 0.05, width = 1.3 }) => {
  return (
    <>
      <SCCloseButton length={length} width={width}></SCCloseButton>
    </>
  )
}

const SCCloseButton = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: #000;
  line-height: 1;
  width: ${(props) => props.width}em;
  height: ${(props) => props.length}em;
  background: currentColor;
  border-radius: 0.1em;
  position: relative;
  transform: rotate(45deg);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    transform: rotate(90deg);
  }
`

export default CloseButton
