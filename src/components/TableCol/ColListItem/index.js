import React from 'react';
import * as Styled from './styled'

const ColListItem = (props) => {
  return (
    <Styled.ColListItem>{props.index + 1}. {props.val}</Styled.ColListItem>
  );
};

export default ColListItem;
