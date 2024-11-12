import { MessageSquare } from "lucide-react";


const EmptyMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 flex-1">
      <MessageSquare className="size-8" />
      <h1 className="text-gray-500 text-xl">No messages yet</h1>
      <p className="text-muted-foreground text-sm">
        Ask your questions related to health
      </p>
    </div>
  );
};
export default EmptyMessage