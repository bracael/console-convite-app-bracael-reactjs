// styles
import { Div } from 'styles/skeleton'

// types and interfaces
import { ErrorChooseProps } from './types'

const ErrorChoose = ({ error }: ErrorChooseProps) => {
  return (
    <Div style={{ padding: '5rem 8rem' }}>
      <Div
        style={{ display: 'flex', justifyContent: 'center', fontWeight: 500 }}
      >
        <span>{error.message}</span>
      </Div>
    </Div>
  )
}

export default ErrorChoose
