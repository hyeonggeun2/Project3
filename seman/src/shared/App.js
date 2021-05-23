import React from 'react';
import {Route} from 'react-router-dom';
import {Main, Category} from '../pages';

function App(){
  return(
    <div>
      {/* exact는 정확히 일치할 때만 보여주는 것
      제거하면 /category에도 보여지게 됨 */}
      <Route exact path="/" component={Main}/>
      <Route path="/category" component={Category}/>
    </div>
  );
}

export default App;