<?php

use PAMI\Message\Event\EventMessage;
use Ratchet\ConnectionInterface;
use Ratchet\Http\HttpServer;
use Ratchet\RFC6455\Messaging\MessageInterface;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\MessageComponentInterface;
use Ratchet\WebSocket\WsServer;

require_once 'vendor/autoload.php';

// $options = array(
//     'host' => '172.16.2.20',
//     'scheme' => 'tcp://',
//     'port' => 5038,
//     'username' => 'api',
//     'secret' => 'api',
//     'connect_timeout' => 100,
//     'read_timeout' => 100
// );
// $client = new \PAMI\Client\Impl\ClientImpl($options);
// $client->open();


$chatComponent = new class implements MessageComponentInterface {
    // Conjunto 'SET'
    private SplObjectStorage $connections;
    private $client;

    public function __construct()
    {
        $this->connections = new SplObjectStorage();

        // $options = array(
        //     'host' => '172.16.2.20',
        //     'scheme' => 'tcp://',
        //     'port' => 5038,
        //     'username' => 'api',
        //     'secret' => 'api',
        //     'connect_timeout' => 100,
        //     'read_timeout' => 100
        // );
        // $this->client = new \PAMI\Client\Impl\ClientImpl($options);
    }

    /**
     * When a new connection is opened it will be passed to this method
     * @param  ConnectionInterface $conn The socket/connection that just connected to your application
     * @throws \Exception
     */
    public function onOpen(ConnectionInterface $conn)
    {
        echo "Nova conexão aceita" . PHP_EOL;
        $this->connections->attach($conn);
        // $this->client->open();
    }

    /**
     * This is called before or after a socket is closed (depends on how it's closed).  SendMessage to $conn will not result in an error if it has already been closed.
     * @param  ConnectionInterface $conn The socket/connection that is closing/closed
     * @throws \Exception
     */
    public function onClose(ConnectionInterface $conn)
    {
        echo "Conexão encerrada" . PHP_EOL;
        $this->connections->detach($conn);
        // $this->client->close();
    }

    /**
     * If there is an error with one of the sockets, or somewhere in the application where an Exception is thrown,
     * the Exception is sent back down the stack, handled by the Server and bubbled back up the application through this method
     * @param  ConnectionInterface $conn
     * @param  \Exception          $e
     * @throws \Exception
     */
    public function onError(ConnectionInterface $conn, \Exception $e)
    {
        echo "Erro: $e->getTraceAsString()";
    }

    public function onMessage(ConnectionInterface $from, MessageInterface $msg)
    {
        
        foreach ( $this->connections as $connection ) {
            // if ( $connection !== $from ) {
            // $this->client->registerEventListener(function (EventMessage $event) use ($connection) {
                // $connection->send($event);
            // });

            $connection->send('oi:'.$msg);
            
            // }
        }
    }
};

$server = IoServer::factory(
    new HttpServer(
        new WsServer($chatComponent)
    ),
    8001
);

$server->run();
