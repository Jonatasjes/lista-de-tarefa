import styled from 'styled-components';

export const HomeSection = styled.section`
  .table-head,
  .table-body {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0 15px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }

  .table-head {
    width: 100%;
    height: 40px;
    justify-content: space-between;
    .table-name {
      span {
        letter-spacing: 2px;
      }
    }
  }

  .table-body {
    flex-direction: column;
    margin-top: 2px;
    max-height: 65vh;
    overflow: auto;

    .table-add-row {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }
  }
`;
