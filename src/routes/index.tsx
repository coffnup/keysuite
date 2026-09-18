import { createFileRoute } from "@tanstack/react-router";
import { KeySuiteConsole } from "@/components/keysuite/console";

export const Route = createFileRoute("/")({
  ssr: false,
  component: Home,
});

function Home() {
  return <KeySuiteConsole />;
}
