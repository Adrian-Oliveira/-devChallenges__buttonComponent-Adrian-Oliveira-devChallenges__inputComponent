import Input from './components/Input'

import './App.scss'


function App() {

  return (
    <div className="App">
     
      <Input fullWidth />

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
      
    </div>
  )
}

export default App
