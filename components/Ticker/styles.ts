import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1rem 0;
`;


export const Word = styled.p`
  color: #efefef;
  font-size: 20px;
  width: 100%;
  transition: all 0.25s ease-out;
  margin: 0 2rem;

  &:hover {
    transform: scale(1.2);
    cursor: default;
    color: #fff;
  }
`;
