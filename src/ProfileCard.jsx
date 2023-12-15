import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Card, Avatar, Button } from "antd";
const ProfileCard = () => (
  <Card
    title="Ritu Singh"
    bordered={false}
    className="profile-card"
    headStyle={{ fontSize: "32px", fontWeight: "bolder" }}
  >
    <div className="avatar">
      <Avatar size={100} icon={<UserOutlined />} />
    </div>
    <div className="user-details">
      <div>
        <p>234</p>
        <h3>Likes</h3>
      </div>
      <div>
        <p>567</p>
        <h3>Followers</h3>
      </div>
      <div>
        <p>789</p>
        <h3>Post</h3>
      </div>
    </div>
    {/* <div className="nav-btn">
      <Button>Message</Button>
      <Button>Follow</Button>
    </div> */}
  </Card>
);
export default ProfileCard;
