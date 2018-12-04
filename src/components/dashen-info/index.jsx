import React, {Component} from 'react'
import {NavBar,InputItem,TextareaItem,Button,WingBlank,WhiteSpace} from 'antd-mobile'
import HeaderSelect from '../headerSelect'

class DashenInfo extends Component {
  state = {
    header: '',
    post: '',
    info: ''
  }
  setHeader = header => {
    this.setState({
      header
    })
  }
  handleChange = (type,val) => {
    this.setState({
      [type]:val
    })
  }
  render () {
    return (
      <div>
        <WingBlank>
          <WhiteSpace/>
          <NavBar>大神信息完善</NavBar>
          <WhiteSpace/>
          <HeaderSelect setHeader={this.setHeader}/>
          <WhiteSpace/>
          <InputItem onChange={val => this.handleChange('post',val)}>求职岗位</InputItem>
          <WhiteSpace/>
          <TextareaItem title="个人介绍" rows={3} onChange={val => this.handleChange('info',val)}/>
          <WhiteSpace/>
          <Button type="primary">保存</Button>
        </WingBlank>

      </div>
    )
  }
}
export default DashenInfo;