import styled from 'styled-components'
import palette from '../styles/palette'

const Container = styled.div`
    padding: 16px;

    .add-todo-header-title {
        font-size: 21px;
    }

    .add-todo-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .add-todo-submit-button {
          padding: 4px 8px;
          border: 1px solid black;
          border-radius: 5px;
          background-color: white;
          outline: none;
          font-size: 14px;
        }
    }

    .add-todo-colors-wrapper {
      width: 100%;
      margin-top: 16px;
      display: flex;
      justify-content: space-between;

      .add-todo-color-list {
        display: flex;
        button {
          width: 24px;
          height: 24px;
          margin-right: 16px;
          border: 0;
          outline: 0;
          border-radius: 50%;
          &:last-child {
            margin: 0;
          }
        }
        .add-todo-selected-color {
          border: 2px solid black !important;
        }
      }
    }
    .bg-blue {
      background-color: ${palette.blue};
    }
    .bg-green {
      background-color: ${palette.green};
    }
    .bg-navy {
      background-color: ${palette.navy};
    }
    .bg-orange {
      background-color: ${palette.orange};
    }
    .bg-red {
      background-color: ${palette.red};
    }
    .bg-yellow {
      background-color: ${palette.yellow};
    }

    textarea {
      width: 100%;
      border-radius:  5px;
      height: 300px;
      border-color: ${palette.gray};
      margin-top: 12px;
      resize: none;
      outline: none;
      padding: 12px;
      font-size: 16px;
    }
`
export default Container
