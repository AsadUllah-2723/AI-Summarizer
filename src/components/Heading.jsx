import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToast } from "@/components/ui/use-toast";

const Heading = () => {
  const [state, setState] = useState({
    value: "",
    copied: false,
  });
  const { toast } = useToast();
  useEffect(() => {
    if (state.copied) {
      toast({
        title: "Copied",
      });
    }
  }, [state]);

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-center items-center w-full pt-2 mb-12">
        <h1 className="logo object-contain">AI - Summarizer</h1>
      </nav>

      <h1 className="head_text ">GET SUMMARY OF ANY ARTICLE</h1>
      <div className="mt-6 flex flex-col justify-center items-center">
        <p className="font-bold">Demo article link</p>
        <p className="text-gray-500">https://medium.com/....</p>
      </div>

      <CopyToClipboard
        text={
          " https://medium.com/@VidGeniusAI/how-to-summarize-articles-in-60-seconds-or-less-with-ai-49a76a6eea5b"
        }
        onCopy={() => setState({ copied: true })}
      >
        <button className="black_btn mt-2">Copy</button>
      </CopyToClipboard>
    </header>
  );
};

export default Heading;
