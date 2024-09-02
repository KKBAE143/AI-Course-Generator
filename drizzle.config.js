
import("drizzle-kit").Config;

export default {
  schema: "./configs/Schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://AI-Course-Generator_owner:s3lav4niKZoS@ep-soft-bird-a5hidlrd.us-east-2.aws.neon.tech/AI-Course-Generator?sslmode=require,"
  },
};
