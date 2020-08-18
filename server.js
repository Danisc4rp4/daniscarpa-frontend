const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
const prometheus = require('express-prom-bundle')
const createProxyMiddleware = require('http-proxy-middleware');

// This will create the /metrics endpoint for you and expose Node default
// metrics.
const metricsMiddleware = prometheus({
  includeMethod: true,
  includePath: true,
  promClient: { collectDefaultMetrics: {} }
})
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(metricsMiddleware);

app.use('', createProxyMiddleware({ target: process.env.API_URL || 'http://localhost:5000', changeOrigin: true }));
app.listen(port);