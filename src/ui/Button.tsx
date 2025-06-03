// const buttonStyle: React.CSSProperties = {
//       backgroundColor: palette[bgColor],
//       color: palette[color],
//       padding: '10px 20px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '16px',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//     };

const palette = {
  turquoise: "#1abc9c",
  emerald: "#2ecc71",
  peterRiver: "#3498db",
  amethyst: "#9b59b6",
  wetAsphalt: "#34495e",
  greenSea: "#16a085",
  nephritis: "#27ae60",
  belizeHole: "#2980b9",
  wisteria: "#8e44ad",
  midnightBlue: "#2c3e50",
  sunFlower: "#f1c40f",
  carrot: "#e67e22",
  alizarin: "#e74c3c",
  clouds: "#ecf0f1",
  concrete: "#95a5a6",
  orange: "#f39c12",
  pumpkin: "#d35400",
  pomegranate: "#c0392b",
  silver: "#bdc3c7",
  asbestos: "#7f8c8d",
};

// enum Color {
//   alizarin = "#e74c3c",
//   clouds = "#ecf0f1",
// }

type Color = keyof typeof palette;

interface Props {
  children: string;
  color?: Color;
  bgColor?: Color;
}

export function Button({
  children,
  color = "clouds", // Color.alizarin
  bgColor = "carrot", // Color.clouds
}: Props) {
  const styles = { color: palette[color], backgroundColor: palette[bgColor] };

  return <button style={styles}>{children}</button>;
}

{
  /* <Button bgColor="clouds" color="carrot">Click</Button> */
  // <Button color="clouds">Click me</Button>
  // <Button>Click me</Button>
}
