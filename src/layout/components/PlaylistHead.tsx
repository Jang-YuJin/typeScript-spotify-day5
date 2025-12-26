import { Button, styled, Typography } from '@mui/material';
import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PlaylistHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
});

const HeaderContent = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  margin: '10px 10px',
  color: theme.palette.text.primary
}));

const PlaylistHead = () => {
  return (
    <div>
      <PlaylistHeader>
        <HeaderContent>
            <BookmarkIcon></BookmarkIcon><Typography variant='h2' fontWeight={700}>Your Playlist</Typography>
        </HeaderContent>
        <Button sx={{'marginBottom': '10px'}}><Typography fontSize={'x-large'} fontWeight={'lighter'}>+</Typography></Button>
      </PlaylistHeader>
    </div>
  )
}

export default PlaylistHead