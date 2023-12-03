import "../style/Upload.css";
import { useLocation } from "react-router-dom";


export const Properties = () => {
    const location = useLocation();
    const selectedFileName = location.state?.selectedFileName;
    function changeContent(newContent) {
        console.log(newContent);
        document.getElementById('selectedSize').innerText = newContent;
    }
    return (
        <div className="homepage-SV">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="prv">
                        <div className="text-wrapper"> {selectedFileName} </div>
                        <img className="document" alt="Document" src="https://i.imgur.com/Gjst5w3.png" />
                    </div>
                    <div className="box">
                        <div className="filename">{selectedFileName}</div>
                        <div className="op2">
                            <div className="text3">In 2 mặt</div>
                            <input type="checkbox" id="doubleSidedPrinting" />
                        </div>
                        <div className="op3">
                            <div className="text4">Số bản sao</div>
                            <input
                                type="number"
                                id="numberOfCopies"
                                name="numberOfCopies"
                                min="1"
                                defaultValue="1"
                                className="copies-input"
                            />
                        </div>
                        <div className="op4">
                            <div className="text5">Số trang trên một mặt</div>
                            <input
                                type="number"
                                id="numberOfPages"
                                name="numberOfPages"
                                min="1" // Set a minimum value (adjust as needed)
                                max="8"
                                defaultValue="1" // Set a default value
                                className="pages-input"
                            />
                        </div>
                        <div className="op1">
                            <div className="text1">Cỡ giấy</div>
                            <div className="dropdown">
                                <div className="text2" id="selectedSize"> A4</div>
                                <div className="dropdown-content">
                                    <div className="dropdown-item" onClick={() => changeContent('A3')}>A3</div>
                                    <div className="dropdown-item" onClick={() => changeContent('A4')}>A4</div>
                                    <div className="dropdown-item" onClick={() => changeContent('A5')}>A5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heading">
                        <div className="navbar">
                            <div className="text-wrapper-6">Lịch sử</div>
                            <div className="text-wrapper-7">Mua Trang</div>
                            <div className="text-wrapper-8">In</div>
                            <div className="text-wrapper-9">Trang chủ</div>
                        </div>
                        <div className="user-icon">
                            <img className="search-icon" alt="Search icon" src="https://i.imgur.com/VLWKDmO.png" />
                            <img className="customer-support" alt="Customer support" src="https://i.imgur.com/gTfcuZY.png" />
                            <img className="bell" alt="Bell" src="https://i.imgur.com/nPrio7M.png" />
                            <img className="img" alt="User icon" src="https://i.imgur.com/0V7oQzx.png" />
                            <img className="expand-arrow" alt="Expand arrow" src="https://i.imgur.com/wMo6W9J.png" />
                        </div>
                        <img className="logobk" alt="Logobk" src="https://i.imgur.com/3ZUlxdA.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Properties;