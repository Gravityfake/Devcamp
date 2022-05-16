import React, { useState } from "react";

const lap = {
  display: "inline-block",
  width: "300px",
  margin: "50px",
  backgroundColor: "blue",
};

const PictureCard = (props) => {
  const [like, setLike] = useState(props.likeCount);
  const [comment, setComment] = useState(props.commentCount);

  const onClickFunction = () => {
    setLike(like + 1);
  };

  const enterComment = (e) => {
    if (e.keyCode === 13) {
      alert("ขอบคุณสำหรับความคิดเห็น");
      setComment(comment + 1);
      e.target.value = "";
    }
  };

  return (
    <div style={lap}>
      <p>ID : {props.id}</p>
      <div style={{ padding: "10px" }}>
        <img style={{ maxWidth: "100%" }} src={props.img} alt={props.id} />
      </div>
      <p>Create By  : {props.createdBy}</p>
      {like > 0 && <p>Like : {like}</p>}
      <p>Comment : {comment}</p>
      <input type="button" value="LIKE" onClick={onClickFunction} />
      <br />
      <input type="text" onKeyUp={enterComment} />
    </div>
  );
};

export default PictureCard;