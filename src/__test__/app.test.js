import request from "supertest";
import sinon from "sinon";
import mongoose from "mongoose";
import app from "../../app.js"; // adjust the path to point to your app.js file
import dotenv from "dotenv";
dotenv.config();

describe("Express App", () => {
  let mongoConnectStub;

  before(() => {
    // Stub the mongoose connect method to avoid real MongoDB connection
    mongoConnectStub = sinon.stub(mongoose, "connect").resolves();
  });

  after(() => {
    // Restore the original mongoose connect method
    mongoConnectStub.restore();
  });

  // Test the "/" endpoint
  it('should return "Welcome to shorten" on GET /', (done) => {
    request(app)
      .get("/")
      .expect(200) // Check that status is 200 OK
      .expect("Content-Type", /text/)
      .expect((res) => {
        if (res.text !== "Welcome to shorten")
          throw new Error("Response text does not match");
      })
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
