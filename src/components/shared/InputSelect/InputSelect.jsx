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
    const { isActive, options } = this.state;
    const { onUpdateField, name, value } = this.props;

    const optionsStyle = isActive ? 'active' : '';
    return [
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
      />,
      <div className={`InputSelect__options ${optionsStyle}`}>
        {options.map(tempOption => {
          return <div className="InputSelect__options-item">{tempOption.name}</div>;
        })}
      </div>,
    ];
  }
}

export default InputSelect;
