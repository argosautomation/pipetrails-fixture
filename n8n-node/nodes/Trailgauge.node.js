const ROUTES = {
  getTroughs: { method: 'GET', path: '/troughs' },
  postReadings: { method: 'POST', path: '/readings' },
  postAlerts: { method: 'POST', path: '/alerts' },
};

const BODY_OPS = {
  postReadings: true,
  postAlerts: true,
};

class Trailgauge {
  constructor() {
    this.description = {
      displayName: "Trailgauge",
      name: "trailgauge",
      icon: 'file:trailgauge.svg',
      group: ['transform'],
      version: 1,
      subtitle: '={{$parameter["operation"]}}',
      description: "Read a horse paddock's water trough level over HTTP and get a text when it runs low.",
      defaults: { name: "Trailgauge" },
      inputs: ['main'],
      outputs: ['main'],
      credentials: [
        { name: 'TrailgaugeApi', required: true },
      ],
      properties: [
        {
          displayName: 'Operation',
          name: 'operation',
          type: 'options',
          options: [
        { name: "GET /troughs", value: "getTroughs", description: "GET /troughs", action: "List every trough and its last reading" },
        { name: "POST /readings", value: "postReadings", description: "POST /readings", action: "Record a reading from a sensor" },
        { name: "POST /alerts", value: "postAlerts", description: "POST /alerts", action: "Set the low water threshold for a paddock" },
          ],
          required: true,
          default: 'getTroughs',
        },
        {
          displayName: 'Request Body (JSON)',
          name: 'bodyJson',
          type: 'json',
          displayOptions: { show: { operation: ['postReadings', 'postAlerts'] } },
          default: '{}',
        },
      ],
    };
  }

  async execute() {
    const items = this.getInputData();
    const credentials = await this.getCredentials('TrailgaugeApi');
    const returnData = [];
    for (let i = 0; i < items.length; i++) {
      const operation = this.getNodeParameter('operation', i);
      const route = ROUTES[operation];
      const request = {
        url: credentials.baseUrl.replace(/\/$/, '') + route.path,
        method: route.method,
        headers: { "X-API-Key": "{{credentials.apiKey}}" },
        json: true,
      };
      if (BODY_OPS[operation]) {
        request.body = JSON.parse(this.getNodeParameter('bodyJson', i, '{}'));
      }
      const response = await this.helpers.httpRequest(request);
      returnData.push({ json: response });
    }
    return [returnData];
  }
}

module.exports = { Trailgauge };
