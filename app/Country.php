<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable=['Country','CountryCode','Slug','Date',
    'NewConfirmed',	'TotalConfirmed','NewRecovered','TotalRecovered','NewDeaths','TotalDeaths'];
}
