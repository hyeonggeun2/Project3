import React from 'react';
import DaumPostcode from "react-daum-postcode";
 
const PopupPostCode = (props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        // 여기서 값 넣어줘야 함.

        props.address(fullAddress);
        props.postcode(data.zonecode);
        props.onClose()
    }
 
    const postCodeStyle = {
      display: "block",
      position: "absolute",
      top: "30%",
      right: "32%",
      border: "2px solid black",
      width: "35vw",
      height: "45vh",
    };
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>&times;</button>
        </div>
    )
}
 
export default PopupPostCode;