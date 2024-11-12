import { AlertTitle, AlertDescription, Alert } from "../../../components/ui/alert";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function SessionError() {
  return (
    <div className="flex flex-col h-screen p-4 justify-center items-center bg-gray-50">
      <div className="max-w-md w-full">
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Session Expired</AlertTitle>
          <AlertDescription>
            Your session has expired or is invalid.Please try again and
            continue.
          </AlertDescription>
        </Alert>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 w-full"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
