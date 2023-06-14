require("dotenv").config({ path: `./env.${process.env.NODE_ENV}` });

const nextConfigDev = {};

const nextConfigProd = {
  output: "export",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === "production" ? nextConfigProd : nextConfigDev),
};

module.exports = nextConfig;
