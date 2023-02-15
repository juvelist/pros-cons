import React, {useEffect, useState} from 'react'
import * as Styled from './styled'
import {ColListItem} from '../ColListItem/index'

export const ColList = ({lists}) => {
  const [list, setList] = useState(lists)

  const addNewValue = (newValue, index) => {
    const newList = [...list]
    newList[index].value = newValue

    const newEmptyValue = createEmptyValue()
    newList.push(newEmptyValue)

    setList(newList)
  }
  const addValue = (newValue, index) => {
    const newList = [...list]
    newList[index].value = newValue

    setList(newList)
  }

  const removeEmptyValue = (index) => {
    const newList = [...list]
    const filteredList = newList.filter((item, i) => i !== index)

    setList(filteredList)
  }

  const createEmptyValue = () => {
    return {
      id: (Math.random()*1000000).toFixed(),
      value: null
    }
  }
  const addEmptyValue = () => {
    if (list[list.length - 1].value) {
      const newEmptyValue = createEmptyValue()
      setList([...list, newEmptyValue])
    }
  }

  const updateValue = (updatedValues, index) => {
    const [oldValue, newValue] = updatedValues

    if(newValue.length === 0) {
      removeEmptyValue(index)
    } else if (!oldValue || oldValue.length === 0) {
      addNewValue(newValue, index)
    } else {
      addValue(newValue, index)
    }
  }

  useEffect(() => {
    addEmptyValue()
  }, []);

  return (
    <Styled.ColList>
      {list.map((listItem, index) => {
          return (
            <ColListItem key={listItem.id} index={index} val={listItem.value} updateValue={updateValue}></ColListItem>
          )
        }
      )}
    </Styled.ColList>
  );
};
