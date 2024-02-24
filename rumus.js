exports.luasPersegi = (s) => {
  return s * s;
}

exports.kelilingPersegi = (s) => {
  return 4 * s;
}

exports.luasPersegiPanjang = (p, l) => {
  return p * l;
}

exports.kelilingPersegiPanjang = (p, l) => {
  return 2 * (p + l);
}

/* Opsi kedua
module.exports = {
	luasPersegi,
	kelilingPersegi,
	luasPersegiPanjang,
	kelilingPersegiPanjang,
};
*/