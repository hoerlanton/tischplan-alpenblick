
module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        if (tableNumber === '501' && topValue === '115' && leftValue === '430' && width === '40') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "80",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.alpenblickTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "502",
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
                    console.log(tables);
                });

        } else if (tableNumber === '503' && topValue === '115' && leftValue === '590' && width === '40') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "80",
                        "tables.$.transformValue": "rotate(0deg)",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.alpenblickTables.update(
                {}, {
                    $pull: {
                        tables: {
                            "number": "504",
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
                    console.log(tables);
                });
        }
    }
};









