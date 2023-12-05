import React from "react";
import "../style/PrinterManage.css";
import "../style/SPSOHomepage.css";
import {Link} from "react-router-dom";

function PrinterManage()  {
  return (
    <div className="qlyhoatdong-SPSO">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="filters-bar">
            <div className="content-2">
              <div className="dropdowns">
                <button className="button">
                  <div className="button-base-2">
                    <div >
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/603/109/small/filter-line-icon-vector.jpg" className="icon-instance-node" />
                    </div>           
                    <div className="more-filters">Filters</div>
                  </div>
                </button>
                <div className="button">
                    <button className="button-base-instance">
                       + Add Printer
                    </button>
                </div>
                <div className="button">
                    <button className="button-base-3">Remove Printer</button>
                </div>
              </div>
            <div class="searchfilter">
                <div>
                    <img class="searchfiltericon" src="https://static.vecteezy.com/system/resources/previews/020/120/837/original/search-icon-simple-style-web-searching-background-symbol-search-brand-logo-design-element-search-t-shirt-printing-for-sticker-free-vector.jpg"></img>
                </div>
                <div>
                    <input type="text" place="Search"></input>
                </div>
            </div>
            </div>
          </div>
          <div class="homepage-SPSO">
            <div className="heading">
                          <div className="navbar">
                              <div className="text-wrapper-7">Quản lý trang in</div>
                              <div className="text-wrapper-8">
                                  <Link to="/PrinterManage">Quản lý máy in</Link>
                              </div>
                              <div className="text-wrapper-9">Trang chủ</div>
                          </div>
                          <div class="user-icon">
                              <img className="search-icon" alt="Search icon" src="https://i.imgur.com/VLWKDmO.png" />
                              <img className="customer-support" alt="Customer support" src="https://i.imgur.com/gTfcuZY.png" />
                              <img className="bell" alt="Bell" src="https://i.imgur.com/nPrio7M.png" />
                              <img class="imguser" alt="User icon" src="https://i.imgur.com/0V7oQzx.png" />
                              <img className="expand-arrow" alt="Expand arrow" src="https://i.imgur.com/wMo6W9J.png" />
                          </div>
                          <img className="logobk" alt="Logobk" src="https://i.imgur.com/3ZUlxdA.png" />
            </div>

          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">Quản lý máy in</div>
          </div>
          <div className="frame">
            <div className="frame-2">
              <div className="frame-3">
                <img className="img" alt="Frame" src="frame-195.png" />
                <img className="frame-4" alt="Frame" src="frame-196.png" />
                <img className="frame-5" alt="Frame" src="image.png" />
              </div>
              <div className="frame-6">
                <img className="frame-7" alt="Frame" src="frame-195-2.png" />
                <img className="frame-7" alt="Frame" src="frame-196-2.png" />
                <img className="frame-7" alt="Frame" src="frame-195-3.png" />
              </div>
              <div className="frame-8">
                <img className="img" alt="Frame" src="frame-195-4.png" />
                <img className="frame-4" alt="Frame" src="frame-196-3.png" />
                <img className="frame-5" alt="Frame" src="frame-195-5.png" />
              </div>
              <div className="frame-9">
                <img className="img" alt="Frame" src="frame-195-6.png" />
                <img className="frame-4" alt="Frame" src="frame-196-4.png" />
                <img className="frame-5" alt="Frame" src="frame-195-7.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterManage;
