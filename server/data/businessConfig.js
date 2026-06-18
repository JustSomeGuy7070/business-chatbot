const businessConfig = {
  businessName: "BrightBooks Accounting",
  botName: "Bookkeeping Assistant",
  tone: "friendly, professional, and clear",

  services: [
    "Tax return assistance",
    "Company registration",
    "Monthly bookkeeping",
    "Payroll support",
    "Annual financial statements",
    "SARS compliance support",
  ],

  contact: {
    phone: "041 123 4567",
    email: "info@brightbooks.co.za",
    location: "Gqeberha, South Africa",
    hours: "Monday to Friday, 08:00 to 17:00",
  },

  faqs: [
    {
      keywords: ["tax", "tax return", "sars", "documents"],
      answer:
        "You usually need your IRP5, medical aid tax certificate, retirement annuity certificate, proof of expenses, and any income-related documents.",
    },
    {
      keywords: ["company", "registration", "register business"],
      answer:
        "Yes, we assist with company registration and can guide you through the required documents and next steps.",
    },
    {
      keywords: ["book", "appointment", "consultation"],
      answer:
        "You can book a consultation by calling 041 123 4567 or emailing info@brightbooks.co.za.",
    },
    {
      keywords: ["bookkeeping", "monthly bookkeeping"],
      answer:
        "Yes, we offer monthly bookkeeping services for small businesses, freelancers, and registered companies.",
    },
  ],
};

export default businessConfig;
