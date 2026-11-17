# Trailgauge

Read a horse paddock's water trough level over HTTP and get a text when it runs low.

Trailgauge is a small REST service. It takes readings from a float sensor, keeps
the last 30 days, and sends an SMS when a trough drops below a threshold you set
per paddock.

## Why this repository exists

**This is a test fixture for [PipeTrails](https://app.pipetrails.com), not a real
product.** It exists so PipeTrails can be pointed at a repository that is safe to
analyze, recommend, and open pull requests against. Nothing here is published to
npm, PyPI or any registry, and nothing here is maintained.

## API

The service speaks JSON over HTTPS at `https://api.trailgauge.example`.
Authentication is an API key in the `X-API-Key` header.

| Method | Path | What it does |
|---|---|---|
| GET | `/troughs` | List every trough and its last reading |
| GET | `/troughs/{id}` | One trough with its reading history |
| POST | `/readings` | Record a reading from a sensor |
| POST | `/alerts` | Set the low water threshold for a paddock |
| DELETE | `/alerts/{id}` | Stop alerting on a paddock |

## Install

    pip install trailgauge

## Documentation

https://docs.trailgauge.example
