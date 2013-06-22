
"use strict";

window.onclick = function(e) {
	if ((e = e.target).tagName === "a") {
		e = e.textContent;
		document.getElementById("output").value =
			e + ": " + function(s) {
				switch (e) {
					case "SHA-1": return CryptoJS.SHA1(s);
					case "SHA-2-224": return CryptoJS.SHA224(s);
					case "SHA-2-256": return CryptoJS.SHA256(s);
					case "SHA-2-384": return CryptoJS.SHA384(s);
					case "SHA-2-512": return CryptoJS.SHA512(s);
				}
				if (e.slice(0,6) === "SHA-3-")
					return CryptoJS.SHA3(s, {
						outputLength: parseInt(e.slice(6))
					});
				return "ERROR: unrecognized hash algorithm";
			}(document.getElementById("input").value).toString(
				document.getElementById("base64").checked
					? CryptoJS.enc.Base64 : CryptoJS.enc.Hex);
	}
};
