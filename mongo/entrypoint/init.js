db.auth("example-master", "45GhtuHf50456786jBgf");

db = db.getSiblingDB("example");

db.createUser(
    {
        user: "example-master",
        pwd: "45GhtuHf50456786jBgf",
        roles: [
            {
                role: "readWrite",
                db: "example"
            }
        ]
    }
);

db = db.getSiblingDB("example_test");

db.createUser(
    {
        user: "test",
        pwd: "test",
        roles: [
            {
                role: "readWrite",
                db: "example_test"
            }
        ]
    }
);
