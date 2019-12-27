import React, { Component, Fragment } from 'react';
import './faq.css';
import Collapsible from 'react-collapsible';


export default class FAQ extends Component {

  render() {
    return (
      <Fragment>
      <div className="faqwrap">
        <div className="container">
          <div>
          </div>
          <span>FAQ (yarn add react-collapsible 설치 필요. 마우스 클릭할 때마다 바뀜.)</span>
          <ul>
              <li>
                  <Collapsible trigger="Q. kickbuck이란 무슨뜻인가요?" className="question">
                        <p className="answer">
                          영어 속어 중에 kick the bucket이라는 있는데 속어는 죽다라는 의미를 가지고 있습니다.<br />
                          이 속어에서 버킷리스트라는 말이 유래해서 쓰게되었습니다.
                          누구나 죽기전에 해보고싶은것들이 있는데 혼자서는 도전하기가 힘든분들을 위해 만들었습니다.
                        </p>
                  </Collapsible>
              </li>
              <li>
                  <Collapsible trigger="Q. 이용하는 방법이 궁금해요" className="question">
                          <p className="answer">
                          회원가입 후 로그인을하고 자신이 원하는 버킷리스트를 작성or참여하기를 눌러 시작하면됩니다.<br />
                          작성시 같이하고 싶으면 공개를 선택 혼자하고 싶다면 비공개를 선택할 수 있습니다.
                          </p>
                    </Collapsible>
              </li>
              <li>
                  <Collapsible trigger="Q. 나이 제한은 없나요?" className="question">
                          <p className="answer">
                          나이와 관계없이 누구나 참여할 수 있습니다.
                          </p>
                    </Collapsible>
              </li>
              <li>
                  <Collapsible trigger="Q. 나이 제한은 없나요?" className="question">
                          <p className="answer">
                          나이와 관계없이 누구나 참여할 수 있습니다.
                          </p>
                    </Collapsible>
              </li>
              <li>
                  <Collapsible trigger="Q. 나이 제한은 없나요?" className="question">
                          <p className="answer">
                          나이와 관계없이 누구나 참여할 수 있습니다.
                          </p>
                    </Collapsible>
              </li>
          </ul>
      </div>
      </div>
      </Fragment>
    );
  }
}