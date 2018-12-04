import React, {Component} from 'react'
import {NavBar,InputItem,TextareaItem,Button,WingBlank,WhiteSpace} from 'antd-mobile'
import HeaderSelect from '../headerSelect'

class LaobanInfo extends Component {
  state = {
    header: '',
    post: '',
    company: '',
    salary: '',
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
          <NavBar>老板信息完善</NavBar>
          <WhiteSpace/>
          <HeaderSelect setHeader={this.setHeader}/>
          <WhiteSpace/>
          <InputItem onChange={val => this.handleChange('post',val)}>招聘职位</InputItem>
          <WhiteSpace/>
          <InputItem onChange={val => this.handleChange('company',val)}>公司名称</InputItem>
          <WhiteSpace/>
          <InputItem onChange={val => this.handleChange('salary',val)}>职位薪资</InputItem>
          <WhiteSpace/>
          <TextareaItem title="职位要求" rows={3} onChange={val => this.handleChange('info',val)}/>
          <WhiteSpace/>
          <Button type="primary">保存</Button>
        </WingBlank>

      </div>

    )
  }
}
export default LaobanInfo;