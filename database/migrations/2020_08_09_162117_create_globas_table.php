<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGlobasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('globas', function (Blueprint $table) {
            $table->bigIncrements('id');
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
        Schema::dropIfExists('globas');
    }
}
