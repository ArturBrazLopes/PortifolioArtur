import { createServer } from "vite";

(async () => {
  const port = Number(process.env.PORT) || 5173;

  const vite = await createServer({
    server: {
      port,
      host: "0.0.0.0",
      strictPort: true,
      allowedHosts: true,
      hmr: {
        clientPort: 443,
      },
    },
    clearScreen: false,
  });

  await vite.listen();
  console.log(`Frontend dev server running on http://0.0.0.0:${port}`);
})();
