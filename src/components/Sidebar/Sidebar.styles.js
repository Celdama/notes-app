import styled from 'styled-components';

export const Wrapper = styled.section`
  overflow-y: auto;
  outline: 1px solid red;
  width: 20%;
  height: 100vh;

  .title {
    overflow: hidden;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text-snippet {
      padding-inline: 5px;
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.2rem;
      color: #414e74;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .selected-note {
    background-color: #4a4e74;
  }

  .selected-note .text-snippet {
    color: white;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  h3 {
    font-size: 1.75rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #4a4e74;
  border: none;
  color: white;
  border-radius: 3px;
  height: 30px;
  width: 30px;
`;
