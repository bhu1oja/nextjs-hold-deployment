if (process.env.VERCEL_ENV === 'preview') {
    process.exit(1);
  } else if (process.env.VERCEL_ENV === 'production' && process.env.NEW_VAL) {
    process.exit(1);
  } else {
    process.exit(0);
  }