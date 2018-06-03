import React from 'react';
import onClickOutside from 'react-onclickoutside';

require('./DropdownSelect.style.css');

class DropdownSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      options: null,
    };
  }

  handleClickOutside = tEvent => {
    this.setState({ isActive: false });
  };

  render() {
    const { isActive, options } = this.state;
    const { selectedValue } = this.props;
    const activeStyle = isActive ? 'active' : '';
    return (
      <div className="DropdownSelect__wrapper">
        <div className="DropdownSelect__value">{selectedValue}</div>
        <div className="DropdownSelect__toggle">></div>
        <div className={`DropdownSelect__options ${activeStyle}`}>
          {/* {options && options.length > 0 ? <div>options</div> : <div>hey</div>} */}
          <div>option 1</div>
          <div>option 2</div>
          <div>option 3</div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(DropdownSelect);
