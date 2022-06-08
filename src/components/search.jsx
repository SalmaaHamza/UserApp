import { VStack, Input, Box, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { searchByName, getUsersList } from "../actions";
import { usersContext } from "../context";

export default () => {
  const [searchText, setSearchText] = useState("");
  const { state, dispatch } = useContext(usersContext);

  const resolveSearchByName = async (text) => {
    dispatch(await searchByName(text));
  };

  const resolveGetAllUsers = async () => dispatch(await getUsersList());

  const handleTextChange = (e) => {
    console.log(e.target.value);
    let text = e.target.value;
    setSearchText(text);
    if (text?.length > 3) {
      resolveSearchByName(text);
    } else {
      resolveGetAllUsers();
    }
  };
  return (
    <Box>
      <VStack w="100%" space={5} alignSelf="center">
        <Input
          value={searchText}
          onChange={handleTextChange}
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          borderWidth="0"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    </Box>
  );
};
