<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Administrator',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin1234'),
        ]);

        User::factory()->create([
            'name' => 'Content Manager',
            'email' => 'manager@example.com',
            'password' => Hash::make('manager1234'),
        ]);

        User::factory()->create([
            'name' => 'Registered User',
            'email' => 'user@example.com',
            'password' => Hash::make('user1234'),
        ]);
    }
}
