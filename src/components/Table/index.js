import React from 'react'
import {TableCol} from '../TableCol'
import * as Styled from './styled'

const prosConsData = [
  {
    title: 'Pros',
    list: [
      'It\'s really tasty',
      'It\'s really tasty for me',
      'It\'s really tasty',
      'It\'s really tasty',
      'It\'s really tasty',
      'It\'s really tasty',
      'It\'s really tasty',
      'It\'s really tasty',
      'It\'s really tasty',
      'It\'s really tasty',
      'It\'s really tasty'
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

  const headerTitle = 'Should I eat at McDonalds?'

  return (
    <Styled.Table>
      <Styled.TableHeader>{headerTitle}</Styled.TableHeader>
      <Styled.TableBody>
        {prosConsData.map(data =>
          <TableCol key={data.title} title={data.title} list={data.list}></TableCol>
        )}
      </Styled.TableBody>
    </Styled.Table>
  );
};
