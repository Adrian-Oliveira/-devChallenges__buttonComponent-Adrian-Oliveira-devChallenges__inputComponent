import Input from './components/Input'

import './App.scss'


function App() {

  return (
    <div className="App">
      <h1>Input</h1>

      <div className='row'>
        <div className="element">
          <p>{'<Input/>'}</p>
          <Input/>
        </div>
      </div>

      <div className='row'>
        <div className="element">
          <p>{'<Input error/>'}</p>
          <Input error/>
        </div>
      </div>


      <div className='row'>
        <div className="element">
          <p>{'<Input disabled/>'}</p>
          <Input disabled/>
        </div>
      </div>


      <div className='row'>
        <div className="element">
          <p>{'<Input helperText="Some interesting text" />'}</p>
          <Input helperText="Some interesting text" />
        </div>

        <div className="element">
          <p>{'<Input helperText="Some interesting text" error/>'}</p>
          <Input helperText="Some interesting text" error/>
        </div>
      </div>

      
      <div className='row'>
        <div className="element">
          <p>{"<Input startIcon='email'/> "}</p>
          <Input startIcon='email'/> 
        </div>

        <div className="element">
          <p>{"<Input endIcon='call'/> "}</p>
          <Input endIcon='call'/> 
        </div>
      </div>
      

      <div className='row'>
        <div className="element">
          <p>{"<Input value='text' />"}</p>
          <Input value='text' /> 
        </div>
      </div>
      

      <div className='row'>
        <div className="element">
          <p>{"<Input size='sm' />"}</p>
          <Input size='sm' />
        </div>

        <div className="element">
          <p>{"<Input size='md' />"}</p>
          <Input size='md' />
        </div>
      </div>
      
      <div className='row'>
        <div className="element" style={{width:"100%"}}>
          <p>{"<Input fullWidth />"}</p>
          <Input fullWidth />
        </div>
      </div>
      

      <div className='row'>
        <div className="element">
          <p>{"<Input rows={4} />"}</p>
          <Input rows={4} />
        </div>
      </div>
      
      
      
      
    </div>
  )
}

export default App
