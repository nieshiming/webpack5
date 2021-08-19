import * as React from 'react'

export const getQueryString = (name: string): string | null => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

// 当list过长时的展示，默认隐藏超过15个的
export const moreTextShow = (list: string[], maxCount = 15): string => {
  const joinTag = '、'
  const moreCount = list.length - maxCount
  let str: string = ''
  str = list.slice(0, maxCount).join(joinTag)
  if (moreCount > 0) {
    str += `${joinTag}+${moreCount}...`
  }
  return str
}

// transform to number，数字输入框用
export const numberFormat = (min?: number, max?: number, value?: string | number): string => {
  // 输入内容都是空白字符
  if (typeof value === 'string' && !value.trim()) {
    return ''
  }

  // 输入的字符转number
  let newValue = Number(value)
  // 非数字
  if (Number.isNaN(newValue)) {
    return ''
  }
  // 数字
  if (typeof max === 'number' && newValue > max) {
    newValue = max
  }
  if (typeof min === 'number' && newValue < min) {
    newValue = min
  }

  return newValue.toString()
}

// 列表中的渠道名称展示
export const renderAgent = (isDefault: boolean, agencyName: string, agentName: string): string => {
  if (isDefault) {
    return 'xxxx'
  }

  let str = agencyName
  if (agentName) {
    str = `${str}/${agentName}`
  }
  return str
}

export const renderWithoutEmpty = (
  content?: string | number | null | boolean,
  expected?: React.ReactNode | Record<string, unknown>,
) => {
  // 用作为 Table 的 column render 函数时，第二个参数会传入当前行数据对象
  // 当传入 ReactNode 时，typeof === 'object'，根据是否包含 $$typeof 进行区分
  // 结论：expected 为 ReactNode 时展示，为普通对象时不展示（普通对象直接渲染会导致页面白屏）
  const isReactNode = expected && typeof expected === 'object' && Object.keys(expected).includes('$$typeof')
  const expectedRender = expected && (isReactNode || typeof expected !== 'object') ? expected : content

  if (content === undefined || content === false || content === null) {
    return '--'
  }

  if (typeof content === 'string' && content.trim() === '') {
    return '--'
  }

  return expectedRender
}

export const to = <T>(promise: Promise<T>): Promise<[Error | null, T | null]> =>
  promise
    .then<[null, T]>((data) => [null, data])
    .catch<[Error, null]>((error) => {
      console.error(error)
      return [error, null]
    })

export const Sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })

export const toNullCharacter = (item: string | undefined) => item || ''
