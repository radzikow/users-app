<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'firstname' => $faker->firstName,
        'lastname' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => Hash::make('pass'),
        'status' => 1,
    ];
});

$factory->state(User::class, 'lecturer', function (Faker $faker) {
    return [
        'type' => 'Lecturer',
        'phone' => '898574187',
        'education' => $faker->randomElement(['Bachelor of Arts (B.A.)', 'Bachelor of Science (B.S.)', 'Master of Arts (M.A.)', 'Master of Science (M.S.)', 'Doctor of Philosophy (Ph.D.)', 'Doctor of Education (Ed.D.)', 'Medical Doctor (M.D.)']),
    ];
});

$factory->state(User::class, 'administrative', function (Faker $faker) {
    return [
        'type' => 'Administrative',
        'home_address' => $faker->address,
        'contact_address' => $faker->address,
    ];
});
