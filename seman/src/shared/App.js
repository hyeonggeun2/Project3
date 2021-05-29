import React from 'react';
import {Route} from 'react-router-dom';
import {Main, Category, Detail, Login, SignUp, Cart, MyInfo} from '../pages';

function App(){
  return(
    <div>
      {/* exact는 정확히 일치할 때만 보여주는 것
      제거하면 /category에도 보여지게 됨 */}
      <Route exact path="/" component={Main}/>
      <Route path="/category" component={Category}/>
      <Route path="/detail/:pid" component={Detail}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/myinfo" component={MyInfo}/>
    </div>
  );
}

export default App;