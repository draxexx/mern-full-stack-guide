import React from "react";

import UsersList from "user/components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Victor",
      image:
        "https://bestlifeonline.com/wp-content/uploads/sites/3/2020/09/man-looking-at-online-dating-profile-dog.jpg?quality=82&strip=1&resize=640%2C360",
      places: 10,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
