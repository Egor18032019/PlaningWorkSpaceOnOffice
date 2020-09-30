import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {CSVLink} from 'react-csv';

class CSVDowland extends PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    const {activeOffice, places} = this.props;
    return (
      <div className="btn">
        <CSVLink
          data={places}
          separator={`;`}
          filename={`${activeOffice}.csv`}
          className="btn btn-primary"
          target="_blank"
        >
          Экпорт в Excel
        </CSVLink>
      </div>);
  }
}

CSVDowland.propTypes = {
  places: PropTypes.array.isRequired || null,
  activeOffice: PropTypes.string.isRequired,

};

export default CSVDowland;
