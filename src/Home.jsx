import React, { useState } from "react";
import Details from "./proCard";
import Dailog from "./Dailog";
import { Button, Modal, Space } from "antd";

function Home() {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCaption = (e) => {
    setCaption(e.target.value);
  };
  const handlePost = () => {
    console.log(name);
    console.log(caption);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };

  const newPost = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="home-details">
      <Button className="add-post-btn" onClick={newPost}>
        +
      </Button>
      {isModalOpen && (
        <Dailog
          name={name}
          caption={caption}
          handleName={handleName}
          handleCaption={handleCaption}
          handlePost={handlePost}
          modalClose={modalClose}
        />
      )}
    </div>
  );
}
export default Home;
