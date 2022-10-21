import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

// components JSX
import QuickStart from 'components/QuickStart'

// styles
import theme from 'styles/theme'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <QuickStart />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
