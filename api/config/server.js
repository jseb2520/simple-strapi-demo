module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '067e4ec2d2c2fd973f7d2c4b2ae8cc32'),
    },
  },
});
