import React, { useState, useEffect } from "react";
import Details from "./proCard";
import Dailog from "./Dailog";
import { Button, Modal, Space } from "antd";
import ProCard from "@ant-design/pro-card";

function Home() {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const postArray = "postArray"; //Global variable

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(postArray));
    setPosts(data ? data : []); // condition applied because initially the local storage was empty so it returns null as a value and setpost as null because of which in handle post the posts(i.e. null) which is not iterable
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCaption = (e) => {
    setCaption(e.target.value);
  };
  const handlePost = () => {
    const postDetails = { name: name, caption: caption };
    console.log(posts);
    const postArr = [...posts];
    postArr.push(postDetails);
    setPosts(postArr);
    console.log(postDetails);
    setName("");
    setCaption("");
    modalClose();
    localStorage.setItem(postArray, JSON.stringify(postArr));
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
      <div className="cards">
        {posts?.length > 0 &&
          posts?.map((value, index) => (
            <div key={index}>
              <Details postDetails={value} />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Home;
// when you have more than value to set use object to create one entity just like one post
