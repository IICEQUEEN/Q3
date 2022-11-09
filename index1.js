function mooncakeSays(message) {
  let mooncake = '(o.o.)';
  consol.log("true");
  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
