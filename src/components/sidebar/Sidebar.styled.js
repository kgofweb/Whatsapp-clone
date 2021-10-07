import styled from "styled-components";

// Sidebar
export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: .28;
`

// Sidebar Header
export const SidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-right: 1px solid lightgray;
`

// Sidebar Right
export const SidebarHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 5vw;

  .MuiSvgIcon-root {
    font-size: 20px !important;
  }
`
// Sidebar Search
export const SidebarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6f6;
  height: 38px;
  padding: 10px;
`

export const SidebarSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  border-radius: 20px;
  background-color: white;

  & > input {
    border: none;
    outline: none;
    width: 75%;
    margin-left: 12px;
    font-size: 1rem;
  }

  /* Search icon */
  .MuiSvgIcon-root {
    color: gray;
    margin-left: 10px;
  }
`

export const SidebarChatStyled = styled.div`
  flex: 1;
  background-color: white;
  overflow-y: scroll;
  border-radius: 0 0 0 .300rem;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;