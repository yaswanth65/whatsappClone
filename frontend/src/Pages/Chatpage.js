import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div 
      className="chatpage-container"
      style={{ 
        width: "100%",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        minHeight: "100vh"
      }}
    >
      {user && <SideDrawer />}
      <Box 
        className="chatpage-main-box"
        d="flex" 
        justifyContent="space-between" 
        w="100%" 
        h="91.5vh" 
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;