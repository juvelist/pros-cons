import React from 'react'
import * as Styled from './styled'
import {ColList} from './ColList'

export const TableCol = ({title, lists}) => {
  return (
    <Styled.TableCol>
      <Styled.TableColHeader>{title}</Styled.TableColHeader>
      <ColList lists={lists}></ColList>
    </Styled.TableCol>
  );
};
