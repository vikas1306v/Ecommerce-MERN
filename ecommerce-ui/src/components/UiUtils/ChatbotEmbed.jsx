import React, { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "MSsw6kSLBKPd0xpkexy2B",
      domain: "www.chatbase.co"
    };

    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.chatbotId = "MSsw6kSLBKPd0xpkexy2B";
    script.domain = "www.chatbase.co";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      // Cleanup if necessary
    //   document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatbotEmbed;
