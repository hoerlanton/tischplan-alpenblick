/**
 * Created by antonhorl on 11.01.18.
 */

module.exports = {
    getInformation: function (req, res, db) {
        console.log("tables get called");
        //Get guests from Mongo DB
        db.alpenblickNewInformation.find(function (err, information) {
            if (err) {
                res.send(err);
            }
            res.json(information);
        });
    },
    deleteInformation: function (req, res, db) {

        //JSON string is parsed to a JSON object
        console.log("deleteInformation request made to /deleteInformation");
        let informationElementToDelete = req.body;
        console.log(JSON.stringify(informationElementToDelete));
        db.alpenblickNewInformation.remove({

                roomNumber: informationElementToDelete.roomNumber,
                text: informationElementToDelete.text
            },
            {
                justOne: true,
            });
        res.json(informationElementToDelete);
    },
    newInformationToTable: function (req, res, db) {

        console.log("newInformationToTables post called");
        //Get guests from Mongo DB

        console.log(req.body);
        let newInformation = req.body;

        db.alpenblickTables.update(
            {
                "tables.number": newInformation.tableNumber,
            },
            {
                $push: {
                    "tables.$.groups": {
                        "newTraceText": newInformation.text,
                        "newTraceRoomNumber": newInformation.roomNumber,
                        "newTraceName": newInformation.name,
                        "newTraceEmployee": newInformation.employee,
                        "newTraceDate": newInformation.date,
                        "newTraceTableNumber": newInformation.tableNumber
                    }
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("addInformationToTable updated successfully");
            });

        setTimeout(function () {
            db.alpenblickTables.findOne(
                {
                    "tables.number": newInformation.tableNumber
                },
                {
                    "tables.$": 1,
                },
                function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log(JSON.stringify(tables));
                });
        }, 500);
    },
    getInformationEmployees: function (req, res, db) {
        console.log("getInformationEmployees get called");
        //Get guests from Mongo DB
        db.alpenblickNewInformationToEmployee.find(function (err, information) {
            if (err) {
                res.send(err);
            }
            res.json(information);
        });
    },

    newInformationToBox: function (req, res, db) {



        console.log("newInformationToBox post called");
        //Get guests from Mongo DB

        console.log(req.body);
        let newInformation = req.body;


        db.alpenblickNewInformation.save(newInformation, function (err, newInformation) {
            if (err) {
                res.send(err);
            }
            res.json(newInformation);
        });

        setTimeout(function () {
            db.alpenblickNewInformationToEmployee.findOne(
                {
                    "employee": newInformation.employee
                },
                {
                    "employee.$": 1,
                },
                function (err, infoEmployee) {
                    if (err) {
                        res.send(err);
                    }
                    db.alpenblickNewInformationToEmployee.update(
                        {
                            "employee": newInformation.employee
                        },
                        {
                     $inc: {
                         numberOfTraces: +1,
                            }
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("newInformationToEmployee updated successfully");
                        });
                });

        });

    }
};