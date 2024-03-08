import {
  Button,
  VStack,
  HStack,
  Card,
  Center,
  Avatar,
  Heading,
  ButtonText,
  Box,
} from "@gluestack-ui/themed";
import { Image } from "react-native";
import dataDummy from "../../mocks/diamond.json";
export default function DiamondCard() {
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
                pt={5}
                borderColor="$blue500"
                borderWidth={1}
                backgroundColor="$blue200"
              >
                <VStack>
                  <Center gap={8}>
                    <Heading color="$green600">{item.diamond}</Heading>
                    <Box width={70} height={50}>
                      <Image
                        className="h-full w-full rounded-full"
                        source={{ uri: item.image }}
                      />
                    </Box>
                    <HStack>
                      <Heading color="$amber600" size="md">
                        Rp. {item.price}
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
              <ButtonText>Purchase</ButtonText>
            </Button>
          </HStack>
        </Center>
      </VStack>
    </>
  );
}
