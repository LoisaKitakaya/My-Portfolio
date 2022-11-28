import { useEffect, useRef } from "react";

const UtterancesComments = () => {
  const ref = useRef();

  useEffect(() => {
    const script = document.createElement("script");

    const config = {
      src: "https://utteranc.es/client.js",
      repo: "LoisaKitakaya/My-Portfolio",
      label: "Comment",
      "issue-term": "pathname",
      theme: "github-light",
      crossOrigin: "anonymous",
      defer: true,
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    setTimeout(() => {
      ref.current.append(script);
    }, 300);
  }, []);

  return <div ref={ref} />;
};

export default UtterancesComments;
