import React from 'react'
import * as Styled from './styled'
import {ColListTextField} from '../ColListTextField'

export const ColListItem = ({val, index, updateValue}) => {
  return (
    <Styled.ColListItem>
      {index + 1}.
      <ColListTextField index={index} val={val} updateValue={updateValue}></ColListTextField>
    </Styled.ColListItem>
  );
};
