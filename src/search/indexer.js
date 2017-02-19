/**
 this module creates an index out of the data-objects
 */

// let testParts = [
//     {
//         name: "LoRa OSHPark Feather Parts",
//         description: [
//             {
//                 type: "text",
//                 value: "LoRa FeatherWing Development Breakout"
//             },
//             {
//                 type: "link",
//                 target: "http://syncchannel.blogspot.de/2016/02/lora-featherwing-development-breakout.html",
//                 value: "The Sync Channel Blog"
//             }
//         ],
//         partials: [
//             {
//                 partial: "Ceramic Capacitor",
//                 name: "Ceramic Capacitor 0603 0.1uF 16V",
//                 sections: [
//                     {
//                         section: "Documentation",
//                         entries: [
//                             {
//                                 type: "link",
//                                 target: "http://www.mouser.de/ProductDetail/Vishay/VJ0603Y104KXJAP/?qs=%2fha2pyFadujAlg9bQeFPZ7BD0yBCKWDfL4yyvw%252bmPvMNj5dHwUgufw%3d%3d",
//                                 value: "Mouser Product-Page"
//                             },
//                             {
//                                 type: "link",
//                                 target: "http://www.mouser.com/ds/2/427/vjcommercialseries-222796.pdf",
//                                 value: "Datenblatt (PDF)"
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 partial: "SMD-Vielschichtkondensator G0603 - 1,0uF 16V",
//                 name: "Reichelt: X7R-G0603 1,0/16",
//                 sections: [
//                     {
//                         section: "Documentation",
//                         entries: [
//                             {
//                                 type: "link",
//                                 target: "https://www.reichelt.de/index.html?ACTION=3;ARTICLE=89719;SEARCH=X7R-G0603%201,0/16",
//                                 value: "Reichelt Product-Page"
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 partial: "Tantalum Kondnsator 47uF 10V",
//                 name: "Mouser: 647-F951A476MTAAQ2 ",
//                 sections: [
//                     {
//                         section: "Documentation",
//                         entries: [
//                             {
//                                 type: "link",
//                                 target: "http://www.mouser.de/ProductDetail/AVX/F951A476MTAAQ2/?qs=%2fha2pyFaduh6UP5i8fH4Y5d3NVkee0fi6wxL7elzuA5dEMNPmlQJK50IVN8eTNot",
//                                 value: "Mouser Product-Page"
//                             },
//                             {
//                                 type: "link",
//                                 target: "http://www.mouser.com/ds/2/40/f95-776234.pdf",
//                                 value: "AVX Datasheet"
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 partial: "LoRa Tranceiver",
//                 name: "HopeRF RFM96W 433Mhz - LoRaTM Ultra Long Range Wireless Transceiver (functionally comparable to SX1276)",
//                 sections: [
//                     {
//                         section: "Documentation",
//                         entries: [
//                             {
//                                 type: "link",
//                                 target: "http://cgi.ebay.de/ws/eBayISAPI.dll?ViewItem&item=171363005217#ht_585wt_1165",
//                                 value: "Ebay/anarduino - Product Page"
//                             },
//                             {
//                                 type: "link",
//                                 target: "http://www.hoperf.com/rf_transceiver/lora/RFM95W.html",
//                                 value: "HopeRF - Product Page"
//                             },
//                             {
//                                 type: "link",
//                                 target: "http://www.anarduino.com/docs/RFM95_96_97_98W.pdf",
//                                 value: "Datasheet (PDF)"
//                             }
//                         ]
//                     }
//                 ]
//             }
//
//         ]
//
//     },
//     {
//         name: "Dual general-purpose operational amplifier NE/SA/SE4558",
//         description: [
//             {
//                 type: "text",
//                 value: "Reichelt: NE 4558 D SMD / Op-Amp, SO-8"
//             },
//             {
//                 type: "link",
//                 target: "https://www.reichelt.de/MOSFET-Transistoren-IXYS/TSM-2313-SMD/3/index.html?ACTION=3;ARTICLE=18790;SEARCH=NE%204558",
//                 value: "Reichelt Product Page"
//             }
//             ,
//             {
//                 type: "link",
//                 target: "http://cdn-reichelt.de/documents/datenblatt/A200/NE4558%23PHI.pdf",
//                 value: "Philips Datasheet (PDF)"
//             }
//         ]
//     },
//     {
//         name: "Dual general-purpose operational amplifier MC1458",
//         description: [
//             {
//                 type: "text",
//                 value: "Reichelt: MC 1458 D SMD / Op-Amp, SO-8"
//             },
//             {
//                 type: "link",
//                 target: "https://www.reichelt.de/MOSFET-Transistoren-IXYS/TSM-2313-SMD/3/index.html?ACTION=3;ARTICLE=18774;SEARCH=MC%201458",
//                 value: "Reichelt Product Page"
//             },
//             {
//                 type: "link",
//                 target: "http://cdn-reichelt.de/documents/datenblatt/A200/MC1458_MC1558%23TEX.pdf",
//                 value: "TI Datasheet (PDF)"
//             },
//             {
//                 type: "link",
//                 target: "http://cdn-reichelt.de/documents/datenblatt/A200/MC1458_MC1558%23PHI.pdf",
//                 value: "Philips Datasheet (PDF)"
//             }
//         ]
//     },
//     {
//         name: "Adafruit 16-Channel 12-bit PWM/Servo Driver - I2C interface - PCA9685",
//         description: [
//             {
//                 type: "text",
//                 value: ""
//             },
//
//         ],
//         sections: [
//             {
//                 section: "Documentation",
//                 entries: [
//                     {
//                         type: "link",
//                         target: "https://www.adafruit.com/product/815",
//                         value: "Product-Page"
//                     },
//                     {
//                         type: "link",
//                         target: "https://cdn-shop.adafruit.com/datasheets/PCA9685.pdf",
//                         value: "DataSheet (PDF)"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: "Adafruit JTAG (2x10 2.54mm) to SWD (2x5 1.27mm) Cable Adapter Board",
//         description: [
//             {
//                 type: "text",
//                 value: ""
//             }
//         ],
//         sections: [
//             {
//                 section: "Documentation",
//                 entries: [
//                     {
//                         type: "link",
//                         target: "https://www.adafruit.com/product/2094",
//                         value: "Product-Page"
//                     }
//                 ]
//             },
//         ]
//     },
//     {rfid: '65416597'}
// ];
let fs = require("fs");
let partsIndex = [];
const DATA_DIR = require("path").join(__dirname, "../../data");
const INDEX_FILE = DATA_DIR + "/partsIndex.json";

function tokenizeText(text) {
    let result = text
        .split(" ")
        .map(function(token) {
            return token.replace(/\W/gi, "")
        })
        .filter(function filterSmall(token) {
            return token.length > 1;
        });

    return result;
}

function extractText(elem) {
    let result = [];

    const TEXT_FIELDS = {
        name:1, value:1, section: 1, partial:1
    };

    for (let field in TEXT_FIELDS) {
        if (elem[field]) {
            result = result.concat(tokenizeText(elem[field]));
        }
    }

    return result;
}

function tokenizeSections(sections, idx) {
    let result = [];

    sections.map(section => {
        extractText(section).map(word => {
            result.push(word);
        });

        if (section.entries) {
            section.entries.map(entry => {
                extractText(entry).map(word => {
                    result.push(word);
                });
            });
        }
    });

    return idx.concat(result);
}

function tokenizePart(part) {
    let result = [];

    extractText(part).map(word => {
        result.push(word);
    });

    if (part.description) {
        part.description.map(desc => {
            return extractText(desc).map(word => {
                result.push(word);
            });
        })
    }


    if (part.partials) {
        part.partials.map(partial => {
            extractText(partial).map(word => {
                result.push(word);
            });

            if (partial.sections) {
                result = tokenizeSections(partial.sections, result);
            }
        });
    }

    if (part.sections) {
        result = tokenizeSections(part.sections, result);
    }

    return result;
}

function tokenizeParts(parts, rfid) {
    let result = {
            rfid: rfid,
            token: []
        },
        idx = {
            The: 1,
            and: 1,
            or: 1
        };

    parts.map(part => {
        if (part.rfid) {
            result.rfid = part.rfid;
        } else {
            result.token = result.token.concat(tokenizePart(part));
        }
    });

    result.token = result.token.filter(word => {
        if (word in idx) {
            return false;
        } else {
            idx[word] = 1;
            return true;
        }
    });

    return result;
}

function indexTokenList(tokenList, index) {
    let result = index;
    tokenList.token.map(token => {
        let inIndex = result.find(entry => (entry.key === token));
        if (inIndex) {
            inIndex.rfids.push(tokenList.rfid);
        } else {
            result.push({key: token, rfids: [tokenList.rfid]})
        }
    });
    return result;
}



function Indexer() {}

Indexer.prototype.indexData = function indexData() {
    fs.readdirSync(DATA_DIR).forEach(file => {
        if (file !== "pattern.js") {
            let partsList = require(DATA_DIR + "/" + file);
            let rfid = file.split('.')[0];
            partsIndex = indexTokenList(tokenizeParts(partsList, rfid), partsIndex);
        }
    });

    partsIndex = partsIndex.sort((a, b) => {
        if(a.key < b.key) return -1;
        if(a.key > b.key) return 1;
        return 0;
    });

    fs.writeFileSync(INDEX_FILE, JSON.stringify(partsIndex), 'utf-8');
};

Indexer.prototype.load = function load() {
    partsIndex = require(INDEX_FILE);
};

Indexer.prototype.getPartIndex = function getPartIndex() {
    if (partsIndex.length === 0) {
        this.load();
    }
    return partsIndex;
};

module.exports.Indexer = new Indexer();


