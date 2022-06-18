import {
  Avatar,
  Stack,
  styled,
  TextField,
  Tooltip,
  Button,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import Image from "@mui/icons-material/Image";
import VideoCameraBack from "@mui/icons-material/VideoCameraBack";
import PersonAdd from "@mui/icons-material/PersonAdd";
import DateRange from "@mui/icons-material/DateRange";
const StyledModel = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title='Add'
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(100% - 90px)" },
          md: 30,
          ml: 2,
        }}
      >
        <Fab color='primary' aria-label='add' onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModel
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box width={400} height={280} bgcolor='white' p={3} borderRadius={5}>
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src='https://material-ui.com/static/images/avatar/1.jpg'
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant='span' fontWeight={500}>
              Sam
            </Typography>
          </UserBox>

          <TextField
            id='standard-multiline-static'
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder='Whats on your mind?'
            variant='standard'
          />
          <Stack gap={1} direction='row' mt={2} mb={3} sx={{ cursor: "pointer" }}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModel>
    </>
  );
};

export default Add;
