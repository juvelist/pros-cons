import React, {useEffect, useState} from 'react'
import {TableCol} from '../TableCol'
import * as Styled from './styled'

const prosConsData = [
  {
    title: 'Pros',
    list: [
      'It\'s really tasty 1',
      'It\'s really tasty for me',
      'It\'s really tasty 3',
      'It\'s really tasty 4',
      'It\'s really tasty 5',
      'It\'s really tasty 6',
      'It\'s really tasty 7',
      'It\'s really tasty 8',
      'It\'s really tasty 9',
      'It\'s really tasty 10',
      'It\'s really tasty 11'
    ]
  },
  {
    title: 'Cons',
    list: [
      'Makes me fat',
      'Too expensive'
    ]
  }
];

export const Table = () => {
  let tableDataWithValues = prosConsData.map(columnDataWithValues => {
    const title = columnDataWithValues.title
    const list = columnDataWithValues.list.map(columnData => {
      columnData = {
        id: (Math.random()*1000000).toFixed(),
        value: columnData
      }
      return columnData
    })
    return {title, list}
  })

  const [tableData] = useState(tableDataWithValues)
  const headerTitle = '¿Debo comer en McDonalds?'

  return (
    <Styled.Table>
      <Styled.TableHeader>{headerTitle}</Styled.TableHeader>
      <Styled.TableBody>
        {tableData.length > 0 && tableData.map((data, index) =>
          <TableCol key={index} title={data.title} lists={data.list}></TableCol>
        )}
      </Styled.TableBody>
    </Styled.Table>
  );
};
