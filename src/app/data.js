export const defaultSteps = [
  {
    id: 1,
    stepTitle: "Contato",
    status: "active",
    fields: [
      {
        name: "companyName",
        value: "",
        type: "text",
        label: "Nome da empresa",
        placeholder: "Qual é o nome da empresa",
      },
      {
        name: "companySize",
        value: "",
        type: "text",
        label: "Número de funcionários",
        placeholder: "Digite o número de colaboradores",
      },
      {
        name: "aboutCompany",
        value: "",
        type: "textarea",
        label: "Sobre seu negócio",
        placeholder: "Fale um pouco sobre seus produtos ou serviços",
      },
    ],
  },
  {
    id: 2,
    stepTitle: "Empresa",
    status: "todo",
    fields: [],
  },
  {
    id: 3,
    stepTitle: "Projeto",
    status: "todo",
    fields: [],
  },
];
