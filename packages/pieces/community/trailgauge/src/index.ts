import { createPiece, PieceAuth } from "@activepieces/pieces-framework";

export const piece = createPiece({
  displayName: "Trailgauge",
  auth: PieceAuth.SecretText({
    displayName: "API Key",
    required: true,
  }),
  minimumSupportedRelease: "0.20.0",
  logoUrl: "https://via.placeholder.com/128",
  authors: ["PipeTrails"],
  actions: [],
  triggers: [],
});
