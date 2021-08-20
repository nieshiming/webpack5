import React from 'react'
import { Card, Button } from 'antd'
import { RouteComponentProps } from 'react-router-dom'

import { getInfo } from '@/utils'
import '../assets/css/index.less'
import './common.less'

type IProps = RouteComponentProps

const Main = (props: IProps) => {
  const viewDetail = () => {
    props.history.push('/b')
  }

  getInfo('getInfo')

  return (
    <Card title="PageA" className="levi">
      <Button onClick={viewDetail} type="primary">
        跳转B
      </Button>
    </Card>
  )
}

export default Main
