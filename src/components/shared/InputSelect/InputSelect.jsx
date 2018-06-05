import React from 'react';
import onClickOutside from 'react-onclickoutside';

class InputSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleClickOutside = evt => {
    this.setState({ isActive: false });
  };

  onSelectItem = tItem => {
    const { selectItem } = this.props;
    selectItem(tItem);
    this.setState({ isActive: false, value: tItem.name });
  };

  getInputArea = () => {
    const { selectedOption, placeholder, value, name, clearSelection, updateField } = this.props;
    return selectedOption ? (
      <div className="InputSelect__selected-item-container">
        <div
          className="InputSelect__selected-item"
          onClick={() => {
            this.setState({ isActive: true });
          }}
        >
          {selectedOption.name || selectedOption.value}
          <div className="InputSelect__clear-icon" onClick={clearSelection}>
            X
          </div>
        </div>
      </div>
    ) : (
      <input
        autoComplete="off"
        type="text"
        name={name}
        value={value}
        onChange={updateField}
        onClick={() => {
          this.setState({ isActive: true });
        }}
        placeholder={placeholder}
      />
    );
  };

  render() {
    const { isActive } = this.state;
    const { isLoading, options } = this.props;
    const optionsStyle = isActive ? 'active' : '';
    const inputArea = this.getInputArea();

    return (
      <div className="InputSelect__container">
        {isLoading && <div className="InputSelect__loading-icon">·</div>}
        {inputArea}
        <div className={`InputSelect__options ${optionsStyle}`}>
          {options && options.length > 0 ? (
            options.map(tempOption => {
              return (
                <div
                  className="InputSelect__options-item"
                  key={tempOption.id}
                  onClick={tEvent => {
                    tEvent.preventDefault();
                    this.onSelectItem(tempOption);
                  }}
                >
                  {tempOption.name}
                </div>
              );
            })
          ) : (
            <div className="InputSelect__info">No reservation found by that name...</div>
          )}
        </div>
      </div>
    );
  }
}

export default onClickOutside(InputSelect);
