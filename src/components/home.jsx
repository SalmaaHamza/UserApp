import {
  Box,
  Text,
  Button,
  Heading,
  FlatList,
  HStack,
  ArrowForwardIcon,
} from "native-base";
import { useContext, useEffect } from "react";
import { usersContext } from "../context";
import { getUsersList } from "../actions";
import SearchBar from "./search";
import { FontAwesome5 } from "@expo/vector-icons";

export const Home = ({ navigation }) => {
  const { state, dispatch } = useContext(usersContext);

  const resolve = async () => {
    dispatch(await getUsersList());
  };
  useEffect(() => {
    resolve();
  }, []);

    return (
        <Box>

        <Heading style={{ textAlign: "center" }}>Users List</Heading>
        <SearchBar />

        <FlatList
          data={state.users.list || []}
          renderItem={({ item }) => {
            return (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "gray.600",
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack style={{ justifyContent: "space-between" }}>
                  <Text>{item.name}</Text>
                  <ArrowForwardIcon
                    onClick={() => {
                      navigation.navigate("Profile", { id: item.id });
                    }}
                  />

                </HStack>
              </Box>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </Box>
    );
};
