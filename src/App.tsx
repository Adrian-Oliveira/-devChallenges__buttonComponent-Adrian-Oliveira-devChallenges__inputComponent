import Input from './components/Input'

import './App.scss'


function App() {

  return (
    <div className="App">
      <Input/>
      <Input error/>
      <Input disabled/>
    </div>
  )
}

export default App
