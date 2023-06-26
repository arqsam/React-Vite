export default function CardVite(props) {
  console.log("PROPS: ", props);
  const { iconCard } = props;
  const { titleCard } = props;
  const { textCard } = props;
  return (
    <div>
      <article className="card">
        <div id="icon">
          <p className="icon"> {iconCard} </p>
        </div>
        <h3 className="title"> {titleCard} </h3>
        <p className="text"> {textCard} </p>
      </article>
    </div>
  );
}
