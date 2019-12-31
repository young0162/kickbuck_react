import React, { Component, Fragment } from "react";
import { Button, Table } from "reactstrap";

class FreeBoardCommentInsert extends Component {
  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <Table>
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
                  <Button type="submit">저장</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </form>
      </Fragment>
    );
  }
}

export default FreeBoardCommentInsert;
