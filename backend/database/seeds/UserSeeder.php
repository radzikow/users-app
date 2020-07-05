<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 50)->states('lecturer')->create();
        factory(App\User::class, 50)->states('administrative')->create();
    }
}
