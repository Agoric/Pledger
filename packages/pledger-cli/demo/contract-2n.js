export default harden({
  start(_terms, inviteMaker) {
    const result = makePromise();
    const seat = harden({
      provide(n) {
        result.res(2 * n);
      },
      result() {
        return result.p;
      },
    });
    return harden({
      seat: inviteMaker.make('multiplicand', seat),
    });
  },
});
