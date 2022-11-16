import React, { Component } from "react";
import "./Card.css";
import view from "../images/view.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

class Card extends Component {
  render() {
    return (
      <div className="card__container">
        <div className="card__container__img">
          <img src={view} alt="image broken" className="card__img" />
          <p className="card__container__img__text">Huy</p>
        </div>
        <div className="card__container__content">
          <p className="card__container__content__header">
            <b>Chuyến đi biển Phú Quốc</b>
          </p>
          <p>
            Gần đây chúng tôi có đi du lịch ở Phú Quốc, biển ở đây rất sạch,
            ..... <a href="#">Read more</a>
          </p>
        </div>
        <div className="card__container__footer">
          <div>
            <div>
              <IconButton>
                <ThumbUpIcon fontSize="large" />
              </IconButton>
            </div>
            <div>
                <p>10</p>
            </div>
          </div>
          <div>
            <IconButton>
              <DeleteIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
