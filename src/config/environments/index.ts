import development  from "./development.json";
import { IEnvironment } from "./types";

const ENV = {
    development,
};

const environmentTarget: IEnvironment = ENV[process.env.EXPRESS_APP_STAGE] || development;

export default environmentTarget