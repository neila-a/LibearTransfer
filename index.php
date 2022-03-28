<?php
    require __DIR__ . '/vendor/autoload.php';
  
    $options = array(
      'cluster' => 'ap3',
      'useTLS' => true
    );
    $pusher = new Pusher\Pusher(
      '68d011b9b45b3e0b44ff',
      '286d65f732a96f6d460b',
      '1367653',
      $options
    );
    $data['message'] = $_GET["msg"];
    $pusher->trigger('my-channel', 'my-event', $data);
?>