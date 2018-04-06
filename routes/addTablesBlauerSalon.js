module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        if (tableNumber === '301' && topValue === '220' && leftValue === '120' && height === '105') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "210",
                        "tables.$.topValue": "100",
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
                            "number": "302",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '302' && topValue === '100' && leftValue === '120' && width === '195') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "390",
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
                            "number": "303",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '303' && topValue === '100' && leftValue === '320' && height === '105') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "210",
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
                            "number": "304",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '401' && topValue === '680' && leftValue === '120' && height === '105') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "210",
                        "tables.$.topValue": "570"
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
                            "number": "402",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '401' && topValue === '570' && leftValue === '120' && height === '210') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "315",
                        "tables.$.topValue": "460"
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
                            "number": "403",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '401' && topValue === '460' && leftValue === '120' && height === '315') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "420",
                        "tables.$.topValue": "350"
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
                            "number": "404",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '402' && topValue === '570' && leftValue === '120' && height === '105') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "210",
                        "tables.$.topValue": "460"
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
                            "number": "403",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '402' && topValue === '460' && leftValue === '120' && height === '210') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "315",
                        "tables.$.topValue": "350"
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
                            "number": "404",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '403' && topValue === '460' && leftValue === '120' && height === '105') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "210",
                        "tables.$.topValue": "350"
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
                            "number": "404",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '405' && topValue === '350' && leftValue === '320' && height === '105') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "210",
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
                            "number": "406",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '405' && topValue === '350' && leftValue === '320' && height === '210') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "315",
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
                            "number": "407",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '405' && topValue === '350' && leftValue === '320' && height === '315') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "420",
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
                            "number": "408",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '406' && topValue === '350' && leftValue === '320' && height === '105') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "210",
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
                            "number": "407",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '406' && topValue === '350' && leftValue === '320' && height === '210') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "315",
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
                            "number": "408",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        } else if (tableNumber === '407' && topValue === '350' && leftValue === '320' && height === '105') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "210",
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
                            "number": "408",
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("removeTable Update successful");
                    console.log(tables);
                });
        }
    }
};