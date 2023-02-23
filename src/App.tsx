import Input from './components/Input'

import './App.scss'


function App() {

  return (
    <div className="App">
      <Input/>
      <Input error/>
      <Input disabled/>
      <Input helperText="Some interesting text" />
      <Input helperText="Some interesting text" error/>
      <Input startIcon='email'/>
    </div>
  )
}

export default App
