import React from 'react'
import * as Styled from './styled'
import {ColListTextField} from '../ColListTextField'

export const ColListItem = (props) => {
  return (
    <Styled.ColListItem>
      {props.index + 1}.
      <ColListTextField val={props.val}></ColListTextField>
    </Styled.ColListItem>
  );
};
