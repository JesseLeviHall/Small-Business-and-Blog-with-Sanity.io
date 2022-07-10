const query = encodeURIComponent('*[ _type == "post" ]');

export const YOURL = process.env.SANITYURL + `${query}`;

export const PROID = process.env.PROJECTID;
export const ID = toString(PROID);

export const DATASET = process.env.DATASET_NAME;

export const SLUGURL = process.env.SANITYURL;
