var should = require("chai").should(),
supertest = require("supertest"),
app = require("../server");

var url = supertest("http://localhost:8085");

describe("Testing the  TestSuite of Calc", function(err){
 it.skip("should handle the multiplication", function(done){
   url
       .get("/multiply/5/6")
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         parseFloat(res.text).should.be.equal(30);
         done();
       });

 });

it("should handle the addition", function(done){
   url
       .get("/add/5/6")
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         parseFloat(res.text).should.be.equal(11);
         done();
       });
 });
});
