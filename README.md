|          Title          | Layout     | Description                                                                 |
|:-----------------------:|------------|-----------------------------------------------------------------------------|
| NodeJS gRPC Quick Start | Quickstart | This guide gets you started with gRPC in Node with a simple working example |



### Prerequisites

- Node version 4.0.0 or higher


### Download the example



```sh
# Clone the repository to get the example code
$ git clone https://github.com/mtsoydan/gRPCExample
# Navigate to the server example:
$ cd gRPCExample/NodeJsGrpcServerClient
# Install the example's dependencies
$ npm install
```


### Run a gRPC application

From the `gRPCExample\NodeJsGrpcServerClient` directory:

 1. Run the server:

    ```sh
    $ node greeter_server.js
    ```

 2. From another terminal, run the client:

    ```sh
    $ node greeter_client.js
    ```

Congratulations! You've just run a client-server application with gRPC.



### gRPC service

```proto
option java_multiple_files = true;
option java_package = "io.grpc.examples.helloworld";
option java_outer_classname = "HelloWorldProto";
option objc_class_prefix = "HLW";

package helloworld;
// The greeting service definition.
service Greeter {
  rpc GetList(Empty) returns (ProductList) {}
  rpc GetListString(Empty) returns (ProductStringReply) {}
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}


message ProductStringReply{
  string message =1;
}

message Product {
  int32 id = 1;
  string name = 2;
  double listPrice = 3;
}

message ProductList {
  repeated Product Products = 1;
}
```


#### NodeJs Client

In the same directory, open `greeter_client.js`. Call the new method like this:

```js
function main() {
  var client = new hello_proto.Greeter('localhost:50052',
                                       grpc.credentials.createInsecure());
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  client.sayHello({name: user}, (err, response) =>{
    console.log('SayHello:', response.message);
  });

  client.GetList({},(err, response) => {
    console.log('Greeting:', JSON.stringify(response.Products[0]));
  });


  client.GetListString({},(err, response) => {
    console.log('GreetingString:', response.message);
  });

  
}
```



gRPC Hello World Example (Android Java)
========================

PREREQUISITES
-------------
- [Java gRPC](https://github.com/grpc/grpc-java)

- [Android Tutorial](https://developer.android.com/training/basics/firstapp/index.html) if you're new to Android development

- [gRPC Java Android Quick Start Guide](https://grpc.io/docs/quickstart/android.html)

- We only have Android gRPC client in this example. Please follow examples in other languages to build and run a gRPC server.

INSTALL
-------

1. **[Install gRPC Java library SNAPSHOT locally, including code generation plugin](../../COMPILING.md) (Only need this step for non-released versions, e.g. master HEAD).**

2. Install the app
```sh
$ cd gRPCExample/AndroidClient/helloworld
$ ../../gradlew installDebug
```

Please refer to the
[tutorial](https://grpc.io/docs/tutorials/basic/android.html) on
how to use gRPC in Android programs.
