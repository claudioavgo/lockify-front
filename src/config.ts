import {
  CreditCardIcon,
  InfoIcon,
  HelpCircleIcon,
  HomeIcon,
} from "lucide-react";

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
      drawerLinks: [
        {
          icon: HomeIcon,
          label: "Início",
          href: "/",
        },
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
    hero: {
      title: "Love what you do and make money too",
      description:
        "Join all types of creators getting donations, memberships and sales from their fans!",
    },
    faq: [
      {
        question: "Como funciona o sistema?",
        answer:
          "O sistema funciona de forma simples e intuitiva, você pode criar campanhas, gerenciar campanhas e visualizar campanhas.",
      },
      {
        question: "Como funciona o sistema?",
        answer:
          "O sistema funciona de forma simples e intuitiva, você pode criar campanhas, gerenciar campanhas e visualizar campanhas.",
      },
      {
        question: "Como funciona o sistema?",
        answer:
          "O sistema funciona de forma simples e intuitiva, você pode criar campanhas, gerenciar campanhas e visualizar campanhas.",
      },
    ],
    bento: {
      title: "Build the perfect customer-facing AI agent",
      description:
        "Chatbase gives you all the tools you need to train your perfect AI agent and connect it to your systems.",
      items: [
        {
          title: "Como criar uma campanha",
          description:
            "Aprenda a criar uma campanha de forma simples e intuitiva",
          href: "/blog/como-criar-uma-campanha",
          image: "/image.png",
        },
        {
          title: "Como criar uma campanha",
          description:
            "Aprenda a criar uma campanha de forma simples e intuitiva",
          href: "/blog/como-criar-uma-campanha",
          image: "/image.png",
        },
        {
          title: "Como criar uma campanha",
          description:
            "Aprenda a criar uma campanha de forma simples e intuitiva",
          href: "/blog/como-criar-uma-campanha",
          image: "/image.png",
        },
        {
          title: "Como criar uma campanha",
          description:
            "Aprenda a criar uma campanha de forma simples e intuitiva",
          href: "/blog/como-criar-uma-campanha",
          image: "/image.png",
        },
      ],
    },
    cta: {
      title: "Crie sua campanha agora",
      description: "Crie sua campanha de forma simples e intuitiva",
      button: {
        label: "Criar campanha",
        href: "/pricing",
      },
    },
    blog: {
      title: "Últimas atualizações",
      description: "Veja as últimas notícias e dicas do nossa comunidade",
    },
  },
};
