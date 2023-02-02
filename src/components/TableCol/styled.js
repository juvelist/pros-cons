import styled from 'styled-components'

export const TableCol = styled.div`
  flex: 1 0 50%;
  width: 50%;
  &:first-child {
    border-right: 2px solid #fffae6;
  }
`

export const TableColHeader = styled.h2`
  border-bottom: 2px solid #fffae6;
  font-size: 24px;
  font-weight: 400;
  padding: 12px;
  text-align: center;
`
