import React from 'react';

export default class extends React.Component {

  render() {
    return (
       <article>
        <h2>{ this.props.adjective } Spice</h2>
        <img src={ this.props.gif } alt={ this.props.adjective + " Spice" } />
       </article> 
    );
  }


}