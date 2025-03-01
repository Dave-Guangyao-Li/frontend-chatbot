import React from "react";
import { Fab, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#1976d2",
  color: "white",

  "&:hover": {
    backgroundColor: "#1565c0",
  },
}));

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <StyledFab onClick={onClick} aria-label="chat">
      <ChatIcon />
    </StyledFab>
  );
};

export default ChatButton;
