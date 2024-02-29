if (process.env.VERCEL_ENV === 'preview') {
    process.exit(1);
  } else if (process.env.VERCEL_ENV === 'production' && process.env.TRIGGER_PROD_BUILD == 'true') {
    process.exit(1);
  } else {
    process.exit(0);
  }