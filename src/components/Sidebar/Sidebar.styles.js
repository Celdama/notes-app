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

    :hover > .delete-btn {
      display: block;
    }

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

export const DeleteButton = styled.button`
  display: none;
  background: none;
  border: none;
`;

export const TrashIcon = styled.i`
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(1);
  width: 10px;
  height: 12px;
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px, inset -2px 0 0, inset 2px 0 0;
  border-radius: 0px 0px 1px 1px;
  margin-top: 4px;

  ::after,
  ::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }

  ::after {
    background-color: currentColor;
    border-radius: 3px;
    width: 16px;
    height: 2px;
    top: -4px;
    left: -5px;
  }

  ::before {
    width: 10px;
    height: 4px;
    border: 2px solid;
    border-bottom: transparent;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    top: -7px;
    left: -2px;
  }
`;
