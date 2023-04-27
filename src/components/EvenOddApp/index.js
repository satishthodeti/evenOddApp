import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {counter: 0}

  getNumber = () => {
    const randomNumber = Math.ceil(Math.random() * (100 - 0) + 0)
    this.setState({counter: randomNumber})
  }

  render() {
    const {counter} = this.state

    return (
      <div className="main">
        <div className="submain">
          <h1>Count {counter} </h1>
          {counter % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
          <button type="button" onClick={this.getNumber}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
