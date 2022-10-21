import React from 'react'

import { InviteProps } from './types'

const Invite = ({ parameter }: InviteProps) => {
  console.log('parameter', parameter)

  return (
    <div>
      <span>Convite para</span>
    </div>
  )
}

export default Invite
