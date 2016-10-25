
export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const analytics = {
  google: {
    trackingId: 'UA-52146113-1'
  }
};
