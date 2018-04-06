module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
     if (tableNumber === '1' && topValue === '100' && leftValue === '10' && width === '300') {
        db.alpenblickTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.width": "150",
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
                             "department": "andreas-saal",
                             "number": "14",
                             "topValue": "100",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
    } else if (tableNumber === '14' && topValue === '100' && leftValue === '170' && height === '160') {
        db.alpenblickTables.update(
            {
                department: departmentValue,
                "tables.number": tableNumber
            },
            {
                $set: {
                    "tables.$.height": "80",
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
                             "department": "andreas-saal",
                             "number": "2",
                             "topValue": "190",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '14' && topValue === '100' && leftValue === '170' && height === '240') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "3",
                             "topValue": "280",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '14' && topValue === '100' && leftValue === '170' && height === '320') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "4",
                             "topValue": "370",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '2' && topValue === '190' && leftValue === '170' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
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
                             "department": "andreas-saal",
                             "number": "3",
                             "topValue": "280",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '2' && topValue === '190' && leftValue === '170' && height === '240') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "4",
                             "topValue": "370",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '2' && topValue === '190' && leftValue === '170' && height === '320') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "5",
                             "topValue": "460",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '3' && topValue === '280' && leftValue === '170' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
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
                             "department": "andreas-saal",
                             "number": "4",
                             "topValue": "370",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '3' && topValue === '280' && leftValue === '170' && height === '240') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "5",
                             "topValue": "460",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '3' && topValue === '280' && leftValue === '170' && height === '320') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "6",
                             "topValue": "550",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '4' && topValue === '370' && leftValue === '170' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
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
                             "department": "andreas-saal",
                             "number": "5",
                             "topValue": "460",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '4' && topValue === '370' && leftValue === '170' && height === '240') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "6",
                             "topValue": "550",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '4' && topValue === '370' && leftValue === '170' && height === '320') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "7",
                             "topValue": "640",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '5' && topValue === '460' && leftValue === '170' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
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
                             "department": "andreas-saal",
                             "number": "6",
                             "topValue": "550",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '5' && topValue === '460' && leftValue === '170' && height === '240') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "7",
                             "topValue": "640",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '6' && topValue === '550' && leftValue === '170' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
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
                             "department": "andreas-saal",
                             "number": "7",
                             "topValue": "640",
                             "leftValue": "170",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '8' && topValue === '550' && leftValue === '330' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "640"
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
                             "department": "andreas-saal",
                             "number": "9",
                             "topValue": "550",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '8' && topValue === '460' && leftValue === '330' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
                     "tables.$.topValue": "550"
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
                             "department": "andreas-saal",
                             "number": "10",
                             "topValue": "460",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '8' && topValue === '370' && leftValue === '330' && height === '320') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "240",
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
                             "department": "andreas-saal",
                             "number": "11",
                             "topValue": "370",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '9' && topValue === '460' && leftValue === '330' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "550"
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
                             "department": "andreas-saal",
                             "number": "10",
                             "topValue": "460",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '9' && topValue === '370' && leftValue === '330' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
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
                             "department": "andreas-saal",
                             "number": "11",
                             "topValue": "370",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '9' && topValue === '280' && leftValue === '330' && height === '320') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "240",
                     "tables.$.topValue": "370"
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
                             "department": "andreas-saal",
                             "number": "12",
                             "topValue": "280",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '10' && topValue === '370' && leftValue === '330' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
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
                             "department": "andreas-saal",
                             "number": "11",
                             "topValue": "370",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '10' && topValue === '280' && leftValue === '330' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
                     "tables.$.topValue": "370"
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
                             "department": "andreas-saal",
                             "number": "12",
                             "topValue": "280",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '10' && topValue === '190' && leftValue === '330' && height === '320') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "240",
                     "tables.$.topValue": "280"
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
                             "department": "andreas-saal",
                             "number": "13",
                             "topValue": "190",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '11' && topValue === '280' && leftValue === '330' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "370"
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
                             "department": "andreas-saal",
                             "number": "12",
                             "topValue": "280",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '11' && topValue === '190' && leftValue === '330' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
                     "tables.$.topValue": "280"
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
                             "department": "andreas-saal",
                             "number": "13",
                             "topValue": "190",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '11' && topValue === '100' && leftValue === '330' && height === '320') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "240",
                     "tables.$.topValue": "190"
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
                             "department": "andreas-saal",
                             "number": "15",
                             "topValue": "100",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '12' && topValue === '190' && leftValue === '330' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "280"
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
                             "department": "andreas-saal",
                             "number": "13",
                             "topValue": "190",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '12' && topValue === '100' && leftValue === '330' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
                     "tables.$.topValue": "190"
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
                             "department": "andreas-saal",
                             "number": "15",
                             "topValue": "100",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '13' && topValue === '100' && leftValue === '330' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "190"
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
                             "department": "andreas-saal",
                             "number": "15",
                             "topValue": "100",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '20' && topValue === '750' && leftValue === '170' && width === '300') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "150",
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
                             "department": "andreas-saal",
                             "number": "21",
                             "topValue": "750",
                             "leftValue": "330",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '20' && topValue === '750' && leftValue === '170' && width === '450') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "22",
                             "topValue": "750",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '21' && topValue === '750' && leftValue === '330' && width === '300') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "150",
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
                             "department": "andreas-saal",
                             "number": "22",
                             "topValue": "750",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '22' && topValue === '640' && leftValue === '490' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "750",
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
                             "department": "andreas-saal",
                             "number": "23",
                             "topValue": "640",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '22' && topValue === '550' && leftValue === '490' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
                     "tables.$.topValue": "640"
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
                             "department": "andreas-saal",
                             "number": "24",
                             "topValue": "550",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '22' && topValue === '460' && leftValue === '490' && height === '320') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "25",
                             "topValue": "460",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '23' && topValue === '550' && leftValue === '490' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "640",
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
                             "department": "andreas-saal",
                             "number": "24",
                             "topValue": "550",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '23' && topValue === '460' && leftValue === '490' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
                     "tables.$.topValue": "550"
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
                             "department": "andreas-saal",
                             "number": "25",
                             "topValue": "460",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '23' && topValue === '370' && leftValue === '490' && height === '320') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [ {
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "26",
                             "topValue": "370",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '24' && topValue === '460' && leftValue === '490' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "550",
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
                             "department": "andreas-saal",
                             "number": "25",
                             "topValue": "460",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '24' && topValue === '370' && leftValue === '490' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
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
                             "department": "andreas-saal",
                             "number": "26",
                             "topValue": "370",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '24' && topValue === '280' && leftValue === '490' && height === '320') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "27",
                             "topValue": "280",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '25' && topValue === '370' && leftValue === '490' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "460",
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
                             "department": "andreas-saal",
                             "number": "26",
                             "topValue": "370",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '25' && topValue === '280' && leftValue === '490' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
                     "tables.$.topValue": "370"
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
                             "department": "andreas-saal",
                             "number": "27",
                             "topValue": "280",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '25' && topValue === '190' && leftValue === '490' && height === '320') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "28",
                             "topValue": "190",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '26' && topValue === '280' && leftValue === '490' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "370",
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
                             "department": "andreas-saal",
                             "number": "27",
                             "topValue": "280",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '26' && topValue === '190' && leftValue === '490' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
                     "tables.$.topValue": "280"
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
                             "department": "andreas-saal",
                             "number": "28",
                             "topValue": "190",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '26' && topValue === '100' && leftValue === '490' && height === '320') {
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
             {
                 department: departmentValue,
             }, {
                 $push: {
                     tables: {
                         $each: [{
                             "arrayIndex": "0",
                             "department": "andreas-saal",
                             "number": "29",
                             "topValue": "100",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '27' && topValue === '190' && leftValue === '490' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "280",
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
                             "department": "andreas-saal",
                             "number": "28",
                             "topValue": "190",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '27' && topValue === '100' && leftValue === '490' && height === '240') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "160",
                     "tables.$.topValue": "190"
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
                             "department": "andreas-saal",
                             "number": "29",
                             "topValue": "100",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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
     } else if (tableNumber === '28' && topValue === '100' && leftValue === '490' && height === '160') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.height": "80",
                     "tables.$.topValue": "190"
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
                             "department": "andreas-saal",
                             "number": "29",
                             "topValue": "100",
                             "leftValue": "490",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "150",
                             "height": "80"
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