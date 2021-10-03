import React, { useCallback, useEffect, useState } from "react";
import { Card, FormControl, InputGroup } from "react-bootstrap";
import "./DashBody.css";
import searchIcon from "../../../assets/SearchO.svg";
import pdfIcon from "../../../assets/File-pdf.svg";
import pptIcon from "../../../assets/File-ppt.svg";
import textIcon from "../../../assets/File-text.svg";
import folderIcon from "../../../assets/Folder.svg";
import cancelIcon from "../../../assets/CancelOutlined.svg";
import DropDown from "../DropDown/DropDown";
import AddButtons from "../AddButtons/AddButtons";
import { useSelector } from "react-redux";

const DashBody = () => {
  const { driveState } = useSelector((state) => state);

  const [driveFeed, setDriveFeed] = useState(driveState);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = useCallback(() => {
    let x = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
    let folderResult = driveFeed.folders.filter((item) => {
      return item.name === x || item.name === searchValue;
    });
    let fileResult = driveFeed.files.filter((item) => {
      return item.name === x;
    });
    setDriveFeed({
      ...driveFeed,
      folders: [...folderResult],
      files: [...fileResult],
    });
  }, [searchValue]);

  useEffect(() => {
    setDriveFeed(driveState);
  }, [driveState]);

  const renderFileImage = useCallback((fileType, returnType) => {
    if (returnType === "icon") {
      switch (fileType) {
        case "PPT":
          return pptIcon;
        case "PDF":
          return pdfIcon;
        case "DOC":
          return textIcon;
      }
    } else {
      switch (fileType) {
        case "PPT":
          return "rgb(255, 251, 235)";
        case "PDF":
          return "rgb(255, 243, 247)";
        case "DOC":
          return "rgb(246, 243, 255)";
      }
    }
  }, []);
  return (
    <div className="work-area">
      <div className="work-area-header">
        <div>
          <div className="entity-name">
            <h4>
              <strong>{driveFeed.name}</strong>
            </h4>
          </div>
          <div className="entity-has">
            <p className="p-first">
              {driveFeed.folders.length} Folders {driveFeed.files.length} Files
            </p>
          </div>
          <InputGroup className="input-field">
            <FormControl
              className="text-area"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for a folder or file"
            ></FormControl>
            <img
              className={searchValue ? "cancelIcon-visible" : "cancelIcon"}
              onClick={() => {
                setSearchValue("");
                setDriveFeed(driveState);
              }}
              src={cancelIcon}
              alt=""
            />
            <InputGroup.Text onClick={() => handleSearch()} id="basic-addon1">
              <img style={{ cursor: "pointer" }} src={searchIcon} alt="" />
            </InputGroup.Text>
          </InputGroup>
        </div>

        <AddButtons />
      </div>
      <div className="folder-container">
        <p>{driveFeed.folders.length} Folders</p>
        <div className="collection">
          {driveFeed.folders.map((ele, index) => (
            <Card className="card-basic">
              <div className="card-basic-body">
                {" "}
                <Card.Img className="card-Img" variant="top" src={folderIcon} />
              </div>
              <div className="card-bottom">
                <p>{ele.name}</p>
                <DropDown details={ele} index={index} />
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="file-container">
        <p>{driveFeed.files.length} Files</p>
        <div className="collection">
          {driveFeed.files.map((ele, index) => (
            <Card className="card-basic">
              <div
                className="card-basic-body"
                style={{
                  backgroundColor: renderFileImage(ele.type, "bgColor"),
                }}
              >
                <Card.Img
                  className="card-Img"
                  variant="top"
                  src={renderFileImage(ele.type, "icon")}
                />
              </div>
              <div className="card-bottom">
                <div>
                  <p className="p-first">{ele.type}</p>
                  <p>{ele.name}</p>
                </div>
                <DropDown details={ele} index={index} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBody;
