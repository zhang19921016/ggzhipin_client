import React, {Component} from 'react'
import {Grid,List } from 'antd-mobile'
import PropTypes from 'prop-types'

class HeaderSelect extends Component {
  static propTypes = {
    setHeader:PropTypes.func.isRequired
  }
  state = {
    header:null
  }
  handleClick = (el,index) => {
    // console.log(el);
    this.setState({
      header:el.icon
    })
    this.props.setHeader(index);
  }
  render () {
    const {header} = this.state;
    const data = Array.from(new Array(20)).map((_val, i) => ({
      icon: require(`../../assets/img/头像${i + 1}.png`),
      text: `头像${i + 1}`,
    }));
    return (
      <List renderHeader={() => {
        return <div>请选择头像 <img src={header} /></div>
      }}>
        <Grid data={data} columnNum={5} activeStyle={false} onClick={this.handleClick} />
      </List>
    )
  }
}
export default HeaderSelect;