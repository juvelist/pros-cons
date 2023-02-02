import React from 'react';
import * as Styled from './styled'
import {ColList} from './ColList';

export const TableCol = (props) => {
  return (
    <Styled.TableCol>
      <Styled.TableColHeader>{props.title}</Styled.TableColHeader>
      <ColList list={props.list}></ColList>
    </Styled.TableCol>
  );
};
