<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Globas;
use App\Country;

class DataController extends Controller
{

    public function index(){
     $country= Country::orderBy('NewConfirmed','desc')->get();
return response()->json($country);

    }

    public function fetchGlobas(){
$globas=Globas::all();

return response()->json($globas);

    }

    public function filterByCountry($country){
$result=Country::where('Country',$country)->get()->first();
return response()->json($result);


    }



}
