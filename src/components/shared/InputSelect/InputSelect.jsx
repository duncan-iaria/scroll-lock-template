import React from 'react';
import onClickOutside from 'react-onclickoutside';

import InputSelectedItem from './';

class InputSelect extends React.Component {
  constructor(props) {
    super(props);
    console.log('input reconstructed');
    console.log(('props:', props));
    this.state = {
      isActive: false,
      isLoading: false,
      value: '',
      options: [
        { id: 1, name: 'duncan', isAttending: false, isPlusOne: true },
        { id: 2, name: 'rhi', isAttending: true, isPlusOne: true },
        { id: 3, name: 'nick', isAttending: false, isPlusOne: false },
      ],
    };
  }

  handleClickOutside = evt => {
    console.log('hey im outside');
    this.setState({ isActive: false });
  };

  getOptions = async () => {
    const { value } = this.state;
    const { getOptions } = this.props;

    this.setState({ isLoading: true });

    const tempOptions = await getOptions(value);
    this.setState({ isLoading: false, options: tempOptions });
  };

  updateField = tEvent => {
    tEvent.preventDefault();
    const { name, value } = tEvent.target;
    this.setState({ [name]: value, selectItem: null }, this.getOptions);
  };

  onSelectItem = tItem => {
    const { selectItem } = this.props;
    selectItem(tItem);
    // console.log('selected item: ', tItem);
    this.setState({ isActive: false, value: tItem.name });
  };

  onClearSelected = () => {
    const { clearSelected } = this.props;
    console.log('on cleared');

    this.setState({ isActive: true });
  };

  getInputArea = () => {
    const { selectedOption, placeholder, value, clearSelection } = this.props;
    return selectedOption ? (
      <div className="InputSelect__selected-item-container">
        <div className="InputSelect__selected-item">
          {selectedOption.name}
          <div className="InputSelect__clear-icon" onClick={clearSelection}>
            X
          </div>
        </div>
      </div>
    ) : (
      <input
        autoComplete="off"
        type="text"
        name="value"
        value={value}
        onChange={this.updateField}
        onClick={() => {
          this.setState({ isActive: true });
        }}
        placeholder={placeholder}
      />
    );
  };

  render() {
    const { isActive, options, value } = this.state;
    const { placeholder, isLoading, selectedOption } = this.props;
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
