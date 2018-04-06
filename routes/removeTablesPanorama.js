/**
 * Created by antonhorl on 06.01.18.
 */
module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
     if (tableNumber === '516' && topValue === '100' && leftValue === '220' && width === '220') {
            db.alpenblickTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "110",
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
                             "department": "panorama",
                             "number": "517",
                             "topValue": "100",
                             "leftValue": "340",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "110",
                             "height": "60"
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
                 console.log("removeTable Update successful");
             });
        } else if (tableNumber === '515' && topValue === '170' && leftValue === '220' && width === '220') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "110",
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
                             "department": "panorama",
                             "number": "518",
                             "topValue": "170",
                             "leftValue": "340",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "110",
                             "height": "60"
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
     } else if (tableNumber === '514' && topValue === '235' && leftValue === '220' && width === '220') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "110",
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
                             "department": "panorama",
                             "number": "519",
                             "topValue": "235",
                             "leftValue": "340",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "110",
                             "height": "60"
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
     } else if (tableNumber === '513' && topValue === '300' && leftValue === '220' && width === '220') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "110",
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
                             "department": "panorama",
                             "number": "520",
                             "topValue": "300",
                             "leftValue": "340",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "110",
                             "height": "60"
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
     } else if (tableNumber === '506' && topValue === '710' && leftValue === '165' && width === '220') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "110",
                     "tables.$.leftValue": "305"
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
                             "department": "panorama",
                             "number": "508",
                             "topValue": "710",
                             "leftValue": "165",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "110",
                             "height": "60"
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
     } else if (tableNumber === '505' && topValue === '645' && leftValue === '155' && width === '220') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "110",
                     "tables.$.leftValue": "310"
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
                             "department": "panorama",
                             "number": "509",
                             "topValue": "645",
                             "leftValue": "155",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "110",
                             "height": "60"
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
     } else if (tableNumber === '504' && topValue === '575' && leftValue === '160' && width === '220') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "110",
                     "tables.$.leftValue": "315"
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
                             "department": "panorama",
                             "number": "510",
                             "topValue": "575",
                             "leftValue": "160",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "110",
                             "height": "60",
                             "groups": []
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
     } else if (tableNumber === '503' && topValue === '510' && leftValue === '165' && width === '220') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "110",
                     "tables.$.leftValue": "320"
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
                             "department": "panorama",
                             "number": "511",
                             "topValue": "510",
                             "leftValue": "165",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "110",
                             "height": "60"
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
     } else if (tableNumber === '502' && topValue === '445' && leftValue === '180' && width === '220') {
         db.alpenblickTables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "110",
                     "tables.$.leftValue": "325"
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
                             "department": "panorama",
                             "number": "512",
                             "topValue": "445",
                             "leftValue": "180",
                             "bgColor": "#ffffff",
                             "isBesetzt": "false",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "110",
                             "height": "60"
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


