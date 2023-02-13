import React, {useState} from 'react'
import * as Styled from './styled'

export const ColListTextField = ({val, index, updateValue}) => {
  const [value, setValue] = useState(val)

  const getInputValueChange = (e) => {
    setValue(e.target.value)

    const updatedValues = [value, e.target.value]
    updateValue(updatedValues, index)
  }

  return (
    <Styled.ColListTextField>
      <Styled.ColListText
        type='text'
        id={index}
        defaultValue={value}
        onChange={e => getInputValueChange(e)}
      />
    </Styled.ColListTextField>
  );
};
