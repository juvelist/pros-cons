import React, {useEffect, useState} from 'react'
import * as Styled from './styled'
import {ColListItem} from '../ColListItem/index'

export const ColList = ({lists}) => {
  const [list, setList] = useState(lists)

  const addNewValue = (newValue) => {
    const newList = [...list]
    newList.pop()
    newList.push(newValue, null)
    setList(newList)
  }
  const addValue = (newValue, index) => {
    const newList = list.map((item, i) => {
      if (i === index) {
        item = newValue
      }
      return item
    })
    setList(newList)
  }

  const addEmptyValue = () => {
    setList([...list, null])
  }
  const removeEmptyValue = (index) => {
    const newList = list.filter((item, i) => i !== index && item)
    console.log('newList', newList)
    setList(newList)
    console.log('list', list)

    // 
  }

  const updateValue = (updatedValues, index) => {
    const [oldValue, newValue] = updatedValues

    if(!oldValue || oldValue.length === 0) {
      console.log('Add new listItem')
      addNewValue(newValue)
    } else if (newValue.length === 0) {
      console.log('Delete current listItem', index)
      removeEmptyValue(index)
    } else {
      addValue(newValue, index)
    }
  }

  useEffect(() => {
    setList([...list, null])
  }, []);

  return (
    <Styled.ColList>
      {list.map((val, index) =>
        <ColListItem key={index} index={index} val={val} updateValue={updateValue}></ColListItem>
      )}
    </Styled.ColList>
  );
};
