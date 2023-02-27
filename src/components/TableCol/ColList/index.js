import React, {useEffect, useState} from 'react'
import * as Styled from './styled'
import {ColListItem} from '../ColListItem/index'

const createEmptyValue = () => {
  return {
    id: (Math.random()*1000000).toFixed(),
    value: null
  }
}

export const ColList = ({lists}) => {
  const [list, setList] = useState(lists)

  const addEmptyValue = (list) => {
    if (list[list.length - 1].value) {
      const newEmptyValue = createEmptyValue()
      setList([...list, newEmptyValue])
    }
  }

  const updateValue = (updatedValue, index) => {
    setList(prevState => {
      const prevValue = prevState[index].value

      if(updatedValue.length === 0) {
        return prevState.filter((item, i) => i !== index)
      }

      const newState = prevState.map((stateItem, i) => {
        if(i === index) {
          return {
            ...stateItem,
            value: updatedValue
          }
        }
        return stateItem
      })

      const newEmptyValue = createEmptyValue()
      if(!prevValue) {
        return [...newState, newEmptyValue]
      }
      return newState
    })
  }

  useEffect(() => {
    addEmptyValue(list)
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
