export interface NavProps {
  currentPath: string;
  onLinkClick: (href: string) => void;
  nav?: boolean;
}
