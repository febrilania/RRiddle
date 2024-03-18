import {
  Avatar,
  AvatarFallbackText,
  Box,
  Center,
  HStack,
  Heading,
  VStack,
} from "@gluestack-ui/themed";
import { Image } from "react-native";

const Stand: React.FC = () => {
  return (
    <>
      <Center>
        <Heading fontSize={"$3xl"} marginBottom={30} mt={80} color="$white">
          Better luck next time
        </Heading>
        <HStack justifyContent="space-between" gap={55}>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full" mt={70}>
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full" mb={100}>
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full" mt={100}>
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
        </HStack>
        <VStack>
          <Center>
            <Image
              className="w-80 h-64 -mt-20 "
              source={require("../../../assets/stand.png")}
            />
            <VStack
              borderColor="white"
              borderWidth={2}
              py={15}
              px={15}
              width={350}
              borderRadius={5}
              gap={5}
              backgroundColor="white"
            >
              <Box
                borderColor="white"
                borderWidth={2}
                py={10}
                px={15}
                w={"$full"}
                borderRadius={5}
                backgroundColor="rgba(0, 0, 0, 0.3)"
              >
                <HStack alignItems="center" gap={10}>
                  <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                    <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
                  </Avatar>
                  <Heading color="white">UserName</Heading>
                  <Heading color="$white" ml={30}>
                    Score
                  </Heading>
                </HStack>
              </Box>
              <Box
                borderColor="white"
                borderWidth={2}
                py={10}
                px={15}
                w={"$full"}
                borderRadius={5}
                backgroundColor="rgba(0, 0, 0, 0.3)"
              >
                <HStack alignItems="center" gap={10}>
                  <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                    <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
                  </Avatar>
                  <Heading color="white">UserName</Heading>
                  <Heading color="$white" ml={30}>
                    Score
                  </Heading>
                </HStack>
              </Box>
            </VStack>
          </Center>
        </VStack>
      </Center>
    </>
  );
};

export default Stand;
