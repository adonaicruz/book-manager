# book-manager
Book Catalog Management with RestFul API (PHP7, MySQL, Lumen, Docker, Nginx, Composer) and Angular 

### Requires
	* docker 
        - https://docs.docker.com/engine/installation/#time-based-release-schedule
    * docker-compose 
        - https://docs.docker.com/compose/install/

## Installation
### By downloading
1. Clone/download this repository
```bash
$ git clone https://github.com/adonaicruz/book-manager.git
$ cd book-manager

# start docker
$ cd ..
$ docker-compose up
```
2. Create your Environment: 

`copy /api/.env.example to /api/.env`

3. Run AngularJS Front-End Application
```
# watches your files and uses livereload by default
$ cd front
$ npm start

# open http://localhost:8000

```

### Tests
```bash

# on /api:

# windows
$ php vendor/phpunit/phpunit/phpunit

# linux
$ phpunit

```

## License
	This code is available under the [MIT license](http://mths.be/mit).

## Authors
    [Adonai Cruz](https://github.com/adonaicruz)