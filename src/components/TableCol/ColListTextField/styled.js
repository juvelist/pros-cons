import styled from 'styled-components'

export const ColListTextField  = styled.label`
  flex: 1;
`

export const ColListText  = styled.input`
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  font-weight: 400;
  margin-left: 6px;
  padding: 4px;
  outline: 1px solid transparent;
  transition: all .2s ease;
  width: 100%;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
  &:focus {
    cursor: text;
    outline: 1px solid #fffae6;
    padding-left: 8px;
  }
`
