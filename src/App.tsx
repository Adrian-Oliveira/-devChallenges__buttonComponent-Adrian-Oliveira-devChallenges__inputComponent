import Input from './components/Input'

import './App.scss'


function App() {

  return (
    <div className="App">
      <Input startIcon='email'/> 
      <Input endIcon='call'/> 
     
      <Input/>
      <Input error/>
      <Input disabled/>
      <Input helperText="Some interesting text" />
      <Input helperText="Some interesting text" error/>
      
    </div>
  )
}

export default App
