class TrailgaugeApi {
  constructor() {
    this.name = 'TrailgaugeApi';
    this.displayName = "Trailgauge API";
    this.documentationUrl = "https://example.com";
    this.properties = [
      { displayName: 'API Base URL', name: 'baseUrl', type: 'string', default: "https://api.trailgauge.example", required: true },
      { displayName: 'API Key', name: 'apiKey', type: 'string', typeOptions: { password: true }, required: true },
    ];
  }
}

module.exports = { TrailgaugeApi };
