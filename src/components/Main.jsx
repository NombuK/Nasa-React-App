export default function Main(props) {
  const { data } = props;

  return (
    <div className="imageContainer">
      <img src="/Nasa.jpg" alt={data?.title || bgImage} className="bgImage" />
    </div>
  );
}
