import app from './app';

var port = process.env.PORT || 3333;

app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:%s', port);
});
