import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useAppContext } from '../../AppContext.js';
import BaseContainer from '../BaseContainer';
import FriendList from './FriendList';
import NavBar from '../NavBar';
import Profile from './Profile';
import UserList from './UserList';

function Social() {
  const { user, users, games } = useAppContext();
  const { id } = useParams();
  const initialProfileState = {
    id: 0,
    full_name: '',
    username: '',
    email: '',
    profile_image: '',
    date_joined: '',
    friend_ids: []
  };
  const [profileData, setProfileData] = useState(initialProfileState);
  const [friends, setFriends] = useState([]);
  const [showFriends, setShowFriends] = useState(true);
  
  const handleAddFriend = () => {
    fetch('/friendships', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([user.id, profileData.id])
    })
    .then(() => {
      const newFriend = users.filter(u => parseInt(u.id) === parseInt(user.id))[0];
      setFriends(friends => [...friends, newFriend]);
    });
  };
      
  const handleRemoveFriend = () => {
    fetch('/friendships', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify([user.id, profileData.id])
    })
    .then(() => {
      setFriends(friends => friends.filter(u => parseInt(u.id) !== parseInt(user.id)));
    });
  };
      
  const handleClickButton = () => {
    setShowFriends(!showFriends);
  };
  
  const filteredGames = games.filter(u => {
    return parseInt(u.white_user_id) === parseInt(id) || 
      parseInt(u.black_user_id) === parseInt(id);
  });
      
  useEffect(() => {
    const thisPageUser = users.filter(u => parseInt(u.id) === parseInt(id))[0];
    setProfileData(thisPageUser);
    setFriends(users.filter(u => thisPageUser.friend_ids.includes(u.id)));
  // eslint-disable-next-line
  }, [id, users]);   

  return (
      <BaseContainer>
        <NavBar />
        <Profile 
          profileData={profileData}
          games={filteredGames}
          onAddFriend={handleAddFriend}
          onRemoveFriend={handleRemoveFriend}
        />
        {showFriends ? 
          <UserList users={users.filter(u => u.id !== 0)} onClickButton={handleClickButton}/> :
          <FriendList users={friends} onClickButton={handleClickButton}/>
        }
      </BaseContainer>
  );
}

export default Social;