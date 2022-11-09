function mooncakeSays(message) {
  let mooncake = '(o.o.)';
  consol.log(11);
  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
