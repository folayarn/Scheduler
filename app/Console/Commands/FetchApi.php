<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use App\Country;
use App\Globas;

class FetchApi extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:FetchApi';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function getClient(){

        $client=new Client();
        $response = $client->request('GET', 'https://api.covid19api.com/summary');
        $data= json_decode($response->getBody()->getContents(),true);

     Globas::truncate();
     Country::truncate();

     foreach($data['Countries'] as $country){


          $counter=   Country::create([
                    'Country'=> $country['Country'],
                    'CountryCode'=>$country['CountryCode'],
                    'Slug'=>$country['Slug'],
                    'Date'=>$country['Date'],
                    'NewConfirmed'=>$country['NewConfirmed'],
                     'TotalConfirmed'=>$country['TotalConfirmed'],
                        'NewRecovered'=>$country['NewRecovered'],
                           'TotalRecovered'=>$country['TotalRecovered'],
                            'NewDeaths'=>$country['NewDeaths'],
                            'TotalDeaths'=>$country['TotalDeaths']
                ]);
     $counter->save();
                 }


        foreach($data as $da){
         Globas::create($da);
         return $data;
         }

     }

    public function handle()
    {

$this->getClient();

echo "The API was Loaded Successfully";
    }
}
