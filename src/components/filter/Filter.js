import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterName } from "../../redux/contacts/phoneBookActions";

const Filter = ({ filterName }) => {
  // const [value, setValue] = useState("");
  const setFilter = ({ target }) => {
      const { value } = target;
      filterName(value);
  };
  return (
    <input
      type="text"
      onChange={setFilter}
      // value={filter}
    />
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  filterName,
};

export default connect(null, mapDispatchToProps)(Filter);
