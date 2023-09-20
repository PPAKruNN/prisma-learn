import prisma from "../src/database";

prisma.$connect();

prisma.customer
  .create({
    data: {
      document: "133.245.497-68",
      firstName: "Geraldo Luiz",
      lastName: "Datena",
    },
  })
  .then(() => {
    console.log("User created");
    prisma.$disconnect();
  });
