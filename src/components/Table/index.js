import React from 'react'
import TableCol from '../TableCol'
import * as Styled from './styled'

const prosConsData = [
  {
    title: 'Pros',
    list: [
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test'
    ]
  },
  {
    title: 'Cons',
    list: [
      'test',
      'test',
      'test',
      'test',
    ]
  }
];

const Table = () => {

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

export default Table;
