function mooncakeSays(message) {
  let mooncake = '(o.o.Q,w)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
