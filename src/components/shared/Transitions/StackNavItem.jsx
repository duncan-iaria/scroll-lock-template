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
      touchCurrentY: null,
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

  handleTouch(tTouchPosY, tOrderIndex) {
    this.setState({ touchCurrentY: tTouchPosY });
    // if (this.state.touchStartY - tTouchPosY > 0) {
    //   //going up
    //   this.onHandleWheel(1, tOrderIndex);
    // } else {
    //   //going down
    //   this.onHandleWheel(-1, tOrderIndex);
    // }
  }

  handleTouchEnd = tOrderIndex => {
    const { touchCurrentY, touchStartY } = this.state;
    this.onHandleWheel(touchStartY - touchCurrentY, tOrderIndex);
    this.setState({ touchCurrentY: null });
  };

  render() {
    const { children, orderIndex } = this.props;
    return (
      <div
        id={`stack-nav-item-${orderIndex}`}
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
        onWheel={tEvent => this.onHandleWheel(tEvent.deltaY, orderIndex)}
        onTouchStart={e => {
          this.handleTouchStart(e.touches[0].pageY, orderIndex);
        }}
        onTouchMove={e => {
          this.handleTouch(e.touches[0].pageY, orderIndex);
        }}
        onTouchEnd={e => {
          this.handleTouchEnd(orderIndex);
        }}
      >
        <Waypoint
          onEnter={() => {
            this.setState({ isStartOfPage: true });
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
            this.setState({ isEndOfPage: true });
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
