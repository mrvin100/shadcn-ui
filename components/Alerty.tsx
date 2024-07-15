import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Bell, Terminal } from "lucide-react";

const Alerty = () => {
  return (
    <Alert className="max-w-[20rem] mx-auto my-4">
      {/* <Terminal className="h-4 w-4" />
      <AlertCircle className="h-4 w-4" /> */}
      <Bell className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
};

export default Alerty;
