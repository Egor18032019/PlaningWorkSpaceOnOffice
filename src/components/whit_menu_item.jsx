import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {forTitleFilter} from "../utils.js";

const withMenuItem = (Component) => {
  class WithMain extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        filterPlaces: this.props.places
      };
      this.handleFilterMenu = this.handleFilterMenu.bind(this);
    }

    handleFilterMenu(ref) {
      const {places} = this.props;
      let filter;
      let filterPlaces = places;
      if (ref.current.value !== ``) {

        filter = ref.current.value;
        filterPlaces = forTitleFilter(places, filter);
        console.log(filterPlaces);

      }
      this.setState({filterPlaces});
    }


    render() {
      const {filterPlaces} = this.state;

      return (
        <Component
          {...this.props}
          filterPlaces={filterPlaces}
          handleFilterMenu={this.handleFilterMenu}
        >
        </Component>
      );
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        this.setState({filterPlaces: this.props.places});
      }
    }
  }
  WithMain.propTypes = {
    places: PropTypes.array.isRequired,
  };
  return WithMain;

};

withMenuItem.propTypes = {
  places: PropTypes.array.isRequired,
  // onPinClick: PropTypes.func.isRequired
};

export default withMenuItem;
