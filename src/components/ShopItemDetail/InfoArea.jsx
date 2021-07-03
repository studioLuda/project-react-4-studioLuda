import styled from '@emotion/styled';

import { currencyFomater, percentageCalculator } from '../../util/commonUtils';

export default function InfoArea({ shopItem }) {
  const { name, realPrice, originPrice } = shopItem;

  const InfoGroup = styled.div({
    display: 'flex',
    width: '400px',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  });

  const PriceGroup = styled.h2({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  });
  const TextSpan = styled.span(
    ({ color = '#000', fontWeight = 'none', lineThrough = false }) => ({
      color,
      fontWeight,
      textDecorationLine: lineThrough ? 'line-through' : 'none',
    }),
  );
  const AmountGruop = styled.div({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  });
  return (
    <InfoGroup>
      <h2>{name}</h2>
      <PriceGroup>
        <TextSpan fontWeight="bold">
          {currencyFomater({ number: realPrice })}
        </TextSpan>

        <TextSpan color="#ccc" lineThrough>
          (
          {currencyFomater({ number: originPrice })}
          )
        </TextSpan>
        <TextSpan color="#f00" fontWeight="bold">
          {`${percentageCalculator({
            total: originPrice,
            partOf: originPrice - realPrice,
          })} 할인`}
        </TextSpan>
      </PriceGroup>
      <AmountGruop>
        <label htmlFor="ItemAmount">수량</label>
        <input id="ItemAmount" type="number" defaultValue={1} />
      </AmountGruop>

      <button type="button"> 장바구니 담기 </button>
    </InfoGroup>
  );
}
