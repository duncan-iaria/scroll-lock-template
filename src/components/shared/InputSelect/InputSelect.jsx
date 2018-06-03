import React from 'react';
import onClickOutside from 'react-onclickoutside';

import InputSelectedItem from './';

class InputSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      isActive: false,
      isLoading: false,
      value: '',
      options: [
        { id: 1, name: 'duncan', isAttending: false },
        { id: 2, name: 'rhi', isAttending: true },
        { id: 3, name: 'nick', isAttending: false },
      ],
    };
  }

  handleClickOutside = evt => {
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
    this.setState({ isActive: false, value: tItem.name, selectedItem: tItem });
  };

  render() {
    const { isActive, options, value, selectedItem } = this.state;
    const { placeholder, isLoading } = this.props;

    const optionsStyle = isActive ? 'active' : '';
    return (
      <div style={{ width: '100%', boxSizing: 'border-box' }}>
        {isLoading && <div className="InputSelect__loading-icon">·</div>}
        {selectedItem ? (
          <InputSelectedItem name={selectedItem.name} />
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
        )}
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
