// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;
let widget = new ListWidget()

var EthUrl = "https://api.ethermine.org/miner/0xf8f828aaae9d6341861b6d179b2f3ac184d0acec/dashboard"

async function loadData() {
	let req = new Request(EthUrl)
	req.allowInsecureRequest = true
	let json = await req.loadJSON()
	console.log(json)
	return json
}

let data = await loadData()

function toThousands(num) {
	return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}


var unpaid = toThousands(data.data.currentStatistics['unpaid'])
unpaid = Number(data.data.currentStatistics['unpaid'])/(10**18)
unpaid = (unpaid).toFixed(6)

let flTxt = widget.addText(toThousands(unpaid))
flTxt.textColor = new Color("#90ee90")
flTxt.font = Font.boldSystemFont(20)
flTxt.centerAlignText()


widget.addSpacer(7)

let text03 = widget.addText('Eth')
text03.font = Font.lightSystemFont(14)
text03.textColor = new Color('#999999')
text03.centerAlignText();



Script.setWidget(widget)
Script.complete()
