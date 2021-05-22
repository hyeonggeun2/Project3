import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
import axios from "axios";
import "./Category.css";

function numberWithCommas(x) {
  let temp = ''+ x
  return temp.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class Category extends Component {
  // 미리 데이터 포맷 설정
  state = {
    loading: false,
    ItemList: [{
        "image": "",
        "name": "",
        "OriginalPrice": 0,
        "SalePrice": 0,
        "Sizes": [],
        "Colors": []
    }]
  };

  split_path = this.props.location.pathname.split('/')
  path = this.split_path[2];
  page = this.split_path[3];
  api_path = '/' + this.path + '.json';

  // axios를 통해 값을 loading
  loadItem = async () => {
    axios.get(this.api_path).then(({data}) => {
      this.setState({
        loading: true,
        ItemList: data.Item
      });
    }).catch(e => {
      console.error(e);
      this.setState({
        loading: false
      });
    });
  };

  // 컴포넌트가 만들어지고 render가 호출된 이후 호출되는 메서드
  componentDidMount() {
    this.loadItem();
  }

  render(){
    const { ItemList } = this.state;
    console.log(ItemList[0].SalePrice);

    return(
      <div>
        <Nav/>
        {ItemList.map((item) => {
          return(<Product image={item.image}
                          name={item.name}
                          originalPrice={numberWithCommas(item.OriginalPrice)}
                          salePrice={numberWithCommas(item.SalePrice)}
                          sizes={item.Sizes}
                          colors={item.Colors}/>)
        })}
        <Footer/>
      </div>
    );
  }
}

export default Category;