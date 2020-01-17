# Sony TV YouTube Timeout Defeater

Automates the d-pad center button every 20 seconds to continue playing youtube.

## Installing

Run in the project directory:
```
npm install -g
```

## CLI Example

```
youtube-timeout-defeater --host=192.168.19.61
```

### Options
* host - TV IP address (internal)
* port - Defaults to 80
* authkey - TV pre-shared key (defaults to '0000')

### Pre-shared key
Enable the following settings on a Sony Bravia TV to allow control over IP

1. Settings->Network->Home Network Setup->IP Control->Authentication->Normal and Pre-Shared Key
2. Settings->Network->Home Network Setup->IP Control->Pre-Shared Key

## License

This project is licensed under the MIT License
