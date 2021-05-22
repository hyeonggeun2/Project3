import React from "react";
import "./Pagination.css"

function Pagination(props){
  return(
    <div className="pagination_box">
      {
        (() => {
          if (props.page == 1) return (
            <div className="noext">&#60;</div>
          );
          else return(
            <a href={props.prev}>&#60;</a>
          )
        })()
      }
      <div>{props.page}</div>
      {
        (() => {
          if (props.page == props.max_page) return (
            <div className="noext">&#62;</div>
          );
          else return(
            <a href={props.next}>&#62;</a>
          )
        })()
      }
    </div>
  )
};

export default Pagination;