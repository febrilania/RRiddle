import { LinearGradient } from "expo-linear-gradient";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import Container from "./Container";
import { config } from "@gluestack-ui/config";
import Avatar from "./features/profile/components/AvatarPages";

export default function App() {
  return (
    <>
      <GluestackUIProvider config={config}>
        <LinearGradient
          colors={["#5ecdb8", "#569cdf", "#560be5"]}
          className="h-full"
        >
          <Container />
        </LinearGradient>
      </GluestackUIProvider>
    </>
  );
}
