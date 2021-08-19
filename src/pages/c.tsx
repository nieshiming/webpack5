import React from 'react'
import { Card } from 'antd'

import { getInfo } from '@/utils'

import '../assets/css/index.less'

const Main = () => {
  getInfo('getInfo')

  return <Card title="PageC">CCC</Card>
}

export default Main
