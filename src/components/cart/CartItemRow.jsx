import styled from '@emotion/styled';

import { currencyFomater } from '../../util/commonUtils';

const Item = styled.tr({
  // backgroundColor: 'ivory',
  height: '100px',
  marginTop: '10px',
  display: 'flow',
  '& div': {
    // backgroundColor: 'red',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& img': {
      margin: '10px',
      width: '70px',
    },
    '& p': {
      width: '300px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'block',
      color: '#333',
      textDecoration: 'none',
      textAlign: 'center',
      fontWeight: 'bolder',
    },
  },
});

export default function CartItemRow({ item, onChangeCheckBox }) {
  const {
    id, name, img, itemAmount, realPrice, checked,
  } = item;
  return (
    <Item>
      <td>
        <label htmlFor={`cartItem${id}`}>
          <input
            aria-label={`cartItem${id}`}
            id={`cartItem${id}`}
            type="checkbox"
            name={id}
            value={id}
            checked={checked || false}
            onChange={(event) => {
              onChangeCheckBox(event);
            }}
          />
        </label>
      </td>
      <td>
        <div>
          <img src={img} alt={name} />
          <p>{name}</p>
        </div>
      </td>
      <td>
        {itemAmount}
        개
      </td>
      <td>{currencyFomater({ number: realPrice })}</td>
    </Item>
  );
}
