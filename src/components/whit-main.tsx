import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  isActive: boolean,
  coordinateY: number | null,
  coordinateX: number | null,
  pinMainCoordinate: string | null
}

const withMain = (Component) => {
  type P = React.ComponentProps<typeof Component>;

  class WithMain extends React.PureComponent<P,State>{
    constructor(props) {
      super(props);
      this.state = {
        isActive: false,
        coordinateY: null,
        coordinateX: null,
        pinMainCoordinate: ``,
      };
    }
    render() {
      const {isActive, pinMainCoordinate, coordinateY, coordinateX} = this.state;
      return (
        <Component
          {...this.props}
          isActive={isActive}
          coordinateY={coordinateY}
          coordinateX={coordinateX}
          pinMainCoordinate={pinMainCoordinate}
          onChangeCoordinate={(coordinate)=>{
            this.setState({pinMainCoordinate: coordinate});
          }}
          onChangeCoordinateX={(coordinate)=>{
            this.setState({coordinateX: coordinate});
          }}
          onChangeCoordinateY={(coordinate)=>{
            this.setState({coordinateY: coordinate});
          }}
          onClickActive={()=>{
            this.setState({isActive: true});
          }}
        >
        </Component>
      );
    }
  }
  return WithMain;
};

export default withMain;
