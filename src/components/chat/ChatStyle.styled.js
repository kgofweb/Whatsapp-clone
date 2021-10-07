import styled from "styled-components";

export const ChatStyled = styled.div`
  flex: .72;
  display: flex;
  flex-direction: column;

`

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 11.5px;
  border-bottom: 1px solid lightgray;

  .MuiSvgIcon-root {
    font-size: 20px !important;
  }
`

export const ChatHeaderInfo = styled.div`
  flex: 1;
  margin-left: 20px;

  h3 {
    font-weight: 500;
  }

  p {
    color: gray;
    font-size: .900rem;
  }
`

export const ChatHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
`

export const ChatBody = styled.div`
  flex: 1;
  background: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png') fixed repeat;
  border-radius: 0 0 .300rem 0;
  padding: 30px 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
`

export const ChatMessage = styled.p`
  flex: .5;
  position: relative;
  background-color: white;
  padding: 8px;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: .400rem;
  width: fit-content;

  &.chat__reciever {
    margin-left: auto;
    background-color: #dcf8c6;
  }
`

export const ChatName = styled.span`
  position: absolute;
  top: -15px;
  font-size: x-small;
  font-weight: 800;
`

export const ChatTimesTamp = styled.span`
  font-size: x-small;
  margin-left: 10px;
`