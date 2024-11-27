declare module 'react-scroll' {
  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    className?: string;
    activeClass?: string;
    onClick?: () => void;
  }

  export const Link: React.FC<LinkProps & React.HTMLAttributes<HTMLElement>>;
  export const Element: React.FC<{ name: string } & React.HTMLAttributes<HTMLElement>>;
  export const Events: {
    scrollEvent: {
      register: (eventName: string, callback: () => void) => void;
      remove: (eventName: string) => void;
    };
  };
}
