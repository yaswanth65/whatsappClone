import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import { Text } from "@chakra-ui/layout";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div
            style={{
              display: "flex",
              justifyContent: m.sender._id === user._id ? "flex-end" : "flex-start",
              marginBottom: "10px"
            }}
            key={m._id}
          >
            {m.sender._id !== user._id && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <div style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "75%"
            }}>
              <span
                style={{
                  backgroundColor: `${m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                    }`,
                  borderRadius: "20px",
                  padding: "5px 15px",
                  marginLeft: m.sender._id === user._id ? "auto" : "0",
                  marginRight: m.sender._id === user._id ? "0" : "auto",
                }}
              >
                {m.content}
              </span>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: m.sender._id === user._id ? "flex-end" : "flex-start",
                marginTop: "2px",
                fontSize: "0.75rem",
                color: "#666"
              }}>
                <Text fontSize="xs" mr={2}>
                  {m.sender._id === user._id ? "You" : m.sender.name}
                </Text>
                <Text fontSize="xs">
                  {formatTime(m.createdAt)}
                </Text>
              </div>
            </div>
            {m.sender._id === user._id && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  ml={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
