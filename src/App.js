/*
import React, { Component } from 'react';
import nr from 'newton-raphson-method';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x0: 0,
      fun: '',
      result: ''
    }
  }
  submit = e => {
    e.preventDefault();
    const { x0 } = this.state;
    var { fun } = this.state;
    var funct;
    try {
      funct = new Function('x', `const { cos, sin, tan, log, pow , acos, asin, atan, E, exp, PI } = Math; return ${fun};`);
    } catch (error) {
      alert('error en sintaxis')
    }
    this.setState({ result: `Resultado: ${nr(funct, x0)}` });
  }

  render() {
    const { x0, fun, result } = this.state;
    return (
      <div id='container'>
        <form onSubmit={this.submit}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}><h1>Método de Newton-Raphson</h1></div>
          <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'30px'}} >
            <label style={{color:' #4B4F4E ', marginRight:'20px'}}>Función</label>
            <input type='text' value={fun} onChange={e => this.setState({ fun: e.target.value, result: '' })} style={{backgroundColor:'#F0F4F3', border:0, width:'200px', height:'25px', padding:'10px'}} />
          </div>
          <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'30px'}}>
            <label style={{color:' #4B4F4E ', marginRight:'20px'}}>x0</label>
            <input type='number' value={x0} onChange={e => this.setState({ x0: e.target.value, result: '' })} style={{backgroundColor:'#F0F4F3', border:0, width:'150px', height:'25px', padding:'10px'}} />
          </div>
          <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'30px'}}>
            <button id='btn' >Calcular</button>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}><h1>{result}</h1></div>
          <div>
            <p><b>Documentación:</b></p>
            <p>Solo se utiliza la variable x</p>
            <p>Funciones:</p>
            <ul>
              <li>Suma: +</li>
              <li>Resta: -</li>
              <li>Multiplicación: *</li>
              <li>División: /</li>
              <li>Residuo: %</li>
              <li>Potencia: pow(base, exponente) -> 2 al cubo = pow(2,3)</li>
              <li>Raiz: pow(base, 1/exponente) -> raiz cuadrada de 9 = pow(9,1/2)</li>
              <li>Logaritmo: log()</li>
              <li>Coseno: cos()</li>
              <li>Seno: sin()</li>
              <li>Tangente: tan()</li>
              <li>Arco coseno: acos()</li>
              <li>Arco seno: asin()</li>
              <li>Arco tangente: atan()</li>
              <li>numero de Euler: E</li>
              <li>E^x: exp()</li>
              <li>pi: PI</li>
            </ul>

          </div>
        </form>
      </div>
    );
  }
}

export default App;
*/

import React, { Component } from 'react';
import nr from 'newton-raphson-method';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x0: 0,
      fun: '',
      fun2:'',
      result: ''
    }
  }
  submit = e => {
    e.preventDefault();
    const { x0 } = this.state;
    var { fun, fun2 } = this.state;
    var funct,funct2;
    try {
      funct = new Function('x', `const { cos, sin, tan, log, pow , acos, asin, atan, E, exp, PI } = Math; return ${fun};`);
      funct2 = new Function('x', `const { cos, sin, tan, log, pow , acos, asin, atan, E, exp, PI } = Math; return ${fun2};`);
    } catch (error) {
      alert('error en sintaxis')
    }
    this.setState({ result: `Resultado: ${nr(funct,funct2, x0)}` });
  }

  render() {
    const { x0, fun, result, fun2 } = this.state;
    return (
      <div id='container'>
        <form onSubmit={this.submit}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}><h1>Método de Newton-Raphson</h1></div>
          <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'30px'}} >
            <label style={{color:' #4B4F4E ', marginRight:'20px'}}>Función</label>
            <input type='text' value={fun} onChange={e => this.setState({ fun: e.target.value, result: '' })} style={{backgroundColor:'#F0F4F3', border:0, width:'200px', height:'25px', padding:'10px'}} />
          </div>
          <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'30px'}} >
            <label style={{color:' #4B4F4E ', marginRight:'20px'}}>Función Derivada</label>
            <input type='text' value={fun2} onChange={e => this.setState({ fun2: e.target.value, result: '' })} style={{backgroundColor:'#F0F4F3', border:0, width:'200px', height:'25px', padding:'10px'}} />
          </div>
          <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'30px'}}>
            <label style={{color:' #4B4F4E ', marginRight:'20px'}}>x0</label>
            <input type='number' value={x0} onChange={e => this.setState({ x0: e.target.value, result: '' })} style={{backgroundColor:'#F0F4F3', border:0, width:'150px', height:'25px', padding:'10px'}} />
          </div>
          <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'30px'}}>
            <button id='btn' >Calcular</button>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}><h1>{result}</h1></div>
          <div>
            <p><b>Documentación:</b></p>
            <p>Solo se utiliza la variable x</p>
            <p>Funciones:</p>
            <ul>
              <li>Suma: +</li>
              <li>Resta: -</li>
              <li>Multiplicación: *</li>
              <li>División: /</li>
              <li>Residuo: %</li>
              <li>Potencia: pow(base, exponente) -> 2 al cubo = pow(2,3)</li>
              <li>Raiz: pow(base, 1/exponente) -> raiz cuadrada de 9 = pow(9,1/2)</li>
              <li>Logaritmo: log()</li>
              <li>Coseno: cos()</li>
              <li>Seno: sin()</li>
              <li>Tangente: tan()</li>
              <li>Arco coseno: acos()</li>
              <li>Arco seno: asin()</li>
              <li>Arco tangente: atan()</li>
              <li>numero de Euler: E</li>
              <li>E^x: exp()</li>
              <li>pi: PI</li>
            </ul>

          </div>
        </form>
      </div>
    );
  }
}

export default App;
