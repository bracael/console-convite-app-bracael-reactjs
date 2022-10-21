// styles
import { Div } from 'styles/skeleton'

const ErrorCreatePassword = () => {
  return (
    <Div style={{ padding: '5rem 8rem' }}>
      {/* <IconArBroken size={280} /> */}
      <Div
        style={{ display: 'flex', justifyContent: 'center', fontWeight: 500 }}
      >
        <span>Convite inválido!</span>
      </Div>
    </Div>
  )
}

export default ErrorCreatePassword
