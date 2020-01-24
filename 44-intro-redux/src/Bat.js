import React from 'react';

export default const props => <ul>
    {
      props.bats.map(bat => <li key={ bat.id }>{ bat.name }</li>)
    }
  </ul>