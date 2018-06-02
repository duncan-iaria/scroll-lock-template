import React from 'react';

class InputSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      options: [{ id: 1, name: 'duncan' }, { id: 2, name: 'rhi' }, { id: 3, name: 'nick' }],
    };
  }

  render() {
    const { isActive } = this.state;
    const { onUpdateField, options, name, value, isLoading } = this.props;

    const optionsStyle = isActive ? 'active' : '';
    return (
      <div style={{ width: '100%', boxSizing: 'border-box' }}>
        {isLoading && <div style={{ position: 'absolute', right: '0px', top: '10px' }}>loading...</div>}
        <input
          autoComplete="off"
          type="text"
          name={name}
          value={value}
          onChange={onUpdateField}
          onClick={() => {
            this.setState({ isActive: true });
          }}
          onBlur={() => {
            this.setState({ isActive: false });
          }}
          placeholder="Your name, please..."
        />
        <div className={`InputSelect__options ${optionsStyle}`}>
          {options.length > 0 ? (
            options.map(tempOption => {
              return (
                <div className="InputSelect__options-item" key={tempOption.id}>
                  {tempOption.name}
                </div>
              );
            })
          ) : (
            <div>Type your name please...</div>
          )}
        </div>
      </div>
    );
  }
}

export default InputSelect;
