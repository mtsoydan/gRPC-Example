
var PROTO_PATH = __dirname + '/helloworld.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  callback(null, {message: 'Hello ' + call.request.name});
}

function sayHello2(call, callback) {
  callback(null, {message: 'mts ' + call.request.name});
}

function allProducts() {
  console.log('[Server]:List all product');

  var Products ={ Products :[
      { id  :1009, name: "Askin Gozyaslari", listPrice: 15 },
      { id: 1010, name: "Suc ve Ceza", listPrice: 55 },
      { id: 1011, name: "Harry Potter:Felsefe Tasi", listPrice: 35 },
      { id: 1012, name: "Iskender", listPrice: 25 }
  ]};
  var arr = JSON.stringify(Products);
  console.log(arr)

  console.log(Products)
  return Products;
}
function list(call, callback) {
    callback(null, allProducts());
}


function allProductsString() {
  console.log('[Server]:List all product');

  var Products ={ Products :[
      { id  : 1009, name: "Askin Gozyaslari", listPrice: 15 },
      { id: 1010, name: "Suc ve Ceza", listPrice: 55 },
      { id: 1011, name: "Harry Potter:Felsefe Tasi", listPrice: 35 },
      { id: 1012, name: "Iskender", listPrice: 25 }
  ],
  MTS :[
    { id  : 1009, name: "mts1", listPrice: 15 },
    { id: 1010, name: "mts2", listPrice: 55 },

  ]
      
};
  var arr = JSON.stringify(Products);
  console.log(arr)
  return arr;
}
function getListString(call, callback) {
    callback(null,{message : allProductsString()} );
}


function main() {
  var server = new grpc.Server();
  server.addService(hello_proto.Greeter.service,
     {
       SayHello: sayHello,
       GetList : list,
       GetListString : getListString
  });
  

  server.bind('0.0.0.0:50052', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log("server starting")
}

main();
