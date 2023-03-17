import Input from './components/Input'

import './App.scss'


function App() {

  return (
    <div className="App">
      <h1>Input</h1>


      <Input/>
      <Input error/>
      <Input disabled/>
      <Input helperText="Some interesting text" />
      <Input helperText="Some interesting text" error/>
      <Input startIcon='email'/> 
      <Input endIcon='call'/> 
      <Input value='text' />
      <Input size='sm' />
      <Input size='md' />
      <Input fullWidth />
      <Input rows={4} />
      
    </div>
  )
}

export default App
