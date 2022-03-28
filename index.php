<?php
    shell_exec(
        <<<COMMAND
            curl -H 'Content-Type: application/json' -d '{"data":"{\"message\":\"
        COMMAND
        . $_GET["msg"] .
        <<<COMMAND
            \"}","name":"my-event","channel":"my-channel"}' \
            "https://api-ap3.pusher.com/apps/1367653/events?"\
            "body_md5=2c99321eeba901356c4c7998da9be9e0&"\
            "auth_version=1.0&"\
            "auth_key=68d011b9b45b3e0b44ff&"\
            "auth_timestamp=1648470878&"\
            "auth_signature=727f9fcc55a157268f6e3e7d011de9134edf45982a9bb7c6a818b6fd59afc7b1&"
        COMMAND
    );
?>