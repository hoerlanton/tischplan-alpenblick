/**
 * Created by antonhorl on 06.01.18.
 */

module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
         if (tableNumber === '201' && topValue === '100' && leftValue === '10' && height === '190') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "200",
                        "tables.$.height": "90",
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
                                "department": "roter-salon",
                                "number": "202",
                                "topValue": "100",
                                "leftValue": "10",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "160",
                                "height": "90"
                            },],
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
        } else if (tableNumber === '202' && topValue === '100' && leftValue === '10' && width === '320') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "160",
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
                                "department": "roter-salon",
                                "number": "203",
                                "topValue": "200",
                                "leftValue": "230",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "160",
                                "height": "90"
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
        } else if (tableNumber === '203' && topValue === '100' && leftValue === '230' && width === '320') {
             db.alpenblickTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.width": "160",
                         "tables.$.topValue": "200"
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
                                 "department": "roter-salon",
                                 "number": "204",
                                 "topValue": "100",
                                 "leftValue": "440",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "160",
                                 "height": "90"
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
         } else if (tableNumber === '204' && topValue === '100' && leftValue === '440' && height === '180') {
             db.alpenblickTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "90",
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
                                 "department": "roter-salon",
                                 "number": "205",
                                 "topValue": "200",
                                 "leftValue": "440",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "160",
                                 "height": "90"
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
         } else if (tableNumber === '204' && topValue === '100' && leftValue === '440' && height === '270') {
             db.alpenblickTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "180",
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
                                 "department": "roter-salon",
                                 "number": "206",
                                 "topValue": "300",
                                 "leftValue": "440",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "160",
                                 "height": "90"
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
         } else if (tableNumber === '205' && topValue === '200' && leftValue === '440' && height === '180') {
             db.alpenblickTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "90",
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
                                 "department": "roter-salon",
                                 "number": "206",
                                 "topValue": "300",
                                 "leftValue": "440",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "160",
                                 "height": "90"
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
         } else if (tableNumber === '206' && topValue === '300' && leftValue === '270' && width === '320') {
             db.alpenblickTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.width": "160",
                         "tables.$.leftValue": "440",
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
                                 "department": "roter-salon",
                                 "number": "207",
                                 "topValue": "300",
                                 "leftValue": "270",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "160",
                                 "height": "90"
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
         } else if (tableNumber === '206' && topValue === '300' && leftValue === '100' && width === '480') {
             db.alpenblickTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.width": "320",
                         "tables.$.leftValue": "270",

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
                                 "department": "roter-salon",
                                 "number": "208",
                                 "topValue": "300",
                                 "leftValue": "100",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "160",
                                 "height": "90"
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
         } else if (tableNumber === '207' && topValue === '300' && leftValue === '100' && width === '320') {
             db.alpenblickTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.width": "160",
                         "tables.$.leftValue": "270"
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
                                 "department": "roter-salon",
                                 "number": "208",
                                 "topValue": "300",
                                 "leftValue": "100",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "160",
                                 "height": "90"
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