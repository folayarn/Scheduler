<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use phpDocumentor\Reflection\Types\Nullable;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
$table->bigIncrements('id');
$table->string('Country');
$table->string('CountryCode');
$table->string('Slug');
$table->string('Date');
$table->bigInteger('NewConfirmed');
$table->bigInteger('TotalConfirmed');
$table->bigInteger('NewRecovered');
$table->bigInteger('TotalRecovered');
$table->bigInteger('NewDeaths');
$table->bigInteger('TotalDeaths');
$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('countries');
    }
}
