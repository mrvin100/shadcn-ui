import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignIn = () => {
  return (
    <div className="h-screen grid place-content-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              ></Input>
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required></Input>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign in</Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SignIn;
