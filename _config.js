var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://petermwenda:E5bykI86Xrrd7ZYk@cluster0.beypzid.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://petermwenda:E5bykI86Xrrd7ZYk@cluster0.beypzid.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://petermwenda:E5bykI86Xrrd7ZYk@cluster0.beypzid.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
