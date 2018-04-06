
module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
         if (tableNumber === '501' && topValue === '115' && leftValue === '430' && width === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "40",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "1",
                                "department": "Wintergarten",
                                "number": "502",
                                "topValue": "115",
                                "leftValue": "500",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "40",
                                "height": "40"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '503' && topValue === '115' && leftValue === '590' && width === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "40",
                        "tables.$.transformValue": "rotate(45deg)",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "3",
                                "department": "Wintergarten",
                                "number": "504",
                                "topValue": "115",
                                "leftValue": "680",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "40",
                                "height": "40",
                                "transformValue": "rotate(45deg)"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        }
    }
};









