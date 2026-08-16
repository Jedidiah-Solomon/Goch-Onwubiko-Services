export const siteConfig = {
  name: "Onwubiko Goch",
  shortName: "Goch Onwubiko",
  url: "https://www.gochonwubiko.name.ng",
  locale: "en_NG",
  title: "Onwubiko Goch | Writing, Virtual Assistance & Social Media",
  description:
    "Onwubiko Goch is a digital services professional in Abuja, Nigeria. Writing, virtual assistance, and social media management for academia, entrepreneurship, and business.",
  keywords: [
    "Onwubiko Goch",
    "Goch Onwubiko",
    "writer in Abuja",
    "ghostwriter Nigeria",
    "virtual assistant Nigeria",
    "social media manager Abuja",
    "copywriting",
    "research writing",
    "content writing",
    "academic writing",
  ],
  email: "professorgoch@gmail.com",
  phone: "+2348161786550",
  phoneDisplay: "+234 816 178 6550",
  location: "Abuja, Nigeria",
  ogImage: "/goch-1.jpeg",
  twitterHandle: "@OnwubikoGoch",
  sameAs: [
    "https://www.facebook.com/goch.onwubiko",
    "https://www.instagram.com/onwubiko.goch",
    "https://x.com/OnwubikoGoch",
  ],
};

export const faqs = [
  {
    question: "Who is Onwubiko Goch?",
    answer:
      "Onwubiko Goch is a digital services professional based in Abuja, Nigeria. Grounded in History and International Studies, he combines academic rigor, professional certifications, and creative expertise. He is a qualified historian, professional writer, trained virtual assistant, and skilled social media manager.",
  },
  {
    question: "What services does Goch Onwubiko offer?",
    answer:
      "He provides writing, virtual assistance, and social media management. These services support scholars, researchers, brands, entrepreneurs, professionals, and organizations worldwide.",
  },
  {
    question: "What writing services are available?",
    answer:
      "Onwubiko Goch offers copywriting, ghostwriting, content writing, and research writing for blogs, brands, scholars, and researchers across the globe.",
  },
  {
    question: "Does Onwubiko Goch provide virtual assistance?",
    answer:
      "Yes. Virtual assistance includes administrative support, email and calendar management, data entry and management, and research and online assistance for businesses, professionals, entrepreneurs, and organizations.",
  },
  {
    question: "What does his social media management include?",
    answer:
      "Social media management covers content strategy and planning, post creation and scheduling, community engagement, and analytics and reporting to strengthen online presence.",
  },
  {
    question: "What is Goch Onwubiko's academic background?",
    answer:
      "He is grounded in History and International Studies. That academic foundation informs his writing, research, and digital work for both scholarly and business clients.",
  },
  {
    question: "Where is Onwubiko Goch based, and who can hire him?",
    answer:
      "He is based in Abuja, Nigeria, and works with clients globally, including academia, entrepreneurship, and business.",
  },
  {
    question: "How can I contact Goch Onwubiko?",
    answer:
      "Email professorgoch@gmail.com, call or WhatsApp +234 816 178 6550, or use the contact form on gochonwubiko.name.ng.",
  },
];

export function getJsonLd() {
  const { name, url, description, email, phone, sameAs, ogImage } =
    siteConfig;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name,
      alternateName: siteConfig.shortName,
      url,
      description,
      inLanguage: "en",
      publisher: {
        "@type": "Person",
        name,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name,
      alternateName: siteConfig.shortName,
      url,
      image: `${url}${ogImage}`,
      email,
      telephone: phone,
      jobTitle: "Writer, Virtual Assistant, and Social Media Manager",
      description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja",
        addressCountry: "NG",
      },
      sameAs,
      knowsAbout: [
        "Writing",
        "Copywriting",
        "Ghostwriting",
        "Research writing",
        "Virtual assistance",
        "Social media management",
        "History and International Studies",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${name} Services`,
      url,
      image: `${url}${ogImage}`,
      email,
      telephone: phone,
      description,
      areaServed: ["NG", "Worldwide"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja",
        addressCountry: "NG",
      },
      founder: {
        "@type": "Person",
        name,
      },
      sameAs,
      serviceType: [
        "Writing",
        "Virtual Assistance",
        "Social Media Management",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
