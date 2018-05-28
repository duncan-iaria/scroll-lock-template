import React from 'react';

class InputSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  render() {
    const { isActive } = this.state;
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
        <div className="InputSelect-options-item">Test</div>
        <div className="InputSelect-options-item">Test</div>
        <div className="InputSelect-options-item">Test</div>
        <div className="InputSelect-options-item">Test</div>
      </div>,
    ];
  }
}

export default InputSelect;
