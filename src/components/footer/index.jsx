import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import './index.less'

const Item = TabBar.Item;
class Footer extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired,
    type:PropTypes.string.isRequired
  }
  handlePress = path => {
    this.props.history.push(path);
  }
  render () {
    const navList = this.props.navList;
    const filter = this.props.type === 'laoban'?'/dashen':'/laoban';
    const currList = navList.filter(item => {
      return filter === item.path?false:true
    })
    return (
      <div className="TabBar">
        <TabBar>
          {currList.map((item,index) => {
            return <Item key="index" title={item.text}
                         icon={<img src={require(`./img/${item.icon}.png`)} width='30px' height='30px' alt={item.text}/>}
                         onPress={this.handlePress.bind(null,item.path)}
                         selected={item.path === this.props.location.pathname}
                         selectedIcon={<img src={require(`./img/${item.icon}-selected.png`)} width='30px' height='30px' alt={item.text}/>}/>
          })}
        </TabBar>

      </div>
    )
  }
}

export default withRouter(Footer);