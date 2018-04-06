/**
 * Created by antonhorl on 11.01.18.
 */

const
    removeTablesAndreasSaal = require('./removeTablesAndreasSaal.js'),
    removeTablesTurm = require('./removeTablesTurm.js'),
    removeTablesPanorama = require('./removeTablesPanorama.js'),
    removeTablesBlauerSalon = require('./removeTablesBlauerSalon.js'),
    removeTablesRoterSalon = require('./removeTablesRoterSalon.js'),
    addTablesPanorama = require('./addTablesPanorama.js'),
    addTablesTurm = require('./addTablesTurm.js'),
    addTablesBlauerSalon = require('./addTablesBlauerSalon.js'),
    addTablesRoterSalon = require('./addTablesRoterSalon.js'),
    addTablesAndreasSaal = require('./addTablesAndreasSaal.js'),
    Promise = require('promise'),
    dateFns = require('date-fns');


module.exports = {
    getTable: function (req, res, db) {

        console.log("tables get called");
        //Get guests from Mongo DB
        db.alpenblickTables.find(function (err, tables) {
            if (err) {
                res.send(err);
            }
            res.json(tables);
        });
    },

    removeTable: function (req, res, db) {

        console.log("removeTable request made to /moveTable");

        let data = JSON.stringify(req.body);
        let splitted = data.split(",");
        let tableNumberBefore = splitted[2];
        let departmentValueBefore = splitted[1];
        let topValueBefore = splitted[3];
        let leftValueBefore = splitted[4];
        let widthValueBefore = splitted[9];
        let heightValueBefore = splitted[10];

        let splitted2 = tableNumberBefore.split(":");
        let splitted3 = departmentValueBefore.split(":");
        let splitted4 = topValueBefore.split(":");
        let splitted5 = leftValueBefore.split(":");
        let splitted6 = widthValueBefore.split(":");
        let splitted7 = heightValueBefore.split(":");

        let tableNumber = splitted2[1].substring(1, splitted2[1].length - 1);
        let departmentValue = splitted3[1].substring(1, splitted3[1].length - 1);
        let topValue = splitted4[1].substring(1, splitted4[1].length - 1);
        let leftValue = splitted5[1].substring(1, splitted5[1].length - 1);
        let width = splitted6[1].substring(1, splitted6[1].length - 1);
        let heightArray = splitted7[1].toString().match(/\d+/);
        let height = heightArray[0];

        console.log('data -> ' + data);
        console.log('tableNumberBefore: ' + tableNumberBefore);
        console.log('departmentValueBefore: ' + departmentValueBefore);
        console.log('height: ' + height);
        console.log('width: ' + width);
        console.log('tableNumber: ' + tableNumber);
        console.log('departmentValue: ' + departmentValue);
        console.log('topValue: ' + topValue);
        console.log('leftValue: ' + leftValue);

        removeTablesPanorama.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        removeTablesBlauerSalon.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        removeTablesRoterSalon.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        removeTablesTurm.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        removeTablesAndreasSaal.removeTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);

        setTimeout(function () {
            db.alpenblickTables.find(
                {
                    "department": departmentValue,
                },
                function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log('response tables ->' + JSON.stringify(tables));
                });
        }, 400);
    },
    addTable: function (req, res, db) {

        console.log("addTable request made to /moveTable");

        let data = JSON.stringify(req.body);
        let splitted = data.split(",");
        let tableNumberBefore = splitted[2];
        let departmentValueBefore = splitted[1];
        let topValueBefore = splitted[3];
        let leftValueBefore = splitted[4];
        let widthValueBefore = splitted[9];
        let heightValueBefore = splitted[10];

        let splitted2 = tableNumberBefore.split(":");
        let splitted3 = departmentValueBefore.split(":");
        let splitted4 = topValueBefore.split(":");
        let splitted5 = leftValueBefore.split(":");
        let splitted6 = widthValueBefore.split(":");
        let splitted7 = heightValueBefore.split(":");

        let tableNumber = splitted2[1].substring(1, splitted2[1].length - 1);
        let departmentValue = splitted3[1].substring(1, splitted3[1].length - 1);
        let topValue = splitted4[1].substring(1, splitted4[1].length - 1);
        let leftValue = splitted5[1].substring(1, splitted5[1].length - 1);
        let width = splitted6[1].substring(1, splitted6[1].length - 1);
        let heightArray = splitted7[1].toString().match(/\d+/);
        let height = heightArray[0];

        console.log('data -> ' + data);
        console.log('tableNumberBefore: ' + tableNumberBefore);
        console.log('departmentValueBefore: ' + departmentValueBefore);
        console.log('height: ' + height);
        console.log('width: ' + width);
        console.log('tableNumber: ' + tableNumber);
        console.log('departmentValue: ' + departmentValue);
        console.log('topValue: ' + topValue);
        console.log('leftValue: ' + leftValue);

        addTablesPanorama.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        addTablesTurm.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        addTablesRoterSalon.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        addTablesBlauerSalon.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);
        addTablesAndreasSaal.addTable(db, tableNumber, departmentValue, topValue, leftValue, height, width);

        setTimeout(function () {
            db.alpenblickTables.find(
                {
                    "department": departmentValue,
                },
                function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log('response tables ->' + JSON.stringify(tables));
                });
        }, 400);
    },
    occupyTable: function (req, res, db) {
        console.log("occupyTable request made to /occupyTable");

        let departmentValueDB = "";
        let departmentValue = "";
        let tableValueArray = [];
        let tableValue = "";
        let data = JSON.stringify(req.body);
        let splitted = data.split("\\");
        let informationElements2 = [];
        let value = "nAnreise";
        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(":"));
        }

        let informationElements2Length = informationElements2.length;

        console.log('splitted' + splitted);
        console.log(informationElements2);
        console.log(informationElements2Length);

        if (informationElements2Length > 1) {

            console.log("Liste");
            console.log(informationElements2[informationElements2Length - 1][0]);

            departmentValue = informationElements2[informationElements2Length - 1][0].substring(1, informationElements2[informationElements2Length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValueArray = informationElements2[informationElements2Length - 1][0].toString().match(/\d+/);
            tableValue = tableValueArray[0];

        } else {
            let umsetzen = JSON.parse(data);

            console.log("Umsetzen in occupyTable function");
            console.log(umsetzen);

            departmentValueDB = umsetzen.targetDepartment;
            tableValue = umsetzen.targetTable;

            console.log(tableValue);
            console.log(departmentValueDB);
        }

        if (departmentValue === "RoterSalon") {
            departmentValueDB = "roter-salon";
        }
        else if (departmentValue === "BlauerSalon") {
            departmentValueDB = "blauer-salon";
        }
        else if (departmentValue === "Panorama") {
            departmentValueDB = "panorama";
        }
        else if (departmentValue === "AndreasSaal") {
            departmentValueDB = "andreas-saal";
        }
        else if (departmentValue === "Turm") {
            departmentValueDB = "turm";
        }

        db.alpenblickTables.update(
            {
                department: departmentValueDB,
                "tables.number": tableValue
            },
            {
                $set: {
                    "tables.$.bgColor": "#b7b7b7",
                    "tables.$.isBesetzt": "true"
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("occupyTable Update successful");
            });

        setTimeout(function () {
            db.alpenblickTables.findOne(
                {
                    "department": departmentValueDB,
                    "tables.number": tableValue
                },
                {
                    "tables.$": 1,
                },
                function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log('occupy Table response:' + JSON.stringify(tables));
                });
        }, 100);
    },
    dispenseTable: function (req, res, db) {
        console.log("dispenseTable request made to /dispenseTable");
        let dispenseTable = req.body;
        let tablesTemp3 = [];
        let departments = ["Sonnberg-Zirbn", "Wintergarten", "Restaurant", "Panorama"];
        if (dispenseTable.constructor === Array) {
            console.log("dispenseTable[h].table.groups.length > dispenseTable[h].group.length");
            new Promise(function (resolve, reject) {
                db.alpenblickTables.find({}, function (err, tables) {
                    if (err) {
                        res.send(err);
                    } else {
                        tablesTemp3.push(tables);
                        //console.log(tables);
                        //tablesTemp3.push(tables);
                        //console.log(tablesTemp3);
                        //return tablesTemp3;
                        setTimeout(() => resolve(), 1000);
                    }
                });
            }).then(function () { // (**)
                let today = dateFns.format(dispenseTable[0].date, 'DD.MM.');
                console.log(today);
                console.log("---------------------");
                console.log(JSON.stringify(tablesTemp3[0]));
                for (let i = tablesTemp3[0].length - 1; i >= 0; i--) {
                    for (let k = tablesTemp3[0][i].tables.length - 1; k >= 0; k--) {
                        if (tablesTemp3[0][i].tables[k].groups) {
                            console.log(tablesTemp3[0][i].tables[k].groups);
                            for (let j = tablesTemp3[0][i].tables[k].groups.length - 1; j >= 0; j--) {
                                console.log("+");
                                //console.log(tablesTemp2[0].tables[i]);
                                if (tablesTemp3[0][i].tables[k].groups[j].abreiseValue === String(today)) {
                                    //console.log(tablesTemp2[0].tables[i].groups[j].abreiseValue);
                                    console.log(tablesTemp3[0][i].tables[k].groups[j].abreiseValue);
                                    tablesTemp3[0][i].tables[k].groups.splice(j, 1);
                                    console.log(tablesTemp3[0][i].tables[k].groups.length);
                                    console.log(tablesTemp3[0][i].tables[k].groups);
                                    if (tablesTemp3[0][i].tables[k].groups.length === 0) {
                                        tablesTemp3[0][i].tables[k].bgColor = "#ffffff";
                                        tablesTemp3[0][i].tables[k].isBesetzt = "false";
                                        //delete tablesTemp3[0][i].tables[k]['groups'];
                                    }
                                }
                            }
                            for (let j = tablesTemp3[0][i].tables[k].groups.length - 1; j >= 0; j--) {
                                //console.log(tablesTemp2[0].tables[i]);
                                console.log("*");
                                if (tablesTemp3[0][i].tables[k].groups.length === 1 && tablesTemp3[0][i].tables[k].groups[j].newTraceText) {
                                    tablesTemp3[0][i].tables[k].groups.splice(j, 1);
                                    tablesTemp3[0][i].tables[k].bgColor = "#ffffff";
                                    tablesTemp3[0][i].tables[k].isBesetzt = "false";
                                }
                            }
                        }
                    }
                }
                console.log("tablesTemp3 after");
                console.log(JSON.stringify(tablesTemp3[0]));

            }).then(function () { // (**)
                db.alpenblickTables.remove({
                }, function (err, tables) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("removed");
                        console.log(tables);
                        db.alpenblickTables.save(tablesTemp3[0][0]);
                        db.alpenblickTables.save(tablesTemp3[0][1]);
                        db.alpenblickTables.save(tablesTemp3[0][2]);
                        db.alpenblickTables.save(tablesTemp3[0][3]);
                        db.alpenblickTables.save(tablesTemp3[0][4]);
                    }
                });
            }).then(function () { // (**)
                setTimeout(function () {
                    console.log("Dispense Table1: ");
                    db.alpenblickTables.find(
                        {}, function (err, tables) {
                            if (err) {
                                res.send(err);
                            }
                            console.log(tables);
                            res.json(tables);
                            //console.log("Dispense Table: " + JSON.stringify(tables));
                        });
                }, 500);
            });
        } else {
            new Promise(function (resolve, reject) {
                db.alpenblickTables.findAndModify({
                    query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
                    update: {
                        $set: {
                            "tables.$.bgColor": "#ffffff",
                            "tables.$.isBesetzt": "false",
                        }, $unset: {
                            "tables.$.groups": 1,
                        }
                    },
                    new: false
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("No Error");
                });
                resolve();
            }).then(function () { // (**)
                setTimeout(function () {
                    console.log("Dispense Table2: ");
                    db.alpenblickTables.find(
                        {
                            department: dispenseTable.department,
                            "tables.number": dispenseTable.number
                        }, function (err, tables) {
                            if (err) {
                                res.send(err);
                            }
                            console.log(tables);
                            res.json(tables);
                            //console.log("Dispense Table: " + JSON.stringify(tables));
                        });
                }, 500);
            });
        }
    }
};