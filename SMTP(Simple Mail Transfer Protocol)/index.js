const SMTPSERVER = require("smtp-server").SMTPServer;

const server = new SMTPSERVER({
  allowInsecureAuth: true,
  authOptional: true,
  onConnect(session, cb) {
    // for Debugging purpose
    console.log(`onConnect`, session.id);
    // cb(new Error("cannot connect")); // Corrected syntax to reject the connection
    cb(); // to accept the connection
  },
  onMailFrom(address, session, cb) {
    console.log(`onMailFrom`, session.id, address.address);
    cb();
  },
  onRcptTo(address, session, cb) {
    console.log(`onRcptTo`, session.id, address.address);
    cb();
  },
  onData(stream, session, cb) {
    stream.on("data", (data) => console.log(`onData ${data.toString}`));
    stream.on("end", cb);
  },
});

server.listen(25, () => {
  console.log("Server is running on port 25");
});
