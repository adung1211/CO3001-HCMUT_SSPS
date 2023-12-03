import "../style/Upload.css";
import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";


export const Upload = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [showContinueButton, setShowContinueButton] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (file) => {
    console.log("Selected File Name:", file.name);
    setSelectedFileName(file.name);
    setShowContinueButton(true);
  };

  const handleFileDrag = (event) => {
    event.preventDefault();
    console.log("File drag");
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    const droppedFile = droppedFiles[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };
  const handleContinue = () => {
    navigate("/");
  };
  return (
    <div className="homepage-SV">
            <div className="overlap-wrapper">
                <div className="overlap">
                  <div className="frame">
                    <div className="overlap1">
                    <div className="rectangle" onDrop={handleFileDrop} onDragOver={handleFileDrag}/>
                      <p className="text-wrapper10">Hoặc kéo thả tệp ở đây</p>
                      <button className="overlap-group" onClick={openFileInput}>
                        Chọn tệp
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileInputChange}
                        />
                      </button>
                      {selectedFileName && (
                        <div className="selected-file">Selected File: {selectedFileName}</div>
                      )}
                      {showContinueButton && (
                        <button className="continue-button" onClick={handleContinue}>
                          Continue
                        </button>
                      )}
                      <img className="upload-file" alt="Upload file" src="https://i.imgur.com/JJMrZvq.png" />
                    </div>
                    <p className="p">Tải tài liệu lên để in</p>
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
export default Upload;