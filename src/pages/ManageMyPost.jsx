import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ManageMyPost = () => {
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/manageMyPost/${user.email}`)
      .then((res) => res.json())
      .then((data) => setFilter(data))
  }, [user.email]);
  console.log(filter);
  return (
    <div>
      <h1>Manage my post page: {filter.length}</h1>
    </div>
  );
};

export default ManageMyPost;
