import React, {Component} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Laoban extends Component {
  render () {
    return (
      <div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              thumb={require('../../assets/img/头像1.png')}
              extra={<span>张鑫</span>}
            />
            <Card.Body>
              <div>职位:前端工程师</div>
              <div>描述:3年工作经验,react全家桶</div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              thumb={require('../../assets/img/头像2.png')}
              extra={<span>李涛</span>}
            />
            <Card.Body>
              <div>职位:前端工程师</div>
              <div>描述:3年工作经验,react全家桶</div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              thumb={require('../../assets/img/头像3.png')}
              extra={<span>况伟</span>}
            />
            <Card.Body>
              <div>职位:前端工程师</div>
              <div>描述:3年工作经验,react全家桶</div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    )
  }
}

export default Laoban;