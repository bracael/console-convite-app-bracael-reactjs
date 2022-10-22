import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

export default styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    min-height: 42px;
    padding: 4px;

    @media (max-width: 1039px) {
      min-height: inherit;
      max-width: 320px;
      margin-top: 1.6rem;
      margin-right: 1.6rem;
      margin-left: auto;
      border-radius: 3px;
    }
  }
  .Toastify__toast--error {
    background: #ffaeae;
    box-shadow: 0 2px 3px -1px rgba(156, 3, 3, 0.26);
  }
  .Toastify__toast--warning {
    background: #fffd90;
    box-shadow: 0 2px 3px -1px rgba(156, 154, 3, 0.26);
  }
  .Toastify__toast--success {
    background: #97ffb0;
    box-shadow: 0 2px 3px -1px rgba(3, 156, 36, 0.18);
  }
  .Toastify__toast--info {
    background: #b8e3ff;
    box-shadow: 0 2px 3px -1px rgba(3, 63, 156, 0.26);
  }
  .Toastify__toast-body {
    color: #000;
    font-weight: 400;
    margin-left: 0.4rem;
  }
  .Toastify__progress-bar {
    height: 3px;
  }
  .Toastify__progress-bar--default {
    background: #000;
  }
  .Toastify__close-button--default {
    margin: auto;
  }
  .Toastify__progress-bar {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .Toastify__close-button {
    color: #000;
    margin-top: auto;
    margin-right: 1rem;
    margin-bottom: auto;
  }
  .Toastify__close-button svg {
    float: left;
  }
  .Toastify__toast-icon {
    width: 16px;
  }
`
