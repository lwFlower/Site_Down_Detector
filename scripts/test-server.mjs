import { createServer } from "node:http";
import { createInterface } from "node:readline";

let status = 200;
const server = createServer((request, response) => {
  response.statusCode = request.url === "/health" ? status : 404;
  response.end(`HTTP ${response.statusCode}`);
});

server.on("error", (error) => {
  console.error("Не удалось запустить тестовый сервер.", error.message);
  process.exitCode = 1;
  terminal.close();
});
server.listen(3333, "127.0.0.1", () => {
  console.log("Тестовый URL http://127.0.0.1:3333/health");
  console.log("Введите 200 или 503 и нажмите Enter. Ctrl+C завершает сервер.");
});

const terminal = createInterface({ input: process.stdin });
terminal.on("line", (line) => {
  const value = line.trim();
  if (value === "200" || value === "503") {
    status = Number(value);
    console.log(`Теперь ответ HTTP ${status}`);
  } else {
    console.log("Введите 200 или 503.");
  }
});
