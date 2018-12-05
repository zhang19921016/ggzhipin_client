import React, {Component} from 'react'
import {NavBar,InputItem,TextareaItem,Button,WingBlank,WhiteSpace} from 'antd-mobile'
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import HeaderSelect from '../headerSelect'

class LaobanInfo extends Component {
  static propTypes = {
    user:PropTypes.object.isRequired,
    update:PropTypes.func.isRequired
  }
  state = {
    header: '',
    post: '',
    company: '',
    salary: '',
    info: '',
    type:'laoban'
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
  update = () => {
    this.props.update(this.state);
  }
  render () {
    const {msgErr,RedirectTo} = this.props.user;
    if (RedirectTo === '/laoban') {
      return <Redirect to={RedirectTo}/>
    }
    return (
      <div>
        <WingBlank>
          <WhiteSpace/>
          <NavBar>老板信息完善</NavBar>
          <WhiteSpace/>
          <HeaderSelect setHeader={this.setHeader}/>
          <WhiteSpace/>
          <p className="msgErr">{msgErr}</p>
          <InputItem onChange={val => this.handleChange('post',val)}>招聘职位</InputItem>
          <WhiteSpace/>
          <InputItem onChange={val => this.handleChange('company',val)}>公司名称</InputItem>
          <WhiteSpace/>
          <InputItem onChange={val => this.handleChange('salary',val)}>职位薪资</InputItem>
          <WhiteSpace/>
          <TextareaItem title="职位要求" rows={3} onChange={val => this.handleChange('info',val)}/>
          <WhiteSpace/>
          <Button type="primary" onClick={this.update}>保存</Button>
        </WingBlank>

      </div>

    )
  }
}
export default LaobanInfo;