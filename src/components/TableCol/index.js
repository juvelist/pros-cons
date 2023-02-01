import React from 'react';
import * as Styled from './styled'
import ColList from './ColList';

const TableCol = (props) => {
  return (
    <Styled.TableCol>
      <Styled.TableColHeader className='column-title'>{props.title}</Styled.TableColHeader>
      <ColList list={props.list}></ColList>
    </Styled.TableCol>

  );
};

export default TableCol;
