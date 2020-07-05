<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'firstname' => 'John',
            'lastname' => 'Doe',
            'email' => 'john@mail.com',
            'password' => Hash::make('pass'),
            'type' => 'Lecturer',
            'status' => 1,
        ]);

        $this->call([
            UserSeeder::class,
        ]);
    }
}
