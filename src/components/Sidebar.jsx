export default function Sidebar(props) {
  const { handleToggleModel, data } = props;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModel} className="bgOverLay"></div>
      <div className="sidebarContents">
        <h1 className="descriptionTitle">{data?.title}</h1>
        <div className="descriptionContainer">
          <h2 className="descriptionDate">{data?.date}</h2>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
