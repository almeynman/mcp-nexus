import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const mcpServer = new McpServer(
  {
    name: "ExampleMCPServer",
    version: "1.0.0",
  },
  {
    capabilities: {},
  },
);

mcpServer.tool("add", { a: z.number(), b: z.number() }, async ({ a, b }) => ({
  content: [{ type: "text", text: String(a + b) }],
}));

mcpServer.resource(
  "document",
  new ResourceTemplate("document://{name}", {
    list: async () => {
      return {
        resources: [
          {
            name: "document-getting-started",
            uri: "document://getting-started",
          },
        ],
      };
    },
  }),
  async (uri, variables) => {
    return {
      contents: [
        {
          uri: uri.href,
          text: "Getting Started",
          mimeType: "text/plain",
        },
      ],
    };
  },
);
