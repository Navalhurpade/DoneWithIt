import Bugsnag from "@bugsnag/expo";

const start = () => Bugsnag.start();

const log = (error, ...rest) => Bugsnag.notify(error, ...rest);

export default { log, start };
