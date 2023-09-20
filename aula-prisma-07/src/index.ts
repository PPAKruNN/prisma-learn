import prisma from "./database";

(async () => {
  const ex01 = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true },
    orderBy: { class: "desc" },
  });

  console.log(ex01);

  const ex02 = await prisma.student.groupBy({
    by: ["class"],
    where: { jobId: null },
    _count: { _all: true },
    orderBy: { class: "desc" },
  });
  console.log(ex02);
})();
