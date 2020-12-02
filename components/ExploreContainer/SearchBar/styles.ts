import styled from 'styled-components';
import { colors } from '../../../styles/constants/colors';
import { breakpoints } from '../../../styles/constants/utils';

export const Wrapper = styled.div`
  margin: 0 1rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 800px;
    margin: 0 auto;
  }

  .powered-by {
    .algolia-wrapper {
      float: right;
      text-align: right;

      img {
        height: 16px;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    form {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  border: 2px solid ${colors.primaryBlue};
  font-size: 26px;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 1px auto ${colors.primaryBlue};
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }
`;
