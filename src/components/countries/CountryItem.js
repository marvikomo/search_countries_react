import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addList } from "../../actions/countryActions";
import M from "materialize-css/dist/js/materialize.min.js";

const CountryItem = ({ log, addList }) => {
  return (
    <>
      <li className="collection-item">
        <div className="searchAdd">
          <span className="grey-text">
            <span className="black-text">{log.name}</span>
          </span>
          <button onClick={() => addList(log)}>ADD</button>
        </div>
      </li>
    </>
  );
};

CountryItem.propTypes = {
  log: PropTypes.object.isRequired,
  addList: PropTypes.func.isRequired,
};

export default connect(null, { addList })(CountryItem);
