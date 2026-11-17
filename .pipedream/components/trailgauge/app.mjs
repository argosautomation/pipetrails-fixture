export default {
  type: "app",
  app: "trailgauge",
  propDefinitions: {
    apiKey: {
      type: "string",
      label: "API Key",
      secret: true,
    },
    baseUrl: {
      type: "string",
      label: "Base URL",
      default: "https://api.trailgauge.example",
      optional: true,
    },
  },
};
