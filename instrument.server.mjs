import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://f3dadbae79f9c4fea46daba3e1460b66@o4508072568881152.ingest.de.sentry.io/4509281406812240",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
