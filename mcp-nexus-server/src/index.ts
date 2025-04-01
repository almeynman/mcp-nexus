import { mcpServer } from "./mcp-server";
import { createSSEServer } from "./sse-server";

const port = process.env.PORT ?? "6398";

const sseServer = createSSEServer(mcpServer);

sseServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
