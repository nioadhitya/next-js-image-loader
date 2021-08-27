export function loaderImage({
  url,
  src,
  width,
  key,
  salt
}) {
  const urlSafeBase64 = string => {
    return Buffer.from(string).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  };

  const hexDecode = hex => Buffer.from(hex, 'hex');

  const sign = (salt, target, secret) => {
    const hmac = createHmac('sha256', hexDecode(secret));
    hmac.update(hexDecode(salt));
    hmac.update(target);
    return urlSafeBase64(hmac.digest());
  };

  const resizing_type = 'fit';
  const gravity = 'no';
  const enlarge = 1;
  const encoded_url = urlSafeBase64(src);
  const path = `/${resizing_type}/${parseInt(width)}/0/${gravity}/${enlarge}/${encoded_url}`;
  const signature = sign(salt, path, key);
  return `${url}/${signature}${path}`;
}