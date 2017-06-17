<?php namespace App\Http\Middleware;
class CorsMiddleware {
  public function handle($request, \Closure $next)
  {

    $response = $next($request);
    $response->header('Access-Control-Allow-Origin', '*');
    $response->header('Access-Control-Allow-Methods', 'HEAD, GET, POST, PATCH, PUT, DELETE, OPTIONS');
    $response->header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    if ($request->isMethod('OPTIONS')){
        $response->setStatusCode(200);
        $response->setContent('OK');
    }
    return $response;
  }
}