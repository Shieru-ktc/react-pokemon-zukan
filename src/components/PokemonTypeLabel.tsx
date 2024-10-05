interface Props {
  type: string;
}
export default function PokemonTypeLabel(props: Props) {
  return <div>{props.type}</div>;
}
