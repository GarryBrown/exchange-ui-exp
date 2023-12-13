import React, { FormEvent, useState } from 'react';
import './App.css';

function App() {
  const [disabled, setDisabled] = useState(false);


  const onsubmit = (event: FormEvent) => {
    event.preventDefault();
    if (disabled) {
      // если форма занята - игнорируем
      return;
    }

    const data = new FormData(event.currentTarget as HTMLFormElement)
    const input1 = data.get('input1')
    const input2 = data.get('input2')
    const checkbox1 = data.get('checkbox1')
    // debugger
    console.log(input1, input2, checkbox1);

    setDisabled(true)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDisabled(false);
      })
      .catch(e => {
        setDisabled(false)
      })

  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Some UI</p>
      </header>
      <main>
        <form onSubmit={onsubmit} >
          <fieldset disabled={disabled}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Поле ввода 1</label>
              <input name="input1" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Поле ввода 2</label>
              <input name="input2" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input name="checkbox1" type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Чекбокс1</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </main>
    </div>

  );
}

export default App;
