import { TOKEN } from "./constant";

const fetchOption = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
};
export default fetchOption;
