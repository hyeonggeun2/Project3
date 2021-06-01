import React, { Component } from "react";
import "./Detail.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Magnifier from "react-magnifier";
import axios from "axios";

function numberWithCommas(x) {
  let temp = ''+ x
  return temp.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class Detail extends Component{
  state = {
    info: {
      "name": "",
      "price": 0,
      "color": "",
      "size": "",
      "info": "",
      "buy_guide": "",
      "review_set": [{
        "title": "",
        "content": "",
        "answer": "",
        "date": "",
      }],
      "qna_set": [{
        "title": "",
        "question": "",
        "answer": "",
        "date": "",
      }],
      "image": ""
    }
  };

  split_path = this.props.location.pathname.split('/')
  pk = this.split_path[2];
  api_path = '/api/products/' + this.pk;
  
  loadItem = async () => {
    axios.get(this.api_path).then(({data}) => {
      console.log(data)
      this.setState({
        info: data
      });
    }).catch(e => {
      console.error(e);
    });
  };

  componentDidMount() {
    this.loadItem();
  }

  render (){
    const {info} = this.state;
    return(
    <div>
      <Nav/>
        <div>
          <div className="detail_info">
            <div className="image_box">
              <Magnifier src = {`data:image/jpeg;base64,${info.image}`}
                        width= {400} height = {400} mgWidth = {200} mgHeight = {200} mgShape="square" />
              <p className="img_text">사진에 마우스를 올리면 확대됩니다.</p>
            </div>
            <div className="text_box">
              <div className="product_title">{info.name}</div>
              <form>
              <table className="product_info_table">
                <tr>
                  <th>판매가</th>
                  <td>{numberWithCommas(info.price)}원</td>
                </tr>
                <tr>
                  <th>색상</th>
                  <td>
                    <select name="color">
                      <option value="">색상 선택</option>
                      {
                        info.color.split(', ').map((data) => {
                          return (
                            <option value={data}>{data}</option>
                          )
                        })
                      }
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>사이즈</th>
                  <td>
                    <select name="size">
                      <option value="">사이즈 선택</option>
                      {
                        info.size.split(', ').map((data) => {
                          return (
                            <option value={data}>{data}</option>
                          )
                        })
                      }
                    </select>
                  </td>
                </tr>
              </table>
              <button className="select_button">선택</button>
              </form>
              <div className="selected_item">
                
              </div>
              <div className="detail_btn_box">
                <a className="detail_btn" href="#">구매하기</a>
                <a className="detail_btn" href="#">담기</a>
              </div>
            </div>
          </div>
          <div className="detail">
            <a name="detail_info_text"></a>
            <ul className="detail_menu">
              <li className="selected"><a href="#detail_info_text">상세 정보</a></li>
              <li><a href="#buy_guide">구매 안내</a></li>
              <li><a href="#used_review">사용 후기</a></li>
              <li><a href="#qna">Q & A</a></li>
            </ul>

            <div className="detail_infos">
                    <pre>{info.info}</pre>
            </div>

            <ul className="detail_menu">
              <a name="buy_guide"></a>
              <li><a href="#detail_info_text">상세 정보</a></li>
              <li className="selected"><a href="#buy_guide">구매 안내</a></li>
              <li><a href="#used_review">사용 후기</a></li>
              <li><a href="#qna">Q & A</a></li>
            </ul>

            <div className="detail_infos">
                    <pre>{info.buy_guide}</pre>
            </div>

            <ul className="detail_menu">
              <a name="used_review"></a>
              <li><a href="#detail_info_text">상세 정보</a></li>
              <li><a href="#buy_guide">구매 안내</a></li>
              <li className="selected"><a href="#used_review">사용 후기</a></li>
              <li><a href="#qna">Q & A</a></li>
            </ul>

            <div className="detail_infos">
              {
                (function() {
                  if (info.review_set.length === 0)
                    return (<div className="no_content">내용이 존재하지 않습니다.</div>);
                  else return (info.review_set.map((review) => {
                    return (
                      <div className="review_container">
                        <p className="review_title">제목: {review.title}</p>
                        <p className="review_content">{review.question}</p>
                        <p className="review_answer">답변: {review.answer}</p>
                      </div>
                    )
                  }))
                })()
              }
            </div>

            <ul className="detail_menu">
              <a name="qna"></a>
              <li><a href="#detail_info_text">상세 정보</a></li>
              <li><a href="#buy_guide">구매 안내</a></li>
              <li><a href="#used_review">사용 후기</a></li>
              <li className="selected"><a href="#qna">Q & A</a></li>
            </ul>

            <div className="detail_infos">
              {
                (function() {
                  if (info.qna_set.length === 0)
                    return (<div className="no_content">내용이 존재하지 않습니다.</div>);
                  else return (info.qna_set.map((qna) => {
                    return (
                      <div className="review_container">
                        <p className="review_title">제목: {qna.title}</p>
                        <p className="review_content">{qna.question}</p>
                        <p className="review_answer">답변: {qna.answer}</p>
                      </div>
                    )
                  }))
                })()
              }
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Detail;