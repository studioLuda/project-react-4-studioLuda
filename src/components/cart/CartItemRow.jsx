import { currencyFomater } from '../../util/commonUtils';
import { ItemRow } from '../../styles/CartPageStyle';

export default function CartItemRow({ item, onChangeCheckBox }) {
  const {
    id, name, img, itemAmount, realPrice, checked,
  } = item;
  return (
    <ItemRow>
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
    </ItemRow>
  );
}
