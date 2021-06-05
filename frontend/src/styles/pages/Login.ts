import styled from 'styled-components';

export const LoginSection = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    padding: 26px;
    border-radius: 10px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    background: #fff;

    fieldset {
      border: none;
      legend {
        margin-bottom: 15px;
        font-size: 24px;
        font-weight: 700;
        color: #2ab0dc;
        text-align: center;
      }

      p {
        display: grid;
        margin-top: 15px;

        label {
          font-size: 13px;
          font-weight: 600;
          color: #666;
        }
        input {
          border: none;
          height: 30px;
          border-bottom: 2px solid #ccc;
          padding: 2px 10px;
          margin-top: 3px;

          &:focus {
            border-bottom: 2px solid #2ab0dc;
            box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
          }
        }
      }

      button {
        width: 100%;
        height: 30px;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        background: #2bb0dc;
        border-radius: 0;
        border: none;
        margin-top: 20px;
      }
    }
  }
`;
