import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
  render() {
    const {onReset , counters , onDelete , onIncrement , onDecrement} = this.props;
    return (
      <div className='container'>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
          {counters.map(counter => (
          <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} counter={counter}/>

        //   NB : ila bghina nsifto chi contenu wast l7ala osada dyal tag
            // <Counter key={counter.id} value={counter.value}>
            // <h4>counter #{counter.id}</h4>
            // </Counter>
          ))}
      </div>
    )
  }
}

export default Counters;
