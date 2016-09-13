"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.quietParse = quietParse;
exports.minifyJSON = minifyJSON;
function quietParse(str) {
	var o = null;

	try {
		o = JSON.parse(str);
	} catch (e) {}

	return o;
}

function minifyJSON(json) {

	var tokenizer = /"|(\/\*)|(\*\/)|(\/\/)|\n|\r/g,
	    in_string = false,
	    in_multiline_comment = false,
	    in_singleline_comment = false,
	    tmp = void 0,
	    tmp2 = void 0,
	    new_str = [],
	    ns = 0,
	    from = 0,
	    lc = void 0,
	    rc = void 0;

	tokenizer.lastIndex = 0;

	while (tmp = tokenizer.exec(json)) {
		lc = RegExp.leftContext;
		rc = RegExp.rightContext;
		if (!in_multiline_comment && !in_singleline_comment) {
			tmp2 = lc.substring(from);
			if (!in_string) {
				tmp2 = tmp2.replace(/(\n|\r|\s)*/g, "");
			}
			new_str[ns++] = tmp2;
		}
		from = tokenizer.lastIndex;

		if (tmp[0] == "\"" && !in_multiline_comment && !in_singleline_comment) {
			tmp2 = lc.match(/(\\)*$/);
			if (!in_string || !tmp2 || tmp2[0].length % 2 == 0) {
				// start of string with ", or unescaped " character found to end string
				in_string = !in_string;
			}
			from--; // include " character in next catch
			rc = json.substring(from);
		} else if (tmp[0] == "/*" && !in_string && !in_multiline_comment && !in_singleline_comment) {
			in_multiline_comment = true;
		} else if (tmp[0] == "*/" && !in_string && in_multiline_comment && !in_singleline_comment) {
			in_multiline_comment = false;
		} else if (tmp[0] == "//" && !in_string && !in_multiline_comment && !in_singleline_comment) {
			in_singleline_comment = true;
		} else if ((tmp[0] == "\n" || tmp[0] == "\r") && !in_string && !in_multiline_comment && in_singleline_comment) {
			in_singleline_comment = false;
		} else if (!in_multiline_comment && !in_singleline_comment && !/\n|\r|\s/.test(tmp[0])) {
			new_str[ns++] = tmp[0];
		}
	}
	new_str[ns++] = rc;
	return new_str.join("");
}
//# sourceMappingURL=json.js.map