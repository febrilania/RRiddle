import React, { useState, useEffect } from "react";
import { Box, HStack, Heading, VStack } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import FindOppCard from "../../components/FindOppCard";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface TimerProps {}

const FindOpp: React.FC<TimerProps> = () => {
  const [timer, setTimer] = useState<number>(30); // Initial timer value in seconds

  useEffect(() => {
    // Function to decrement timer every second
    const countdown: any = setInterval(() => {
      setTimer((prevTimer) => {
        // Decrement timer by 1 unless it's already at 0
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown); // Stop the countdown if timer reaches 0
          return 0;
        }
      });
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(countdown);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <HStack p={10} justifyContent="space-between">
        <Image
          className="h-20 w-20"
          source={require("../../../assets/logo.png")}
        />
        <Box p={15}>
          <AntDesign name="closecircle" size={24} color="white" />
        </Box>
      </HStack>
      <VStack gap={10} alignItems="center" mt="auto" mb="auto">
        <Heading size="5xl" color="$amber600">
          {timer}
        </Heading>
        <Heading size="3xl" color="white">
          Finding Opponent
        </Heading>
        <Heading size="3xl" color="white">
          4/5
        </Heading>
        <FindOppCard />
        <FindOppCard />
        <FindOppCard />
        <FindOppCard />
      </VStack>
    </>
  );
};

export default FindOpp;
