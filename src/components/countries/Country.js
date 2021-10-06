import React, { useEffect } from "react";
import { connect } from "react-redux";
import CountryItem from "./CountryItem";
import PreLoader from "../layouts/PreLoader";
import PropTypes from "prop-types";
import { getCountries, clearCountry } from "../../actions/countryActions";

const Countries = ({
  counntry: { countries, loading, list, filtered },
  getCountries,
}) => {
  useEffect(() => {
    getCountries();
    //eslint-disable-next-line
  }, []);

  if (loading || countries === null) {
    return <PreLoader />;
  }
  if (!loading && countries.length === 0) {
    return <p className="center">No countries to show...</p>;
  }
  if (list !== null) {
    console.log("list is busy");
  }
  return (
    <ul className="collection with-header searchContainer">
      <li className="collection-header">
        <h4 className="center">Search Results</h4>
      </li>
      {filtered.length > 0 ? (
        filtered.map((log) => <CountryItem key={log._id} log={log} />)
      ) : (
        <div>No result</div>
      )}
    </ul>
  );
};

Countries.propTypes = {
  log: PropTypes.object.isRequired,
  getCountries: PropTypes.func.isRequired,
  clearCountry: PropTypes.func.isRequired,
  searchLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  counntry: state.country,
});

export default connect(mapStateToProps, { getCountries, clearCountry })(
  Countries
);
