import React from 'react';
import { debounce, throttle } from 'lodash';
import Waypoint from 'react-waypoint';

// STYLES
import './StackNavItem.style.css';

class StackNavItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      touchStartY: null,
      isStartOfPage: false,
      isEndOfPage: false,
    };

    this.onHandleWheel = debounce(this.onHandleWheel, 50, { leading: true, trailing: false });
    this.handleTouch = throttle(this.handleTouch, 128);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    // this.onHandleWheel = throttle( this.onHandleWheel, 1000, { leading: false, trailing: true } );
  }

  componentWillUnmount() {
    this.onHandleWheel.cancel();
  }

  onHandleWheel(tScrollDir, tOrderIndex) {
    const { isEndOfPage, isStartOfPage } = this.state;

    if (isEndOfPage && tScrollDir > 0) {
      this.props.handleWheel(tScrollDir, tOrderIndex);
    } else if (isStartOfPage && tScrollDir < 0) {
      this.props.handleWheel(tScrollDir, tOrderIndex);
    }
  }

  handleTouchStart(tTouchPosY) {
    this.setState({ touchStartY: tTouchPosY });
  }

  handleTouch(tTouchPosY) {
    console.log(tTouchPosY);
    if (this.state.touchStartY - tTouchPosY > 0) {
      //going up
    } else {
      //going down
    }
  }

  render() {
    const { children, orderIndex } = this.props;
    return (
      <div
        id={`stack-nav-item-${orderIndex}`}
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
        onWheel={tEvent => this.onHandleWheel(tEvent.deltaY, orderIndex)}
        onTouchStart={e => {
          this.handleTouchStart(e.touches[0].pageY);
        }}
        onTouchMove={e => {
          this.handleTouch(e.touches[0].pageY);
        }}
      >
        <Waypoint
          onEnter={() => {
            this.setState({ isStartOfPage: true }, () => {
              console.log('start hit');
            });
          }}
          onLeave={() => {
            this.setState({ isStartOfPage: false });
          }}
        >
          <div className="StackNavItem__waypoint top" />
        </Waypoint>
        {children}
        <Waypoint
          onEnter={() => {
            this.setState({ isEndOfPage: true }, () => {
              console.log('exit hit');
            });
          }}
          onLeave={() => {
            this.setState({ isEndOfPage: false });
          }}
        >
          <div className="StackNavItem__waypoint bottom" />
        </Waypoint>
      </div>
    );
  }
}

export default StackNavItem;
