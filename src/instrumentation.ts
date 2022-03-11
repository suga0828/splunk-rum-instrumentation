import SplunkOtelWeb from '@splunk/otel-web';

SplunkOtelWeb.init({
  beaconUrl: 'https://rum-ingest.<REALM>.signalfx.com/v1/rum',
  rumAuth: '<RUM access token>',
  app: '<application-name>',
});
