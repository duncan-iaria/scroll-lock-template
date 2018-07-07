import React from 'react';
import onClickOutside from 'react-onclickoutside';

require('./DropdownSelect.style.css');

class DropdownSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleClickOutside = tEvent => {
    this.setState({ isActive: false });
  };

  onSelectItem = option => {
    const { selectOption } = this.props;
    if (selectOption) {
      selectOption(option);
      this.setState({ isActive: false });
    }
  };

  render() {
    const { isActive } = this.state;
    const { selectedValue, options, label } = this.props;
    const tempOptions = options || null;
    const activeStyle = isActive ? 'active' : '';
    return (
      <div className="DropdownSelect__wrapper">
        <div className="DropdownSelect__label">{label}</div>
        <div className="DropdownSelect__dropdown">
          <div className="DropdownSelect__value">{selectedValue}</div>
          <div className="DropdownSelect__toggle" onClick={() => this.setState({ isActive: true })}>
            >
          </div>
          <div className={`DropdownSelect__options ${activeStyle}`}>
            {tempOptions && tempOptions.length > 0
              ? tempOptions.map(tempOption => {
                  return (
                    <div
                      className="DropdownSelect__options-item"
                      key={tempOption.value}
                      onClick={tEvent => {
                        tEvent.preventDefault();
                        this.onSelectItem(tempOption);
                      }}
                    >
                      {tempOption.name}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        {/* <div className="DropdownSelect__label">{label}</div> */}
      </div>
    );
  }
}

export default onClickOutside(DropdownSelect);
