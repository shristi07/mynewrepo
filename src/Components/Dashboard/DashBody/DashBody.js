import React, { useCallback, useEffect, useState } from "react";
import { Card, Form, FormControl, InputGroup, OverlayTrigger, ToggleButton, ToggleButtonGroup, Tooltip } from "react-bootstrap";
import "./DashBody.css";
import searchIcon from "../../../assets/SearchO.svg";
import warehouseIcon from "../../../assets/warehouse.png";
import heartIcon from "../../../assets/heart.png";
import brokenHeartIcon from "../../../assets/broken-heart.png";
import cancelIcon from "../../../assets/CancelOutlined.svg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const DashBody = () => {
  const { driveState } = useSelector((state) => state);

  const [driveFeed, setDriveFeed] = useState(driveState);

  const [searchValue, setSearchValue] = useState("");
  const [searched, setSearched] = useState(false);
  const [filter, setFilter] = useState("city");
  const [isFilter, setIsFilter] = useState(false);

  const handleSearch = useCallback((operationType) => {
    setSearched(true);
    if(operationType==="search"){
      let x = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
      let searchResult = driveFeed.filter((item) => {
        return item.name === x || item.name === searchValue;
      });
      if (searchResult.length > 0) {
        setDriveFeed(searchResult);
      } else {
        window.alert("Entered Warehouse does not exist !");
      }
    }
    else{
      let x = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
      let filterResult = driveFeed.filter((item) => {
        switch (filter) {
          case "city":
            return item.city === x || item.name === searchValue;
          case "cluster":
            return item.cluster === x || item.name === searchValue;
          case "space_available":
            return item.space_available === x || item.name === searchValue;

          default:
            break;
        }
      });
      if (filterResult.length > 0) {
        setDriveFeed(filterResult);
      } else {
        window.alert("Filtered Warehouse does not exist !");
      }
    }
   
  }, [searchValue,filter]);

  useEffect(() => {
    setDriveFeed(driveState);
  }, [driveState]);

  const history = useHistory();
  
  const handleItemClick = (item) => {
    history.push({
      pathname: '/description',
      state: {  
        item
      },
    }); 
  }

  return (
    <div className="work-area">
      <div className="work-area-header">
        <div>
          <h3>
            <strong>Warehousing Network</strong>
          </h3>
          <p className="p-first">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            laborum expedita quos, corrupti libero aliquam omnis, delectus,
            assumenda velit officiis sunt molestias ipsa nobis recusandae.
            Accusamus, commodi. Esse aspernatur perferendis at omnis ab quas
            labore id tempore ipsam possimus.
          </p>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <Form.Group style={{display:"flex", columnGap:"1.5rem"}} >
              <Form.Label>Filter</Form.Label>
              <Form.Check
                type="switch"
                id="isReportAutomated"
                name="isReportAutomated"
                checked={isFilter}
                className={`filter-toggle`}
                onClick={() => {
                  setIsFilter((prevState) => !prevState);
                }}
              />
            </Form.Group>
            <ToggleButtonGroup
              type="radio" 
              name="options" 
              defaultValue={"city"}
              className="mb-2"
              onChange={val=>setFilter(val)}
            >
              <ToggleButton disabled={!isFilter} variant={"outline-secondary"} id="tbg-check-1" value={"city"}>
                City
              </ToggleButton>
              <ToggleButton disabled={!isFilter} variant={"outline-secondary"} id="tbg-check-2" value={"cluster"}>
                Cluster
              </ToggleButton>
              <ToggleButton disabled={!isFilter} variant={"outline-secondary"} id="tbg-check-3" value={"space_available"}>
                Space Available
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <InputGroup className="input-field">
            <FormControl
              className="text-area"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={`${!isFilter?"Search for a Warehouse":`Filter Warehouse based on ${filter} `}`}
              // placeholder={!isFilter?"Search for a Warehouse":"Filter Warehouse"}
            ></FormControl>
           
            {!searched?
            <InputGroup.Text onClick={() => handleSearch(!isFilter?"search":"filter")} id="basic-addon1">
              <img style={{ cursor: "pointer" }} src={searchIcon} alt="" />
            </InputGroup.Text>:
            <InputGroup.Text style={{marginLeft:"0",border:"2px solid #ed3232"}} id="basic-addon1">
               <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSearchValue("");
                setDriveFeed(driveState);
                setSearched(false);
              }}
              src={cancelIcon}
              alt=""
            />
            </InputGroup.Text>}
          </InputGroup>
        </div>
      </div>
      <div className="warehouse-container">
        <p>Warehouse List</p>
        <div className="collection">
          {driveFeed.map((ele, index) => (
            <Card className="card-basic">
              <Card.Img
                className="card-Img"
                variant="top"
                src={warehouseIcon}
                onClick = {() => handleItemClick(ele)}
              />
              <div className="card-bottom">
                <p>{ele.name}</p>
                <OverlayTrigger
                  key={"top"}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      {ele.is_live ? "live" : "not live"}
                    </Tooltip>
                  }
                >
                  <img src={ele.is_live ? heartIcon : brokenHeartIcon} />
                </OverlayTrigger>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBody;
