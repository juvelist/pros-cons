import React from 'react';
import * as Styled from './styled'
import ColListItem from '../ColListItem/index';

const ColList = (props) => {
  return (
    <Styled.ColList>
      {props.list.map((data, index) =>
        <ColListItem key={index} index={index} val={data}></ColListItem>
      )}
    </Styled.ColList>
  );
};

export default ColList;
