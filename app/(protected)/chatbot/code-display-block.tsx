"use client";
import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

import { CodeBlock, dracula } from "react-code-blocks";
import { toast } from "sonner";

import { Button } from "../../../components/ui/button";

interface ButtonCodeblockProps {
  code: string;
  lang: string;
}
function CodeDisplayBlock({ code, lang }: ButtonCodeblockProps) {
  const [isCopied, setisCopied] = useState(false);
  console.log(lang);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setisCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => {
      setisCopied(false);
    }, 1500);
  };

  return (
    <div className="relative my-4 overflow-scroll overflow-x-scroll flex flex-col text-start">
      <Button
        onClick={copyToClipboard}
        variant="ghost"
        size={"icon"}
        className="h-5 w-5 absolute top-2 right-2"
      >
        {isCopied ? (
          <CheckIcon className="w-4 h-4 scale-100 transition-all" />
        ) : (
          <CopyIcon className="w-4 h-4 scale-100 transition-all" />
        )}
      </Button>
      <CodeBlock
        customStyle={{ background: "#2a2a2a" }}
        text={code}
        language="tsx"
        showLineNumbers={false}
        theme={dracula}
      />
    </div>
  );
}

export default CodeDisplayBlock;