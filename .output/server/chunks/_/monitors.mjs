import { p as prisma, i as publicTarget, h as createError, j as getDemoUser } from './nitro.mjs';

function listMonitors() {
  return prisma.monitor.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      checks: { orderBy: [{ checkedAt: "desc" }, { id: "desc" }], take: 1 }
    }
  });
}
async function getMonitor(id) {
  const monitor = id ? await prisma.monitor.findUnique({ where: { id } }) : null;
  if (!monitor)
    throw createError({ statusCode: 404, message: "\u041C\u043E\u043D\u0438\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
  return monitor;
}
async function createMonitor(data) {
  try {
    await publicTarget(data.url);
  } catch (error) {
    throw createError({ statusCode: 400, message: error.message });
  }
  const user = await getDemoUser();
  return prisma.monitor.create({ data: { ...data, userId: user.id } });
}
async function setMonitorActive(id, isActive) {
  const monitor = await getMonitor(id);
  return prisma.monitor.update({
    where: { id: monitor.id },
    data: { isActive }
  });
}
async function deleteMonitor(id) {
  const monitor = await getMonitor(id);
  await prisma.monitor.delete({ where: { id: monitor.id } });
  return { ok: true };
}

export { createMonitor as c, deleteMonitor as d, getMonitor as g, listMonitors as l, setMonitorActive as s };
//# sourceMappingURL=monitors.mjs.map
