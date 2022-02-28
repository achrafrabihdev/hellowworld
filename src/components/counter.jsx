import React, { Component } from 'react'

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     // imageUrl: 'https://picsum.photos/300'
    //     tags: ["tag1","tag2","tag3"]
    // }
    // styles = {
    //     fontSize: 10, // '10px'
    //     fontWeight: 'bold'
    // }
    // handleIncrement = () => {
    //     this.setState({
    //         value: this.state.value + 1
    //     })
    // }
    state = {
      disabled: false
    }

    
  render() {
    //   let classes = 'badge m-2 bg-';
    //   classes += this.state.value === 0 ? 'warning' : 'primary';
    return (
        <div className='row'>
            {/* NB : aya 7aja kansiftoha wast slot dyal lcomponenrt parent kanl9awha fi children li wast lprops */}
            {/* {this.props.children} */}
            {/* <img src={this.state.imageUrl} alt="" /> */}
            {/* <span style={this.styles} className='badge bg-primary m-2'>{this.formatvalue()}</span> */}
            <div className="col-md-1">
             <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
            </div>
            {/* <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> */}
            <div className="col-md-4">
              <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>+</button>
              <button onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value === 0} className='btn btn-secondary btn-sm ms-2'>-</button>
              <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>x</button>
            </div>
            {/* NB : && kansta3loha condition ternaire fi 7alat kanat 3adna ghi if bla else */}
            {/* {this.state.tags.length === 0 && <p>There is no tags !</p>}
            <ul>
                {this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
            </ul> */}
            
        </div>
    );
  }
  getBadgeClasses(){
    let classes = 'badge m-2 bg-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatvalue(){
      const {value} = this.props.counter;
      return value === 0 ? 'Zero' : value
  }
}
export default Counter;
