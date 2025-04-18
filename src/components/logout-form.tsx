import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signOut } from "@/server/auth";

export function LogoutForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Account Settings</CardTitle>
          <CardDescription>
            Ready to leave? You can log back in anytime
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async () => {
              "use server";
              await signOut({
                redirect: true,
                redirectTo: "/login",
              });
            }}
          >
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button type="submit" variant="destructive" className="w-full">
                  Log out
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground">
        Logging out will end your current session on this device.
      </div>
    </div>
  );
}
