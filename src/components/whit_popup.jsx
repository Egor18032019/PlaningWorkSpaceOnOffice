import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withPopup = (Component) => {
  class WithMain extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isActive: false,
        titlleCurrent: this.props.activePlace.titlle,
        companyCurrent: this.props.activePlace.company,
        descriptionCurrent: this.props.activePlace.description,
      };
      this.onChange = this.onChange.bind(this);
      this.onClickActive = this.onClickActive.bind(this);
    }
    onChange(evt, value) {
      let changeState = evt.target.name;

      if (changeState === `titlle`) {
        this.setState({titlleCurrent: value});
      } else if (changeState === `company`) {
        this.setState({companyCurrent: value});
      } else if (changeState === `description`) {
        this.setState({descriptionCurrent: value});
      }
    }
    onClickActive() {
      this.setState({isActive: !this.state.isActive});
    }

    render() {
      const {isActive, titlleCurrent, companyCurrent, descriptionCurrent} = this.state;

      return (
        <Component
          {...this.props}
          isActive={isActive}
          titlle={titlleCurrent}
          company={companyCurrent}
          description={descriptionCurrent}

          onChange={this.onChange}


          onClickActive={this.onClickActive}
        >
        </Component>
      );
    }
  }
  WithMain.propTypes = {
    activePlace: PropTypes.shape({
      id: PropTypes.number.isRequired,
      company: PropTypes.string,
      titlle: PropTypes.string,
      description: PropTypes.string,

    }),
    onPinClick: PropTypes.func.isRequired
  };
  return WithMain;

};

withPopup.propTypes = {
  activePlace: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    titlle: PropTypes.string,
    description: PropTypes.string,

  }),
  onPinClick: PropTypes.func.isRequired
};

export default withPopup;
