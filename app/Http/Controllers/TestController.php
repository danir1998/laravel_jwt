<?php

namespace App\Http\Controllers;
use Panda\Yandex\SpeechKitSdk;

use Illuminate\Http\Request;

class TestController extends Controller
{

    public function index()
    {

        try {
            /*
             * OAuth-токен
             * ID каталога
             */
            $cloud = new SpeechKitSdk\Cloud('token');

            $synthesize= new SpeechKitSdk\Synthesize('Привет, разработчик!');
            file_put_contents('response.ogg', $synthesize);
            //die($synthesize);
        } catch (SpeechKitSdk\Exception\ClientException $e) {
            return $e->getMessage();
        }


    }
}
