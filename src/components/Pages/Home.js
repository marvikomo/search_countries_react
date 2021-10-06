import React from "react";
import { connect } from "react-redux";
import AddBtn from "../layouts/AddBtn";
import Searchbar from "../layouts/Searchbar";
import Countries from "../countries/Country";
import Table from "../Table";

const Home = ({ err: { error } }) => {
  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <Searchbar />
          <div className="container">
            <AddBtn />
            <Countries />
            <Table />
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  err: state.country,
});

export default connect(mapStateToProps, null)(Home);
