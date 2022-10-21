// types and interfaces
import type { AppProps } from 'typings/App'

function App({ data }: AppProps) {
  console.log('data', data)

  return (
    <div>
      <span>App</span>
    </div>
  )
}

export default App
