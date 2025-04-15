import { CreditCardIcon, InfoIcon, HelpCircleIcon } from "lucide-react";

export const config = {
  project: {
    name: "Campanhas",
    description:
      "Plataforma para você criar e gerenciar suas campanhas com segurança e praticidade",
  },
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
      footerSections: [
        {
          title: "Páginas",
          links: [
            {
              label: "Início",
              href: "/",
            },
            {
              label: "Preços  ",
              href: "/pricing",
            },
            {
              label: "Sobre",
              href: "/about",
            },
            {
              label: "Comunidade",
              href: "/blog",
            },
            {
              label: "Termos de uso",
              href: "/terms",
            },
            {
              label: "Política de privacidade",
              href: "/privacy",
            },
          ],
        },
        {
          title: "Ajuda",
          links: [
            {
              label: "Central de ajuda",
              href: "/support",
            },
            {
              label: "Dúvidas frequentes",
              href: "/faq",
            },
          ],
        },
        {
          title: "Redes sociais",
          links: [
            {
              label: "Facebook",
              href: "/facebook",
            },
            {
              label: "Instagram",
              href: "/instagram",
            },
            {
              label: "Twitter",
              href: "/twitter",
            },
          ],
        },
      ],
    },
  },
};
