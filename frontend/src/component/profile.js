import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadUser } from "../actions/userAction";
import store from "../store";

const Profile = ({ history }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
    else{
      store.dispatch(loadUser());
    }
  }, [history, isAuthenticated]);
  return (
    
          
          <div>
            <div>
              <div>
                <h4>Full Name :</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email :</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On :</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>
            </div>
          </div>
        
  );
};

export default Profile;