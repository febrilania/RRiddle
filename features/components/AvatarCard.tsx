import {
  Avatar,
  Button,
  ButtonText,
  Card,
  Center,
  HStack,
  Heading,
  VStack,
} from "@gluestack-ui/themed";

import { Image } from "react-native";
import dataDummy from "../../mocks/data.json";
export default function AvatarCard() {
  return (
    <>
      <VStack gap={15}>
        <HStack flexWrap="wrap" justifyContent="center">
          {dataDummy.map(
            (
              item // Corrected: added parentheses around the JSX
            ) => (
              <Card
                key={item.id}
                size="sm"
                variant="elevated"
                m="$3"
                pt={20}
                borderColor="black"
                borderWidth={1}
                backgroundColor="$blue200"
              >
                <VStack>
                  <Center gap={20}>
                    <Avatar
                      borderColor="black"
                      borderWidth={1}
                      bgColor="$black"
                      size="lg"
                      borderRadius="$full"
                    >
                      <Image
                        className="h-full w-full rounded-full"
                        source={{ uri: item.avatar }}
                      />
                    </Avatar>
                    <HStack gap={3}>
                      <Image
                        className="w-6 h-6"
                        source={require("../../assets/diamond.png")}
                      />
                      <Heading color="$amber600" size="md">
                        {item.diamond}
                      </Heading>
                    </HStack>
                  </Center>
                </VStack>
              </Card>
            )
          )}
        </HStack>
        <Center>
          <HStack gap={10}>
            <Button backgroundColor="red" width={100}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button backgroundColor="$green500" width={100}>
              <ButtonText>Save</ButtonText>
            </Button>
          </HStack>
        </Center>
      </VStack>
    </>
  );
}
