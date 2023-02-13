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
  const [tableData, setTable] = useState(prosConsData)
  const headerTitle = 'Should I eat at McDonalds?'

  return (
    <Styled.Table>
      <Styled.TableHeader>{headerTitle}</Styled.TableHeader>
      <Styled.TableBody>
        {tableData.map(data =>
          <TableCol key={data.title} title={data.title} lists={data.list}></TableCol>
        )}
      </Styled.TableBody>
    </Styled.Table>
  );
};
