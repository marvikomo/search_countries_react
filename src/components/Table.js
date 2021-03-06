import { connect } from "react-redux";
import React from "react";

const Table = ({ country: { list } }) => {
  return (
    <div>
      <table className="tableInfo">
        <thead>
          <td>Name</td>
          <td>Region</td>
          <td>Code</td>
        </thead>
        <tbody>
          {list.length > 0 &&
            list.map((l) => {
              return (
                <tr>
                  <td>{l.name}</td>
                  <td>{l.region}</td>
                  <td>{l.callingCodes[0]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => ({
  country: state.country,
});

export default connect(mapStateToProps, null)(Table);
