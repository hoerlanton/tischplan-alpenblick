module.exports = {
    addTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        if (tableNumber === '1' && topValue === '100' && leftValue === '10' && width === '150') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "300",
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
                            "number": "14",
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
        } else if (tableNumber === '14' && topValue === '100' && leftValue === '170' && height === '80') {
                db.alpenblickTables.update(
                    {
                        department: departmentValue,
                        "tables.number": tableNumber
                    },
                    {
                        $set: {
                            "tables.$.height": "160",
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
                                "number": "2",
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
        } else if (tableNumber === '14' && topValue === '100' && leftValue === '170' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
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
                            "number": "3",
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
        } else if (tableNumber === '14' && topValue === '100' && leftValue === '170' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
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
                            "number": "4",
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
        } else if (tableNumber === '2' && topValue === '190' && leftValue === '170' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
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
                            "number": "3",
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
        } else if (tableNumber === '2' && topValue === '190' && leftValue === '170' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
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
                            "number": "4",
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
        } else if (tableNumber === '2' && topValue === '190' && leftValue === '170' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
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
                            "number": "5",
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
        } else if (tableNumber === '3' && topValue === '280' && leftValue === '170' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
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
                            "number": "4",
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
        } else if (tableNumber === '3' && topValue === '280' && leftValue === '170' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
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
                            "number": "5",
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
        } else if (tableNumber === '3' && topValue === '280' && leftValue === '170' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
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
                            "number": "6",
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
        } else if (tableNumber === '4' && topValue === '370' && leftValue === '170' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
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
                            "number": "5",
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
        } else if (tableNumber === '4' && topValue === '370' && leftValue === '170' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
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
                            "number": "6",
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
        } else if (tableNumber === '4' && topValue === '370' && leftValue === '170' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
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
                            "number": "7",
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
        } else if (tableNumber === '5' && topValue === '460' && leftValue === '170' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
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
                            "number": "6",
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
        } else if (tableNumber === '5' && topValue === '460' && leftValue === '170' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
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
                            "number": "7",
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
        } else if (tableNumber === '6' && topValue === '550' && leftValue === '170' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
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
                            "number": "7",
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
        } else if (tableNumber === '8' && topValue === '640' && leftValue === '330' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "550",
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
                            "number": "9",
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
        } else if (tableNumber === '8' && topValue === '550' && leftValue === '330' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.topValue": "460",
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
                            "number": "10",
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
        } else if (tableNumber === '8' && topValue === '460' && leftValue === '330' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
                        "tables.$.topValue": "370",
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
                            "number": "11",
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
        } else if (tableNumber === '9' && topValue === '550' && leftValue === '330' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "460",
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
                            "number": "10",
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
        } else if (tableNumber === '9' && topValue === '460' && leftValue === '330' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.topValue": "370",
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
                            "number": "11",
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
        } else if (tableNumber === '9' && topValue === '370' && leftValue === '330' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
                        "tables.$.topValue": "280",
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
                            "number": "12",
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
        } else if (tableNumber === '10' && topValue === '460' && leftValue === '330' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "370",
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
                            "number": "11",
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
        } else if (tableNumber === '10' && topValue === '370' && leftValue === '330' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.topValue": "280",
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
                            "number": "12",
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
        } else if (tableNumber === '10' && topValue === '280' && leftValue === '330' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
                        "tables.$.topValue": "190",
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
                            "number": "13",
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
        } else if (tableNumber === '11' && topValue === '370' && leftValue === '330' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "280",
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
                            "number": "12",
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
        } else if (tableNumber === '11' && topValue === '280' && leftValue === '330' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.topValue": "190",
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
                            "number": "13",
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
        } else if (tableNumber === '11' && topValue === '190' && leftValue === '330' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
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
                            "number": "15",
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
        } else if (tableNumber === '12' && topValue === '280' && leftValue === '330' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "190",
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
                            "number": "13",
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
        } else if (tableNumber === '12' && topValue === '190' && leftValue === '330' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
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
                            "number": "15",
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
        } else if (tableNumber === '13' && topValue === '190' && leftValue === '330' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
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
                            "number": "15",
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
        } else if (tableNumber === '20' && topValue === '750' && leftValue === '170' && width === '150') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "300",
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
                            "number": "21",
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
        } else if (tableNumber === '20' && topValue === '750' && leftValue === '170' && width === '300') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "450",
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
                            "number": "22",
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
        } else if (tableNumber === '21' && topValue === '750' && leftValue === '330' && width === '150') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "300",
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
                            "number": "22",
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
        } else if (tableNumber === '22' && topValue === '750' && leftValue === '490' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "640",
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
                            "number": "23",
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
        } else if (tableNumber === '22' && topValue === '640' && leftValue === '490' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.topValue": "550",
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
                            "number": "24",
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
        } else if (tableNumber === '22' && topValue === '550' && leftValue === '490' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
                        "tables.$.topValue": "460",
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
                            "number": "25",
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
        } else if (tableNumber === '23' && topValue === '640' && leftValue === '490' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "550",
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
                            "number": "24",
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
        } else if (tableNumber === '23' && topValue === '550' && leftValue === '490' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.topValue": "460",
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
                            "number": "25",
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
        } else if (tableNumber === '23' && topValue === '460' && leftValue === '490' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
                        "tables.$.topValue": "370",
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
                            "number": "26",
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
        } else if (tableNumber === '24' && topValue === '550' && leftValue === '490' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "460",
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
                            "number": "25",
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
        } else if (tableNumber === '24' && topValue === '460' && leftValue === '490' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.topValue": "370",
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
                            "number": "26",
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
        } else if (tableNumber === '24' && topValue === '370' && leftValue === '490' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
                        "tables.$.topValue": "280",
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
                            "number": "27",
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
        } else if (tableNumber === '25' && topValue === '460' && leftValue === '490' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "370",
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
                            "number": "26",
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
        } else if (tableNumber === '25' && topValue === '370' && leftValue === '490' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.topValue": "280",
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
                            "number": "27",
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
        } else if (tableNumber === '25' && topValue === '280' && leftValue === '490' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
                        "tables.$.topValue": "190",
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
                            "number": "28",
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
        } else if (tableNumber === '26' && topValue === '370' && leftValue === '490' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "280",
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
                            "number": "27",
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
        } else if (tableNumber === '26' && topValue === '280' && leftValue === '490' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
                        "tables.$.topValue": "190",
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
                            "number": "28",
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
        } else if (tableNumber === '26' && topValue === '190' && leftValue === '490' && height === '240') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "320",
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
                            "number": "29",
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
        } else if (tableNumber === '27' && topValue === '280' && leftValue === '490' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
                        "tables.$.topValue": "190",
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
                            "number": "28",
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
        } else if (tableNumber === '27' && topValue === '190' && leftValue === '490' && height === '160') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "240",
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
                            "number": "29",
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
        } else if (tableNumber === '28' && topValue === '190' && leftValue === '490' && height === '80') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "160",
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
                            "number": "29",
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