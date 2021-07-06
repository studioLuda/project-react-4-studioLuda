import styled from '@emotion/styled';

import CartItemRow from './CartItemRow';

const Table = styled.table`
  min-width: 700px;
  margin-top: 40px;
  position: relative;
`;
const Thead = styled.thead({
  backgroundColor: '#ccc',
  height: '40px',
  fontWeight: 'bold',
  fontSize: '17px',
});
const Tbody = styled.tbody`
  text-align: center;
  padding: 10px 0;
  height: 20px;
  font-size: 14px;
`;

const DelteButton = styled.button({
  backgroundColor: 'gray',
  color: 'white',
  fontWeight: 'bold',
  marginTop: '10px',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  width: 'auto',
  border: 'none',
  borderRadius: '4px',
});

export default function CartItemTable({ cart, onChangeCheckBox, onClickDeleteButton }) {
  return (
    <div>
      <Table>
        <Thead>
          <tr>
            <th>
              <label htmlFor="checkAll">
                <input
                  type="checkbox"
                  id="checkAll"
                  name="checkAll"
                  value="checkAll"
                />
              </label>
            </th>
            <th>상품정보</th>
            <th>수량</th>
            <th>상품 금액</th>
          </tr>
        </Thead>
        <Tbody>
          {cart.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onChangeCheckBox={onChangeCheckBox}
            />
          ))}
        </Tbody>
      </Table>
      <div>
        <DelteButton type="button" onClick={onClickDeleteButton}>
          선택 상품 삭제
        </DelteButton>
      </div>
    </div>
  );
}
