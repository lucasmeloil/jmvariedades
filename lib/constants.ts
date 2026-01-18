export const SITE_CONFIG = {
  project: {
    name: "JM Variedades",
    owner: "Mequinho",
    domain: "jmvariedades.com.br",
    description:
      "Presença em todas as praias de Arraial d'Ajuda e Porto Seguro",
  },
  brand: {
    colors: {
      primary: "#1E3A8A",
      secondary: "#38BDF8",
      background: "#FFFFFFCC",
      text: "#0F172A",
      accent: "#2563EB",
    },
  },
  layout: {
    navbar: {
      links: [
        { label: "Início", path: "/" },
        { label: "Produtos", path: "/#produtos" },
        { label: "Contato", path: "/#contato" },
      ],
    },
    mobileMenu: {
      items: [
        { label: "Início", icon: "Home", path: "/" },
        { label: "Produtos", icon: "ShoppingCart", path: "/#produtos" },
        { label: "Contato", icon: "Phone", path: "/#contato" },
      ],
    },
    footer: {
      info: "JM Variedades — Presente em todas as praias de Arraial d'Ajuda e Porto Seguro",
      links: ["Política de Privacidade", "Termos de Uso", "Contato"],
      social: ["Instagram", "WhatsApp"],
    },
  },
  sections: {
    hero: {
      headline: "JM Variedades",
      subheadline:
        "Presença em todas as praias de Arraial d'Ajuda e Porto Seguro",
      cta: {
        label: "Fale agora pelo WhatsApp",
        path: "https://wa.me/73998703962",
      },
    },
    highlightProducts: {
      ctaRedirect: "https://wa.me/73998703962",
    },
    contato: {
      channels: [
        {
          type: "whatsapp",
          value: "wa.me/73998703962",
          link: "https://wa.me/73998703962",
        },
        {
          type: "telefone",
          value: "(73) 99870-3962",
          link: "tel:+5573998703962",
        },
        {
          type: "instagram",
          value: "@jmvariedades",
          link: "https://instagram.com/jmvariedades",
        },
      ],
      address: "Arraial d'Ajuda, Porto Seguro, Trancoso e Caraíva",
    },
  },
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1588691653147-9195b0451acc?q=80&w=2070&auto=format&fit=crop", // View reminiscent of Arraial d'Ajuda
    title: "Verão em Arraial d'Ajuda",
    subtitle: "Tudo o que você precisa para curtir a praia",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1598135764024-5fa7bca22405?q=80&w=2070&auto=format&fit=crop",
    title: "Porto Seguro te Espera",
    subtitle: "Acessórios e novidades para suas férias",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1596323608726-1b072c41fd25?q=80&w=2070&auto=format&fit=crop",
    title: "Trancoso e Caraíva",
    subtitle: "Estilo e praticidade em cada detalhe",
  },
];

export const MOCK_PRODUCTS = [
  {
    id: 1,
    nome: "Cabo iPhone/USB Certificado",
    descricao: "Alta durabilidade e carregamento rápido. 1 ano de garantia.",
    preco: "R$ 49,90",
    imagem: "/img/cabo_usb.png",
  },
  {
    id: 2,
    nome: "Power Bank Polares Wireless",
    descricao: "Carregamento por indução e múltiplos cabos integrados. Bateria de longa duração.",
    preco: "R$ 199,90",
    imagem: "/img/power_bank.png",
  },
  {
    id: 3,
    nome: "Copo Térmico Stanley Prata",
    descricao: "Design elegante, mantém sua bebida gelada por horas.",
    preco: "R$ 149,90",
    imagem: "/img/copo_stanley_prata.png",
  },
  {
    id: 4,
    nome: "Copo Térmico Stanley Bronze",
    descricao: "Sofisticação e eficiência térmica para seus momentos de lazer.",
    preco: "R$ 149,90",
    imagem: "/img/copo_stanley_bronze.png",
  },
];

export const CLIENT_FEEDBACK = [
  {
    id: 1,
    name: "Mariana Silva",
    location: "São Paulo, SP",
    message: "Os produtos são excelentes! Comprei o Power Bank e salvou minha viagem em Trancoso. Recomendo demais!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Lima",
    location: "Belo Horizonte, MG",
    message: "Atendimento nota 10. O pessoal da JM Variedades entrega super rápido na praia. O cabo é muito bom.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 3,
    name: "Fernanda Costa",
    location: "Salvador, BA",
    message: "Amei meu copo Stanley! Mantém a cerveja gelada o dia todo. Preço justo e qualidade top.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
];
