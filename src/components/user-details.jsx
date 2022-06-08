import { Box, Text } from "native-base";
import { useContext, useEffect } from "react";
import { getUserDetails } from "../actions";
import { usersContext } from "../context";
export const UserDetails = ({ route }) => {
  const { id } = route.params;

  const resolve = async () => {
    dispatch(await getUserDetails(id));
  };
  useEffect(() => {
    if (id) resolve();

    return () => dispatch({ type: "CLEAR" });
  }, []);
  const { state, dispatch } = useContext(usersContext);
  const user = state.users.details;

  if (!user) return <Text>Loading ...</Text>;
  return (
    <Box>
      <Text>Name:{user.name}</Text>
      <Text>Email:{user.email}</Text>
      <Text>Phone:{user.phone}</Text>
    </Box>
  );
};
