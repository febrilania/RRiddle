import { View } from "react-native";

import AvatarPages from "./features/profile/components/AvatarPages";
import ChooseAvatar from "./features/profile/components/ChooseAvatar";
import BuyDiamond from "./features/Diamond/components/BuyDiamond";
import FindOpp from "./features/Finding/components/FindOpp";
import Stand from "./features/Result/components/Stand";

export default function Container() {
  return (
    <>
      <View style={{ flex: 1 }}>
        {/* <AvatarPages /> */}
        {/* <ChooseAvatar /> */}
        {/* <BuyDiamond /> */}
        {/* <FindOpp /> */}
        <Stand />
      </View>
    </>
  );
}
