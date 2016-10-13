import React from 'react';

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {count, item} = this.props;
    let width = 100 / count + '%';
    return (
      <li className="slider-item" style={{width: width}}>
        <a href={item.url}><img src={item.src} alt={item.alt} /></a>
      </li>
    );
  }
}

export default SliderItem;
