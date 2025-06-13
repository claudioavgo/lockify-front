import {
  CreditCardIcon,
  InfoIcon,
  HelpCircleIcon,
  HomeIcon,
} from "lucide-react";

export const config = {
  project: {
    name: "Lockify",
    description:
      "Gerencie sua rotina, saúde mental e treinos com praticidade e segurança",
    prices: [
      {
        title: "Plano Básico",
        description: "Ideal para começar sua jornada de bem-estar",
        monthlyPrice: 10,
        yearlyPrice: 100,
        features: [
          "Acompanhamento de hábitos",
          "Monitoramento de humor",
          "Planos de treino básicos",
        ],
      },
      {
        title: "Plano Pro",
        description: "Para quem leva a sério sua saúde e bem-estar",
        monthlyPrice: 20,
        yearlyPrice: 200,
        features: [
          "Planos de treino avançados",
          "Relatórios de progresso",
          "Consultas com especialistas",
        ],
        recommended: true,
      },
      {
        title: "Plano Enterprise",
        description:
          "Para empresas que cuidam do bem-estar de seus colaboradores",
        monthlyPrice: 30,
        yearlyPrice: 300,
        features: [
          "Programas personalizados",
          "Workshops de saúde mental",
          "Acesso a todos os recursos",
        ],
      },
    ],
  },
  public: {
    navigation: {
      navbarLinks: [
        {
          icon: CreditCardIcon,
          label: "Planos",
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
              label: "Planos",
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
          label: "Planos",
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
      title: "Transforme sua vida com Lockify",
      description: "Cuide da mente e do corpo, tudo em um só lugar!",
      image: {
        src: "/hero.png",
        alt: "Imagem de destaque",
        text: "Equilíbrio e saúde ao seu alcance.",
      },
      button: {
        label: "Comece agora!",
        href: "/pricing",
      },
    },
    faq: {
      title: "Perguntas frequentes",
      description: "Dúvidas sobre como melhorar sua rotina?",
      items: [
        {
          question: "Como o Lockify pode ajudar?",
          answer:
            "Organize sua rotina, melhore seu humor e alcance seus objetivos de fitness.",
        },
        {
          question: "Como o Lockify pode ajudar?",
          answer:
            "Organize sua rotina, melhore seu humor e alcance seus objetivos de fitness.",
        },
        {
          question: "Como o Lockify pode ajudar?",
          answer:
            "Organize sua rotina, melhore seu humor e alcance seus objetivos de fitness.",
        },
        {
          question: "Como o Lockify pode ajudar?",
          answer:
            "Organize sua rotina, melhore seu humor e alcance seus objetivos de fitness.",
        },
        {
          question: "Como o Lockify pode ajudar?",
          answer:
            "Organize sua rotina, melhore seu humor e alcance seus objetivos de fitness.",
        },
      ],
    },
    bento: {
      title: "Construa seu agente de bem-estar",
      description:
        "Lockify oferece as ferramentas para você cuidar da sua saúde mental e física.",
      items: [
        {
          title: "Como melhorar sua rotina",
          description: "Dicas práticas para um dia a dia mais saudável",
          href: "/blog/como-melhorar-sua-rotina",
          image: "/ocean.png",
        },
        {
          title: "Como melhorar sua rotina",
          description: "Dicas práticas para um dia a dia mais saudável",
          href: "/blog/como-melhorar-sua-rotina",
          image: "/ocean.png",
        },
        {
          title: "Como melhorar sua rotina",
          description: "Dicas práticas para um dia a dia mais saudável",
          href: "/blog/como-melhorar-sua-rotina",
          image: "/ocean.png",
        },
        {
          title: "Como melhorar sua rotina",
          description: "Dicas práticas para um dia a dia mais saudável",
          href: "/blog/como-melhorar-sua-rotina",
          image: "/ocean.png",
        },
      ],
    },
    cta: {
      title: "Inicie sua jornada de bem-estar",
      description: "Transforme sua vida com hábitos saudáveis",
      button: {
        label: "Comece agora",
        href: "/pricing",
      },
    },
    blog: {
      title: "Novidades e dicas",
      description:
        "Fique por dentro das últimas tendências de saúde e bem-estar",
    },
    pricing: {
      title: "Planos",
      description: "Escolha o plano que melhor se adapta a você",
    },
    hiw: {
      title: "Como o Lockify funciona?",
      description: "Descubra como o Lockify pode transformar sua rotina",
      items: [
        {
          title: "Configure e alcance suas metas",
          description:
            "Defina objetivos e acompanhe seu progresso diariamente.",
          image: "/bg.jpg",
        },
        {
          title: "Suporte para sua saúde mental",
          description: "Acompanhe seu humor e receba dicas personalizadas.",
          image: "/hero.png",
        },
        {
          title: "Aprimore continuamente",
          description: "Melhore sua rotina com feedbacks e ajustes constantes.",
          image: "/ocean.png",
        },
      ],
    },
    login: {
      title: "Bem-vindo de volta!",
      description: "Acesse sua conta e continue sua jornada de bem-estar",
    },
    register: {
      title: "Crie sua conta",
      description: "Junte-se a nós e transforme sua vida",
    },
  },
  protected: {
    dashboard: {
      forms: {
        feedback: {
          title: "Como foi seu dia?",
          description: "Avalie seu dia e veja como melhorar amanhã.",
        },
      },
    },
  },
};
