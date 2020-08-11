<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Globas extends Model
{
    protected $fillable=
    
    ['NewConfirmed','TotalConfirmed','NewRecovered',
    'TotalRecovered','NewDeaths','TotalDeaths'];
}
