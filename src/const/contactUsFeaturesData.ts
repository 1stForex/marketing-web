import Chat from "@/src/assets/icons/chat.svg";
import Mail from "@/src/assets/icons/mail.svg";

export const contactUsFeaturesData = [
  {
    titleKey: "liveChat",
    descriptionKey: "liveChatDescription",
    icon: Chat,
  },
  {
    titleKey: "supportEmail",
    descriptionKey: "supportEmailDescription",
    icon: Mail,
  },
  {
    titleKey: "callback",
    descriptionKey: "callbackDescription",
    icon: Mail,
  },
] as const;
