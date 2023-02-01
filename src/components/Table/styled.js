import styled from 'styled-components'

export const Table = styled.div`
  background: #2f2f2f;
  border: 2px solid #fffae6;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  min-height: 400px;
  overflow: hidden;
  width: 800px;
`

export const TableHeader = styled.div`
  border-bottom: 2px solid #fffae6;
  font-size: 32px;
  font-weight: 500;
  padding: 20px 0;
  text-align: center;
`

export const TableBody = styled.div`
  display: flex;
  flex-grow: 1;
  background: #2777873b;
`
