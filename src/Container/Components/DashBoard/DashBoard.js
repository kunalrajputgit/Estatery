import Card from "../Card/Card";
import Filter from "../FilterComp/Filter";
import Nav from "../Header/Header";
import "./DashBoard.css";
import { useSelector } from "react-redux";
const DashBoard = () => {
  const state = useSelector((state) => state.filterReducer);

  return (
    <>
      <Nav />;
      <div className="main">
        <h1>Search properties to rent</h1>

        <Filter />
        <div className="cardDiv">
          {state.length
            ? state.map((data, index) => <Card key={index} data={data} />)
            : <h1 className="noData">No Property Available To Show</h1>}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
