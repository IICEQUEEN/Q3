function mooncakeSays(message) {
  let mooncake = '(o.o.Q.W)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
