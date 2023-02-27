import React, {useState} from 'react'
import * as Styled from './styled'

export const ColListTextField = ({val, index, updateValue}) => {
  return (
    <Styled.ColListTextField>
      <Styled.ColListText
        type='text'
        defaultValue={val}
        onChange={e => updateValue(e.target.value, index)}
      />
    </Styled.ColListTextField>
  );
};
