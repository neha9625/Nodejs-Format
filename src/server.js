import App from './app.js'
const PORT = process.env.PORT || 3001;

App.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
