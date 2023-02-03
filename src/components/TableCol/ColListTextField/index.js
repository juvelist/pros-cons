import React from 'react'
import * as Styled from './styled'

export const ColListTextField = (props) => {
  return (
    <Styled.ColListTextField>
      <Styled.ColListText type="text" defaultValue={props.val}/>
    </Styled.ColListTextField>
  );
};
