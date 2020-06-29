import React, { Component } from 'react';

class about extends Component {
    render() {
        return (
            <section id="about">
          <div className="container-fluid">
            <div className="selection-title">
              <h2 className="text-success"><u>About</u></h2>
              <p><strong>The best or nothing</strong></p>	
            </div>
            <div className="row">
              <div className="col-lg-8">
                <table className="table table-striped table-bordered table-sm">
                  <tbody><tr>
                      <th style={{color: 'red'}} colSpan={2}> <i> Thông tin cơ bản của tôi <i /></i></th>
                      <th rowSpan={9}> <img src="image/anhnen.jpg" width={500} height={400} className="mx-auto d-block" alt="Dương Đỗ " /></th>
                    </tr>
                    <tr>
                      <td className="table-danger">
                        <strong>Họ Tên:</strong>
                      </td>
                      <td>
                        Đỗ Thái Dương
                      </td>
                    </tr>
                    <tr>
                      <td className="table-danger">
                        <strong>Ngày sinh:</strong>
                      </td>
                      <td>
                        22/08/2000
                      </td>
                    </tr>		
                    <tr>
                      <td className="table-danger">
                        <strong>Quê quán:</strong>
                      </td>
                      <td>
                        An Nghiệp, Tuy An, Phú Yên
                      </td>
                    </tr>	
                    <tr>
                      <td className="table-danger">
                        <strong>Học vấn:</strong>
                      </td>
                      <td>
                        Đại Học Nông Lâm TPHCM
                      </td>
                    </tr>	
                    <tr>
                      <td className="table-danger">
                        <strong>Địa chỉ hiện tại:</strong>
                      </td>
                      <td>
                        Khu B, KTX ĐHQG TPHCM
                      </td>
                    </tr>	
                    <tr>
                      <td rowSpan={2} className="table-danger">
                        <strong>Số điện thoại and email:</strong>
                      </td>
                      <td>
                        0364065209
                      </td>
                    </tr>		
                    <tr>
                      <td>
                        18130051@st.hcmuaf.edu.vn
                      </td>
                    </tr>
                    <tr>
                      <td className="table-danger">
                        <strong>Link Facebook:</strong>
                      </td>
                      <td>
                        <a href="http://facebook.com" target="_blank"> facebook.com/dtd228</a>
                      </td>
                    </tr>
                  </tbody></table>
              </div>
              <div className="col-lg-4">
                <img src="image/duongdo.jpg" height={285} width={405} /> <br />
                <p> Hi, everyone. I come from Phu Yen province. I study IT at NONG LAM UNIVERSITY. I am 21 years old. I am still single. I am interested in learning English and Chinese. I hope that I can make as many good friends as possible.</p>
              </div>
            </div>
          </div>
        </section>
        );
    }
}

export default about;