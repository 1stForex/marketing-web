import { RoutesUrls } from "./Enum";

export const menuItems = [
  { key: "company", href: null, isBold: true },
  { key: "aboutUs", href: RoutesUrls.ABOUT_US, isBold: false },
  { key: "contactUs", href: RoutesUrls.CONTACT_US, isBold: false },
] as const;
