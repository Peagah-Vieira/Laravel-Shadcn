<?php

namespace Database\Factories;

use App\Models\Content;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->randomElement(User::pluck('id')),
            'content_id' => fake()->randomElement(Content::pluck('id')),
            'comment_text' => fake()->realTextBetween(100, 120),
        ];
    }
}
