import styled from "styled-components";

export const LoginStyled = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8f8;
`

export const LoginContainer = styled.div`
  padding: 50px 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, .12px) 0 1px 3px rgba(0, 0, 0, .7px); */
  box-shadow: 1px 1px 8px -6px rgba(0, 0, 0, 0.7), -1px -1px 8px -10px rgba(0, 0, 0, 0.7);

  img {
    object-fit: contain;
    height: 130px;
    margin-bottom: 30px;
  }

  button {
    margin-top: 30px;
    color: #fff;
    background-color: #0a8d48 !important;
    text-transform: inherit !important;
  }
`