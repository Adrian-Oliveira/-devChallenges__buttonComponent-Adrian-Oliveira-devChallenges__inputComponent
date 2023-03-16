import Input from './components/Input'

import './App.scss'


function App() {

  return (
    <div className="App">
      <Input rows={4} />

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
      
    </div>
  )
}

export default App
