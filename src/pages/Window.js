import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

export default function Example() {
  return (
    <List height={300} itemCount={30} itemSize={35} width={300}>
      {Row}
    </List>
  );
}
