import React from 'react'
import { Card } from 'antd'

import '../assets/css/index.less'

import { getInfo } from '@/utils'

const Main = () => {
  getInfo('getInfo')

  return <Card title="PageB">BBB</Card>
}

export default Main
