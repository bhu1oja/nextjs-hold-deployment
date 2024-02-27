if (process.env.VERCEL_ENV === 'preview') {
    process.exit(1);
  } else if (process.env.VERCEL_ENV === 'production' && process.env.MY_ENV_VARIABLERR) {
    process.exit(1);
  } else {
    process.exit(0);
  }