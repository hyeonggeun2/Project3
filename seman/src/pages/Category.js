import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
import Pagination from '../components/Pagination/Pagination'
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
        "pk": 0,
        "name": "",
        "price": 0,
        "color": "",
        "size": "",
        "image": ""
    }],
    max_page: 0
  };

  split_path = this.props.location.pathname.split('/')
  path = this.split_path[2];
  page = this.split_path[3];
  // api_path = '/' + this.path + '.json';
  api_path = '/api/products/' + this.path + '/' + this.page

  // axios를 통해 값을 loading
  loadItem = async () => {
    axios.get(this.api_path).then(({data}) => {
      this.setState({
        loading: true,
        ItemList: data.Item,
        max_page: data.max_page
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
    console.log(ItemList)

    return(
      <div>
        <Nav/>
        <h2>{this.path.toUpperCase()}</h2>
        <ul className="sort_bar">
          <li className="sort_item">상품명</li>
          <li className="sort_item">낮은가격</li>
          <li className="sort_item">높은가격</li>
          <li className="sort_item">인기상품</li>
        </ul>
        <div className="product_box">
          {
            (function() {
              if (ItemList.length === 0) 
                return (<div className="no_item">상품이 존재하지 않습니다.</div>);
              else return (ItemList.map((item) => {
                return(<Product image={item.image}
                                detail={'/detail/' + item.pk}
                                name={item.name}
                                Price={numberWithCommas(item.price)}
                                color={item.color}
                                size={item.size}/>)
              }));
            })()
          }
        </div>
        <Pagination page={this.page}
                    next={this.page*1 + 1}
                    prev={this.page*1 - 1}
                    max_page={this.state.max_page}/>
        <Footer/>
      </div>
    );
  }
}

export default Category;