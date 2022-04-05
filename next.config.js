/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placekitten.com"],
  },
};

// per: https://stackoverflow.com/questions/65058598/nextjs-cors-issue
// and: https://vercel.com/support/articles/how-to-enable-cors#enabling-cors-using-vercel.json

// const headers = async () => {
//   return [
//     {
//       // matching all API routes
//       source: "/api/:path*",
//       destination: "https://codelon-5-server.herokuapp.com/api/v1/planets",
//       headers: [
//         { key: "Access-Control-Allow-Credentials", value: "true" },
//         { key: "Access-Control-Allow-Origin", value: "*" },
//         {
//           key: "Access-Control-Allow-Methods",
//           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
//         },
//         {
//           key: "Access-Control-Allow-Headers",
//           value:
//             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
//         },
//       ],
//     },
//   ];
// };

module.exports = { nextConfig };
