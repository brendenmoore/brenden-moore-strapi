module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb+srv://brendenm17:BAMf8rejk3@portfolio-cluster.2lpdn.mongodb.net/brenden-moore-strapi?retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
