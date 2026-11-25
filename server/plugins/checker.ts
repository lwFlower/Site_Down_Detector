import { checkDueMonitors } from "../monitoring/scheduler";
import { getDemoUser } from "../database/client";
export default defineNitroPlugin(async (nitro) => {
  await getDemoUser();
  const tick = () =>
    checkDueMonitors().catch((error) => console.error("[checker]", error));
  const timer = setInterval(tick, 1000);
  timer.unref();
  void tick();
  nitro.hooks.hook("close", () => {
    clearInterval(timer);
  });
});
