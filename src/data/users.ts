function generateRandomId() {
  return Math.random().toString(36).substring(2, 24);
}

function generateRandomName() {
  const firstNames = [
    "Lucas",
    "Mariana",
    "Carlos",
    "Isabela",
    "Fernando",
    "Camila",
    "Pedro",
    "Juliana",
    "Rafael",
    "Larissa"
  ];
  const lastNames = [
    "Silva",
    "Santos",
    "Oliveira",
    "Pereira",
    "Ferreira",
    "Rodrigues",
    "Almeida",
    "Costa",
    "Gomes",
    "Martins"
  ];
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

function generateRandomEnterprise() {
  const enterprises = [
    "Tech Solutions",
    "Innovate Labs",
    "Data Systems",
    "Web Services",
    "Digital Creations",
    "Cloud Technologies",
    "Info Innovators",
    "Eco Solutions",
    "Smart Solutions",
    "Cyber Security"
  ];
  return enterprises[Math.floor(Math.random() * enterprises.length)];
}

function generateRandomPosition() {
  const positions = [
    "Software Developer",
    "Marketing Manager",
    "Sales Representative",
    "IT Consultant",
    "Graphic Designer",
    "Professor",
    "Engineer",
    "Analyst"
  ];
  return positions[Math.floor(Math.random() * positions.length)];
}

function generateRandomCity() {
  const cities = [
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Recife",
    "Porto Alegre",
    "Brasília",
    "Salvador",
    "Curitiba",
    "Fortaleza",
    "Manaus"
  ];
  return cities[Math.floor(Math.random() * cities.length)];
}

const users = [
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  },
  {
    id: generateRandomId(),
    name: generateRandomName(),
    enterprise: generateRandomEnterprise(),
    position: generateRandomPosition(),
    city: generateRandomCity()
  }
];

export default users;
