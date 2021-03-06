import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li className="priv">
            <a href="#n">개인정보처리방침</a>
          </li>
          <li className="em_bt">
            <a href="#n">이메일주소무단수집거부</a>
          </li>
        </ul>
        <div className="ft_p">
          <span>주소 : 서울시 강남구 역삼동</span>
          <span>Tel : 02-1234-5678</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
