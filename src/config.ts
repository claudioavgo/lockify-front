import { CreditCardIcon, InfoIcon, HelpCircleIcon } from "lucide-react";

export const config = {
  public: {
    navigation: {
      navbarLinks: [
        {
          icon: CreditCardIcon,
          label: "Preços",
          href: "/pricing",
        },
        {
          icon: InfoIcon,
          label: "Sobre",
          href: "/about",
        },
        {
          icon: HelpCircleIcon,
          label: "Comunidade",
          href: "/blog",
        },
      ],
    },
  },
};
