import {Component} from  'react';


class Button extends Component {
  constructor(props) {
    super(props);
  }

  hanle

  static defaultProps = {
    type: 'button',
    value: '按钮',
    className: 'inputButton',
  };

  render() {
    return (
      <div className={this.props.className}>
        <input name={this.props.inputName} value={this.props.value}/>
      </div>
    );
  }

}
