import { useCallback, useEffect, useState } from "react";

const helloMessages = [
  "Hello I'm",
  "Bonjour je suis",
  "Hola yo soy",
  "Hallo, ich bin",
  "Ciao io sono",
  "Hei olen",
  "Hej, jag är",
  "Halló ég er",
  "Witam ja jestem",
  "Halo aku",
  "Halò tha mi",
  "Hallo jeg er",
];

const HelloMessage = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const shuffle = useCallback(() => {
    setMessageIndex((prevValue) => {
      let newIndex = ++prevValue;
      if (newIndex >= helloMessages.length) newIndex = 0;
      return newIndex;
    });
  }, []);

  useEffect(() => {
    const intId = setInterval(shuffle, 5000);
    return () => clearInterval(intId);
  }, [shuffle]);

  return (
    <span className="text-accent1 xxl:text-[24px] xl:text-[22px] font-semibold italic pb-[5px]">
      {helloMessages[messageIndex]}
    </span>
  );
};

export default HelloMessage;
