import { List, Item } from '../styles/SortOptions';

export default function SortOptions() {
  return (
    <List>
      <Item>
        <button type="button">등록일순</button>
      </Item>
      <Item>
        <button type="button">인기순</button>
      </Item>
      <Item>
        <button type="button">낮은 가격순</button>
      </Item>
      <Item>
        <button type="button"> 높은 가격순</button>
      </Item>
    </List>
  );
}
