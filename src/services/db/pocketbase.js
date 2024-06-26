import PocketBase from "pocketbase";

const url = import.meta.env.VITE_PB_URL;
const pb = new PocketBase(url);
pb.autoCancellation(false);

export default pb;
