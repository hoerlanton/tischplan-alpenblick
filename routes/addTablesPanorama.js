module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        if (tableNumber === '516' && topValue === '100' && leftValue === '220' && width === '110') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "220",
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
                            "number": "517",
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
        } else if (tableNumber === '515' && topValue === '170' && leftValue === '220' && width === '110') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "220",
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
                            "number": "518",
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
        } else if (tableNumber === '514' && topValue === '235' && leftValue === '220' && width === '110') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "220",
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
                            "number": "519",
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
        } else if (tableNumber === '513' && topValue === '300' && leftValue === '220' && width === '110') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "220",
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
                            "number": "520",
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
        } else if (tableNumber === '506' && topValue === '710' && leftValue === '305' && width === '110') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "220",
                        "tables.$.leftValue": "165"
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
                            "number": "508",
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
        } else if (tableNumber === '505' && topValue === '645' && leftValue === '310' && width === '110') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "220",
                        "tables.$.leftValue": "155"
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
                            "number": "509",
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
        } else if (tableNumber === '504' && topValue === '575' && leftValue === '315' && width === '110') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "220",
                        "tables.$.leftValue": "160"
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
                            "number": "510",
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
        } else if (tableNumber === '503' && topValue === '510' && leftValue === '320' && width === '110') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "220",
                        "tables.$.leftValue": "165"
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
                            "number": "511",
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
        } else if (tableNumber === '502' && topValue === '445' && leftValue === '325' && width === '110') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "220",
                        "tables.$.leftValue": "180"
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
                            "number": "512",
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


