import { encourage } from './encourage';

export default harden({
  start(_terms, _inviteMaker) {
    return harden({
      encourageMe(name) {
        // log(`=> encouragementBot.encourageMe got the name: ${name}`);
        return encourage(name);
      },
    });
  },
});
