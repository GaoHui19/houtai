import CryptoJS from 'crypto-js'

// DES加密
export const encryptByDES = (message: string, key: string) => {
	const keyHex = CryptoJS.enc.Utf8.parse(key)
	const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	})
	return encrypted.toString()
}

// DES解密
export const decryptByDES = (message: string, key: string) => {
	var keyHex = CryptoJS.enc.Utf8.parse(key)
	var decrypted = CryptoJS.DES.decrypt(message, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	})
	return decrypted.toString(CryptoJS.enc.Utf8)
}

// AES加密
// 使用AES秘钥必须为：8/16/32位
export const encryptByAES = (message: string, key: string) => {
	var keyHex = CryptoJS.enc.Utf8.parse(key)
	var encrypted = CryptoJS.AES.encrypt(message, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	})
	return encrypted.toString()
}

// AES解密
export const decryptByAES = (message: string, key: string) => {
	var keyHex = CryptoJS.enc.Utf8.parse(key)
	var decrypted = CryptoJS.AES.decrypt(message, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	})
	return decrypted.toString(CryptoJS.enc.Utf8)
}
