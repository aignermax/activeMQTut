// Tutorial origin: https://medium.com/@mackplevine/using-activemq-with-node-js-stomp-and-http-b251ce8d995#.2c1jeetn6

'use strict';

var Stomp = require ('stomp-client');
var MessageConsumer = function MessageConsumer(){};

MessageConsumer.prototype.init = function init() {
    var stompClient = new Stomp ('127.0.0.1' , 8161 , 'user' , 'pw');
    stompClient.connect(function(sessionID){
        stompClient.subscribe('/queue/queue1' , function(body,headers){
            // if client receives message -> log it.
            console.log(headers + " " + body);
        })
    });
};

var messageConsumer = new MessageConsumer();
messageConsumer.init();