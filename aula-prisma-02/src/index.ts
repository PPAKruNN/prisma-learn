import Prisma from "./database/database";
// import { builds } from "@prisma/client";

(async () => {
  const result = await Prisma.builds.findMany();
  console.log(result);
})();

// experimentação, ignore.
// type Teste = builds;
// const a: Teste = {
//   id: 12,
//   data: JSON.parse('{"teste": "teste"}'),
// };

// console.log(a);
