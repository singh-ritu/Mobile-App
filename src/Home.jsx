import React, { useState } from "react";
import Details from "./proCard";
import Dailog from "./Dailog";
import { Button, Modal, Space } from "antd";
import ProCard from "@ant-design/pro-card";

function Home() {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCaption = (e) => {
    setCaption(e.target.value);
  };
  const handlePost = () => {
    console.log(name);
    console.log(caption);
    const postArr = [...posts];
    postArr.push(input);
    setPosts(postArr);
    setName("");
    setCaption("");
    modalClose();
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };

  const newPost = () => {
    setIsModalOpen(true);
    setInput(name, caption);
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
      <div className="cards">
        {posts.length > 0 &&
          posts.map((value, index) => (
            <div key={index}>
              <Details />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Home;
