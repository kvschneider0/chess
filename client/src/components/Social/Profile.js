import { useState, useEffect } from 'react';
import moment from 'moment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { pgnToObj } from '../Util/pgnFenHandler.js'
import { useAppContext } from '../../AppContext.js';
import CompletedGames from './CompletedGames.js';

const length = '80%';

function Profile({ profileData, games, onAddFriend, onRemoveFriend }) {
  const { user } = useAppContext();
  const [isFriend, setIsFriend] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!profileData) profileData = {
    id: 0,
    full_name: '',
    username: '',
    email: '',
    profile_image: '',
    date_joined: '',
    friend_ids: []
  };

  useEffect(() => {
    if (profileData) {
      setIsFriend(user.friend_ids.includes(profileData.id));
    };
  }, [profileData, user.friend_ids]);

  // guest
  if (profileData.id === 0 && user.id === 0) {
    return (
      <Box
        sx={{
          bgcolor: 'secondary.main',
          align: 'center',
          m: 'auto',          
          p: 3,
          display: 'inline-block'
        }}
      >
        <Typography variant='h1'>Login To See Your Profile</Typography>
      </Box>
    );
  };
  
  const onSendChallenge = () => {
    fetch('/challenges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ challengerId: user.id, challengeeId: profileData.id})
    })
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  // games won
  const completedGames = games.filter(game => game.pgn.slice(-1)[0] !== '*');
  const numGames = completedGames.length;
  const wonGames = completedGames.filter(g => {
    const pgnObj = pgnToObj(g.pgn);
    const isWhite = pgnObj['whiteUsername'] === profileData.username;
    const isBlack = pgnObj['blackUsername'] === profileData.username;
    const whiteWon = pgnObj['result'] === '1-0';
    const blackWon = pgnObj['result'] === '0-1';

    return ((whiteWon && isWhite) || (blackWon && isBlack));
    });
  const numWon = wonGames.length;

  const yyyymmdd = profileData.date_joined.split(' ')[0].split('-')
  const date = new Date(yyyymmdd[0], yyyymmdd[1]-1, yyyymmdd[2])
  const formattedDate = moment(date).format('MMMM D Y')

  return (
    <Box
      bgcolor='primary.main'
      align='center'
      my='auto'
    >
      {/* User Info */}
      <Box
        bgcolor='secondary.main'
        width={length}
        height='40vh'
        sx={{
          display:'flex',
          my: 2,
        }}
      >
        <Box 
          component='img'
          alt=''
          src={profileData.profile_image}
          sx={{
            height: '80%',
            mx: 2,
            my: 'auto',
          }}
        />
        <Box sx={{ m: 'auto'}}>
          <Typography variant='h3' sx={{ mb: 5 }}>{profileData.username}</Typography>
          <Typography variant='h4' sx={{ mb: 5 }}>{profileData.full_name}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant='h5'>Games</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5'>Wins</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5'>Joined</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5'>{numGames}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5'>{numWon}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5'>{formattedDate}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Challenge/Friend Button */}
      {user.id !== profileData.id && user.id !==0 ? <Box>
        <Button
          variant='contained'
          sx={{ mr: 2 }}
          onClick={onSendChallenge}
        >
          Send Challenge
        </Button>
        {isFriend ? 
          <Button
          variant='contained'
          sx={{ ml: 2 }}
          onClick={() => {
            onRemoveFriend();
            setIsFriend(!isFriend);
          }}
          >
            Remove Friend
          </Button> :                
          <Button
          variant='contained'
          sx={{ ml: 2 }}
          onClick={() => {
              onAddFriend();
              setIsFriend(!isFriend);
            }}
            >
            Add Friend
          </Button>}
          <Fade in={showConfirmation} sx={{ mt: 1 }}>
            <Box
              bgcolor='green'
              width='20%'
              borderRadius='5px'
            >
              challenge created
            </Box>
          </Fade>
      </Box> : null}
      {/* Completed Games */}
      <Box
        bgcolor='secondary.main'
        width={length}
        height='40vh'
        sx={{ my: 2, p: 2 }}
        // overflow='auto'
      >
        <Box
          bgcolor='secondary.main'
          width={length}
          sx={{ 
            my: 2, 
            p: 2, 
            height: '95%', 
            width: '100%', 
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          // overflow='auto'            
        >
          <Typography variant='h4' sx={{ p: 2}}>Completed Games</Typography>
          <CompletedGames games={completedGames} />
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;