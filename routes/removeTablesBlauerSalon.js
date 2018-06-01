module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
     if (tableNumber === '301' && topValue === '100' && leftValue === '120' && height === '210') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "105",
                        "tables.$.topValue": "220",
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
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "302",
                             "topValue": "100",
                             "leftValue": "120",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
        } else if (tableNumber === '302' && topValue === '100' && leftValue === '120' && width === '390') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "195",
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
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "303",
                             "topValue": "100",
                             "leftValue": "320",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '303' && topValue === '100' && leftValue === '320' && height === '210') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "105",
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
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "304",
                             "topValue": "220",
                             "leftValue": "320",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '401' && topValue === '570' && leftValue === '120' && height === '210') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "105",
                     "tables.$.topValue": "680"
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
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "402",
                             "topValue": "570",
                             "leftValue": "120",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '401' && topValue === '460' && leftValue === '120' && height === '315') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "403",
                             "topValue": "460",
                             "leftValue": "120",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '401' && topValue === '350' && leftValue === '120' && height === '420') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "404",
                             "topValue": "350",
                             "leftValue": "120",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '402' && topValue === '350' && leftValue === '120' && height === '315') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "404",
                             "topValue": "350",
                             "leftValue": "120",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '402' && topValue === '460' && leftValue === '120' && height === '210') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "105",
                     "tables.$.topValue": "570"
                 }
             }, function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("moveTable Update successful");
             });
         db.alpenblickTables.update(
             {
                 department: departmentValue
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "403",
                             "topValue": "460",
                             "leftValue": "120",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '403' && topValue === '350' && leftValue === '120' && height === '210') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "105",
                     "tables.$.topValue": "460"
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
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "404",
                             "topValue": "350",
                             "leftValue": "120",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '405' && topValue === '350' && leftValue === '320' && height === '210') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "105",
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
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "406",
                             "topValue": "460",
                             "leftValue": "320",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '405' && topValue === '350' && leftValue === '320' && height === '315') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "407",
                             "topValue": "570",
                             "leftValue": "320",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '405' && topValue === '350' && leftValue === '320' && height === '420') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "408",
                             "topValue": "680",
                             "leftValue": "320",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '406' && topValue === '460' && leftValue === '320' && height === '210') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "105",
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
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "407",
                             "topValue": "570",
                             "leftValue": "320",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '406' && topValue === '460' && leftValue === '320' && height === '315') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "408",
                             "topValue": "680",
                             "leftValue": "320",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
     } else if (tableNumber === '407' && topValue === '570' && leftValue === '320' && height === '210') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "105",
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
                             "arrayIndex": "0",
                             "department": "blauer-salon",
                             "number": "408",
                             "topValue": "680",
                             "leftValue": "320",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "195",
                             "height": "105"
                         }],
                         $sort: {number: 1}
                     }
                 }
             },
             {multi: true},
             function (err, tables) {
                 if (err) {
                     console.log("Error");
                 }
                 console.log("addTable Update successful");
             });
        }
    }
};