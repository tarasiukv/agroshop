<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'price',
        'status',
        'category_id',
    ];

//    /**
//     * The attributes that should be hidden for serialization.
//     *
//     * @var array<int, string>
//     */
//    protected $hidden = [
//        'cart_id',
//        'remember_token',
//    ];
}
