export default function Sidebar(props) {
  const { handleToggleModel, data } = props;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModel} className="bgOverLay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
