Package.describe({
  summary: "In a nutshell basic theme",
  version: "0.1.0",
  name: "in-a-nutshell-theme"
});

Package.onUse(function (api) {
  api.use(['templating',
  'telescope-base',
  'fourseven:scss',
  'telescope-theme-hubble'], ['client']);

  api.addFiles(['lib/client/stylesheets/screen.scss'], ['client']);
});
