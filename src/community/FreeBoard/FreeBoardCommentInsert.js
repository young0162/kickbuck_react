import React, { Component, Fragment } from "react";

class FreeBoardCommentInsert extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr>
                <th>내용</th>
                <td>
                  <textarea
                    style={{ width: "350px", height: "100px" }}
                    name="content"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <th>작성자</th>
                <td>
                  <input type="text" name="writer"></input>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit">저장</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Fragment>
    );
  }
}

export default FreeBoardCommentInsert;
