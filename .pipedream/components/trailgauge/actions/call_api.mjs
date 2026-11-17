import app from "../app.mjs";

export default {
  key: "trailgauge-call-api",
  name: "Call Trailgauge API",
  description: "Executes an API request against Trailgauge",
  version: "0.0.1",
  type: "action",
  props: {
    app,
    endpoint: {
      type: "string",
      label: "Endpoint Path",
      default: "/healthz",
    },
  },
  async run({ $ }) {
    const baseUrl = this.app.$auth.baseUrl || "https://api.trailgauge.example";
    const res = await $.send.http({
      url: baseUrl + this.endpoint,
      headers: {
        Authorization: "Bearer " + this.app.$auth.apiKey,
      },
    });
    return res;
  },
};
